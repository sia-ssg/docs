---
title: "Deployment"
description: "Deploy your Sia site to various hosting platforms"
order: 25
slug: guides/deployment
---

After building your site with `npm run build`, deploy the `dist/` folder to any static hosting service.

## Build Your Site

First, build your site for production:

```bash
npm run build
```

This creates a `dist/` folder with all your static files.

## Deployment Options

### Netlify

1. **Drag and Drop:**
   - Go to [netlify.com](https://www.netlify.com)
   - Drag your `dist/` folder to the deploy area

2. **Git Integration:**
   - Connect your Git repository
   - Set build command: `npm run build`
   - Set publish directory: `dist`

### Vercel

1. **Import Project:**
   - Go to [vercel.com](https://www.vercel.com)
   - Import your Git repository
   - Vercel will auto-detect Sia

2. **Manual Deploy:**
   ```bash
   npm install -g vercel
   vercel
   ```

### GitHub Pages

1. **GitHub Actions:**
   - Push your code to GitHub
   - Go to Settings → Pages
   - Select "GitHub Actions" as source
   - Create `.github/workflows/deploy.yml`:

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./dist
   ```

2. **Manual Deploy:**
   ```bash
   npm run build
   git checkout --orphan gh-pages
   git add dist/
   git commit -m "Deploy"
   git push origin gh-pages
   ```

### Cloudflare Pages

1. Connect your Git repository
2. Set build command: `npm run build`
3. Set build output directory: `dist`

### Any Static Host

Upload the contents of your `dist/` folder to any static hosting service:

- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Your own server

## Custom Domain

Most hosting services support custom domains. Configure DNS:

- Add a CNAME record pointing to your hosting service
- Or add an A record with the hosting service's IP

## Environment Variables

If you need environment variables, most hosting services support them:

- Netlify: Site settings → Environment variables
- Vercel: Project settings → Environment variables
- GitHub Pages: Use GitHub Secrets with Actions

## Next Steps

- Check the [Configuration Reference](/reference/configuration/) for build options
- Learn about [advanced configuration](/guides/advanced-config/)

