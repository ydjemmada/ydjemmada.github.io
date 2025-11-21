# Hugo Site Workflow

## Repository Structure

This repository uses a **two-branch workflow**:

### `source` branch (YOUR WORKING BRANCH)
- Contains all Hugo source files
- **Content**: `content/` - All your markdown files, images, PDFs
- **Layouts**: `layouts/` - Custom HTML templates
- **Data**: `data/` - TOML/YAML data files (publications, etc.)
- **Assets**: `assets/` - CSS, custom styles
- **Config**: `hugo.toml` - Hugo configuration
- **Themes**: `themes/` - PaperMod and other themes

### `main` branch (DEPLOYMENT BRANCH)
- Contains **only** the built static HTML/CSS/JS files
- This is what GitHub Pages serves
- **DO NOT edit files here directly**

## How to Update Your Website

### Option 1: Using the Deployment Script (Recommended)

1. **Make your changes on the `source` branch:**
   ```bash
   git checkout source
   # Edit your files (content/about.md, layouts/*, data/publications.toml, etc.)
   git add .
   git commit -m "Description of your changes"
   git push origin source
   ```

2. **Run the deployment script:**
   ```bash
   ./deploy.sh
   ```
   
   This script will:
   - Build your Hugo site
   - Switch to main branch  
   - Replace old files with new build
   - Push to GitHub
   - Switch back to source branch

### Option 2: Manual Deployment

If you prefer to do it manually:

```bash
# 1. Make sure you're on source branch
git checkout source

# 2. Build the site
hugo --cleanDestinationDir

# 3. Switch to main branch
git checkout main

# 4. Remove old files (keeping .git)
find . -maxdepth 1 ! -name '.git' ! -name '.' ! -name '..' -exec rm -rf {} +

# 5. Copy new build
git checkout source -- public
cp -r public/* .
rm -rf public

# 6. Commit and push
git add -A
git commit -m "Deploy site update"
git push origin main

# 7. Go back to source branch
git checkout source
```

## Quick Reference

### Editing Content
```bash
git checkout source
# Edit files in content/, layouts/, data/, etc.
```

### Adding a New Publication
```bash
git checkout source
# Edit data/publications.toml
# Add your new publication entry
```

### Customizing Styles
```bash
git checkout source
# Edit assets/css/extended/custom.css
```

### Testing Locally
```bash
git checkout source
hugo server -D
# Visit http://localhost:1313
```

## Important Rules

✅ **DO:**
- Always work on the `source` branch
- Use `./deploy.sh` to publish changes
- Test locally with `hugo server` before deploying

❌ **DON'T:**
- Never edit files on the `main` branch manually
- Don't push source files to `main` branch
- Don't delete the `public/` folder in source branch before deploying

## File Locations

| What you want to edit | Where to find it |
|----------------------|------------------|
| About page | `content/about.md` |
| CV page | `content/cv.md` |
| Publications | `data/publications.toml` |
| Homepage | `content/_index.md` |
| Subject pages | `content/subjects/*.md` |
| Custom CSS | `assets/css/extended/custom.css` |
| Publications layout | `layouts/partials/publication-list.html` |
| Site config | `hugo.toml` |

## Troubleshooting

**Q: My changes aren't showing on the website**
- A: Make sure you ran `./deploy.sh` after making changes on the source branch

**Q: The deploy script fails**
- A: Make sure you're in the repository root directory
- Check that hugo is installed: `hugo version`
- Make sure you have committed all changes on source branch

**Q: I accidentally edited the main branch**
- A: Don't worry! Just discard those changes and use `./deploy.sh` to redeploy from source

**Q: How do I start editing again?**
- A: Always start with `git checkout source`
