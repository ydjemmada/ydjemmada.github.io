#!/bin/bash
# Hugo Site Deployment Script
# This script builds your Hugo site and deploys it to GitHub Pages

set -e  # Exit on error

echo "🚀 Starting Hugo site deployment..."

# Make sure we're on the source branch
echo "📝 Checking current branch..."
current_branch=$(git branch --show-current)
if [ "$current_branch" != "source" ]; then
    echo "⚠️  Warning: You're on branch '$current_branch'. Switching to 'source' branch..."
    git checkout source
fi

# Build the Hugo site
echo "🔨 Building Hugo site..."
hugo --cleanDestinationDir

# Check if build was successful
if [ ! -d "public" ]; then
    echo "❌ Error: public directory not found. Hugo build failed."
    exit 1
fi

echo "✅ Hugo build complete!"

# Switch to main branch
echo "📋 Switching to main branch..."
git checkout main

# Remove old files (except .git)
echo "🧹 Cleaning main branch..."
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# Copy built files from source branch's public folder
echo "📦 Copying built site from source branch..."
git checkout source -- public
cp -r public/* .
rm -rf public

# Commit and push
echo "💾 Committing changes..."
git add -A
git commit -m "Deploy site - $(date +'%Y-%m-%d %H:%M:%S')" || echo "No changes to commit"

echo "🚀 Pushing to GitHub..."
git push origin main

# Go back to source branch
echo "🔄 Returning to source branch..."
git checkout source

echo "✨ Deployment complete! Your site should be live shortly at https://ydjemmada.github.io"
