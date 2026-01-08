---
title: "Configuration Reference"
description: "Complete reference for _config.yml options"
order: 32
slug: reference/configuration
---

# Configuration Reference

The `_config.yml` file controls all aspects of your Sia site. This is a complete reference of all available options.

## Site Configuration

```yaml
site:
  title: "My Blog"              # Site title
  description: "A personal blog"  # Site description
  url: "https://example.com"    # Full site URL
  author: "Your Name"           # Default author name
```

### `site.title`

The title of your site, used in templates and meta tags.

### `site.description`

A brief description of your site, used in meta tags and RSS feeds.

### `site.url`

The full URL of your site (including protocol). Used for generating absolute URLs and RSS feeds.

### `site.author`

Default author name for all content. Can be overridden per post/page.

## Theme Configuration

```yaml
theme:
  name: main  # Options: main, minimal, developer, magazine
              # Or use external: my-theme (loads sia-theme-my-theme)
```

### `theme.name`

The theme to use. Can be:
- Built-in theme: `main`, `minimal`, `developer`, `magazine`
- External theme: any name (loads `sia-theme-{name}` from npm)

## Input/Output Directories

```yaml
input: src    # Source directory (default: src)
output: dist  # Output directory (default: dist)
```

## Collections

Configure content collections:

```yaml
collections:
  posts:
    path: posts                    # Source path
    layout: post                   # Default layout
    permalink: /blog/:slug/        # URL pattern
    sortBy: date                   # Sort field
    sortOrder: desc                # Sort direction (asc/desc)
  
  pages:
    path: pages
    layout: page
    permalink: /:slug/
  
  notes:
    path: notes
    layout: note
    permalink: /notes/:slug/
    sortBy: date
    sortOrder: desc
```

### Collection Options

- `path` - Directory path relative to `input`
- `layout` - Default layout template
- `permalink` - URL pattern (supports `:slug`, `:year`, `:month`, `:day`)
- `sortBy` - Field to sort by (e.g., `date`, `title`)
- `sortOrder` - Sort direction: `asc` or `desc`

## Pagination

```yaml
pagination:
  size: 10  # Items per page
```

## Server Configuration

```yaml
server:
  port: 3000           # Development server port
  showDrafts: false    # Show drafts in dev mode
```

### `server.port`

Port number for the development server (default: 3000).

### `server.showDrafts`

When `true`, posts with `draft: true` will be included in the development server. Always excluded from production builds.

## Custom Assets

Inject custom CSS and JavaScript files:

```yaml
assets:
  css:
    - custom/styles.css
    - vendor/library.css
  js:
    - custom/script.js
    - vendor/analytics.js
```

Files are specified as paths relative to your project root. During build:
- CSS files are copied to `dist/styles/`
- JavaScript files are copied to `dist/scripts/`

## Complete Example

```yaml
site:
  title: "My Awesome Blog"
  description: "A blog about web development"
  url: "https://myblog.com"
  author: "John Doe"

theme:
  name: developer

input: src
output: dist

collections:
  posts:
    path: posts
    layout: post
    permalink: /blog/:slug/
    sortBy: date
    sortOrder: desc
  
  pages:
    path: pages
    layout: page
    permalink: /:slug/
  
  notes:
    path: notes
    layout: note
    permalink: /notes/:slug/
    sortBy: date
    sortOrder: desc

pagination:
  size: 10

server:
  port: 3000
  showDrafts: false

assets:
  css:
    - custom/overrides.css
  js:
    - custom/analytics.js
```

