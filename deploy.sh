#!/bin/bash
# Hugo Site Deployment Script
# This script builds your Hugo site and deploys it to GitHub Pages
# 
# How it works:
# 1. Builds the Hugo site (creates/updates public/ folder)
# 2. Pushes ONLY the public/ folder contents to the main branch
# 3. The main branch contains only the static site files

set -e  # Exit on error

echo "🚀 Starting Hugo site deployment..."

# Make sure we're on the source branch
echo "📝 Checking current branch..."
current_branch=$(git branch --show-current)
if [ "$current_branch" != "source" ]; then
    echo "⚠️  Warning: You're on branch '$current_branch'. Switching to 'source' branch..."
    git checkout source
fi

# Use the newer Hugo version if available
HUGO_BIN="hugo"
if [ -f "$HOME/.local/bin/hugo" ]; then
    HUGO_BIN="$HOME/.local/bin/hugo"
    echo "Using Hugo $(${HUGO_BIN} version | head -1)"
fi

# Build the Hugo site
echo "🔨 Building Hugo site..."
$HUGO_BIN --cleanDestinationDir

# Check if build was successful
if [ ! -d "public" ]; then
    echo "❌ Error: public directory not found. Hugo build failed."
    exit 1
fi

echo "✅ Hugo build complete!"

# Navigate to public folder
cd public

# Initialize git if needed, or update existing
if [ ! -d ".git" ]; then
    echo "📋 Initializing git in public folder..."
    git init
    # Get the remote URL from the parent repository
    REMOTE_URL=$(cd .. && git remote get-url origin)
    git remote add origin "$REMOTE_URL"
    git config --local credential.helper "$(cd .. && git config --get credential.helper)"
else
    echo "📋 Updating existing git repository in public folder..."
fi

# Commit and push
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy site - $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "🚀 Pushing to GitHub..."
git push -f origin HEAD:main

# Go back to parent directory
cd ..

echo "✨ Deployment complete! Your site should be live shortly at https://ydjemmada.github.io"
echo "💡 Tip: You're still on the 'source' branch. Continue editing your files here."
