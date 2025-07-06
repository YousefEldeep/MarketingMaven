# 🚀 GitHub Pages Deployment Guide

## Quick Setup (5 minutes)

### 1. Create GitHub Repository
1. Go to GitHub.com and click "New repository"
2. Name it `saudi-marketing-website` (or your preferred name)
3. Make it **Public** (required for free GitHub Pages)
4. Don't initialize with README, .gitignore, or license

### 2. Upload Your Code
```bash
# Extract the website files to a folder
# Navigate to that folder in terminal
cd saudi-marketing-website

# Initialize git
git init
git add .
git commit -m "Initial commit: Saudi Marketing website"

# Connect to GitHub (replace USERNAME with your GitHub username)
git remote add origin https://github.com/USERNAME/saudi-marketing-website.git
git branch -M main
git push -u origin main
```

### 3. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll down to **Pages** section
4. Under "Source", select **GitHub Actions**
5. The deployment will start automatically!

### 4. Access Your Website
- Your site will be available at: `https://USERNAME.github.io/saudi-marketing-website/`
- First deployment takes 2-3 minutes
- Check the **Actions** tab to monitor progress

## ⚙️ Configuration Options

### Custom Domain (Optional)
If you have your own domain:
1. In repository Settings > Pages
2. Add your custom domain (e.g., `saudimarketing.com`)
3. Update `vite.config.static.ts`: change `base: "/"` to `base: "/"`

### Repository Name Impact
If your repo name is different, update `vite.config.static.ts`:
```typescript
// For repo named "my-website"
base: "/my-website/"

// For custom domain or username.github.io
base: "/"
```

## 🔄 Making Updates

After initial setup, any changes you push to the `main` branch will automatically rebuild and deploy:

```bash
# Make your changes
git add .
git commit -m "Update website content"
git push
```

## 📊 Monitoring

- **Build Status**: Check the Actions tab in your repository
- **Site Status**: Visit your live URL
- **Build Logs**: Click on any workflow run for detailed logs

## 🛠 Troubleshooting

### Build Fails?
1. Check the Actions tab for error details
2. Common issue: Ensure all image paths are correct
3. Verify package.json dependencies

### Site Not Loading?
1. Wait 2-3 minutes after first deployment
2. Check if repository is public
3. Verify Pages is enabled in Settings

### Images Not Showing?
- All images are included in the `attached_assets` folder
- They're automatically copied during build

## 📁 What Gets Deployed

The GitHub Action:
1. Installs dependencies (`npm ci`)
2. Builds static files (`npm run build:static`)
3. Deploys to GitHub Pages
4. Your site becomes live automatically

## 🎯 Production Ready

This deployment includes:
- ✅ Optimized bundles for fast loading
- ✅ All your company assets (logo, client images)
- ✅ Responsive design for all devices
- ✅ SEO-friendly structure
- ✅ Professional black & white theme

Your Saudi Marketing website will be live and professional-grade within minutes!