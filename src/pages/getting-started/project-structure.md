---
title: "Project Structure"
description: "Understanding the Sia project structure"
order: 13
slug: getting-started/project-structure
---

When you create a new Sia site, it follows this structure:

```
my-site/
├── _config.yml          # Site configuration
├── package.json         # Node.js dependencies
├── src/
│   ├── posts/           # Blog posts (markdown)
│   │   └── 2024-12-17-my-post/
│   │       ├── index.md
│   │       └── (assets can go here)
│   ├── pages/           # Static pages
│   │   └── about/
│   │       ├── index.md
│   │       └── (assets can go here)
│   ├── notes/           # Short notes/tweets
│   │   └── 2024-12-17-note-1234567890/
│   │       ├── index.md
│   │       └── (assets can go here)
│   └── images/          # Images
├── assets/              # Static assets (optional)
├── static/              # Static assets (optional)
├── public/              # Static assets (optional)
├── favicon.ico          # Site favicon (optional)
├── _layouts/            # Custom layouts (optional)
├── _includes/            # Custom includes (optional)
├── styles/              # Custom CSS (optional)
└── dist/                # Generated output (created on build)
```

## Key Files and Directories

### `_config.yml`

The main configuration file for your site. Defines:

- Site metadata (title, description, URL, author)
- Theme selection
- Collection settings
- Server configuration
- And more

See the [Configuration Reference](/reference/configuration/) for all options.

### `src/` Directory

Contains all your content:

- **`posts/`** - Blog posts organized by date
- **`pages/`** - Static pages (About, Contact, etc.)
- **`notes/`** - Short-form content (like tweets)
- **`images/`** - Image files

### Content Organization

Each post, page, and note is created as a **folder** containing an `index.md` file. This allows you to organize assets (images, PDFs, etc.) alongside your content:

```
src/posts/2024-12-17-my-post/
├── index.md              # The post content
├── hero-image.jpg        # Post-specific image
└── diagram.png           # Another asset
```

### Customization Directories

- **`_layouts/`** - Override theme layouts
- **`_includes/`** - Override theme includes
- **`styles/`** - Custom CSS (overrides theme styles)

### Static Assets

Place static files in any of these directories:

- `assets/`
- `static/`
- `public/`

All files from these directories are copied to `dist/` during build.

### `dist/` Directory

The output directory containing your built static site. This is what you deploy to hosting.

**Note:** This directory is generated and should not be edited directly. It's typically excluded from version control.

## Next Steps

- Learn about [creating content](/guides/creating-content/)
- Explore [configuration options](/reference/configuration/)
- See how to [customize themes](/guides/customizing-themes/)

