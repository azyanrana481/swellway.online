# GitHub Pages Deployment Guide

## Quick Setup Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Configure for GitHub Pages"
git push origin main
```

### 2. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **GitHub Actions**

### 3. Custom Domain (Optional)
If you want to use your custom domain:
1. In Pages settings, add your domain in **Custom domain** field
2. Create a `CNAME` file in your repository root:
```bash
echo "yourdomain.com" > CNAME
git add CNAME
git commit -m "Add custom domain"
git push
```

### 4. Build and Deploy
The GitHub Action will automatically:
- Install dependencies
- Build your static site
- Deploy to GitHub Pages

Your site will be available at:
- Default: `https://yourusername.github.io/swellway-store/`
- Custom domain: `https://yourdomain.com`

## Manual Deployment (Alternative)

If you prefer manual deployment:

```bash
# Build the static site
npm run build

# The static files will be in the 'out' directory
# Upload the contents of 'out' folder to your hosting
```

## Important Notes

1. **Firebase Features**: Some Firebase features (auth, real-time updates) may need adjustments for static hosting
2. **API Routes**: Next.js API routes won't work on GitHub Pages - consider using external APIs
3. **Images**: All images are now unoptimized for static export compatibility
4. **Routing**: All routes are now static and pre-generated

## Troubleshooting

- If pages don't load, check the browser console for path issues
- Ensure all links use relative paths
- Clear browser cache after deployment
