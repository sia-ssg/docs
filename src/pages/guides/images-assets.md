---
title: "Images & Assets"
description: "Working with images and static assets in Sia"
order: 22
slug: guides/images-assets
---

Sia makes it easy to work with images and other static assets. This guide covers the best practices.

## Image Organization

### Content-Specific Images

Place images in the same folder as your content:

```
src/posts/2024-12-17-my-post/
├── index.md
├── hero.jpg
└── diagram.png
```

Reference them in your markdown:

```markdown
![Hero Image](hero.jpg)
![Diagram](diagram.png)
```

### Global Images

Place shared images in `src/images/`:

```
src/images/
├── logo.png
└── screenshots/
    └── feature-1.png
```

Reference them with absolute paths:

```markdown
![Logo](/images/logo.png)
![Screenshot](/images/screenshots/feature-1.png)
```

## Static Assets

Sia automatically copies static assets from these directories:

- `assets/`
- `static/`
- `public/`

### Example Structure

```
my-site/
├── assets/
│   ├── favicon.ico
│   ├── robots.txt
│   └── fonts/
│       └── custom-font.woff2
├── static/
│   └── documents/
│       └── resume.pdf
└── public/
    └── manifest.json
```

All files are copied to `dist/` during build, preserving directory structure.

## Supported File Types

- **Images** - All formats (jpg, png, gif, svg, webp, etc.)
- **Fonts** - .woff, .woff2, .ttf, .eot
- **Documents** - .pdf, .txt, .json, .xml
- **Scripts** - .js files
- **Stylesheets** - .css files

## Favicon

Place `favicon.ico` in the project root or in any asset directory:

```
my-site/
├── favicon.ico          # Root level
└── assets/
    └── favicon.ico      # Or in assets/
```

## Best Practices

1. **Use content-specific folders** for images that belong to a specific post/page
2. **Use `src/images/`** for shared images used across multiple pages
3. **Optimize images** before adding them to your site
4. **Use descriptive filenames** for better organization
5. **Keep file sizes reasonable** for faster page loads

## Next Steps

- Learn about [customizing themes](/guides/customizing-themes/)
- Read about [deployment](/guides/deployment/) options

