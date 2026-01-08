---
title: "Advanced Configuration"
description: "Advanced configuration options for Sia"
order: 24
slug: guides/advanced-config
---

This guide covers advanced configuration options in Sia.

## Custom CSS and JavaScript

Inject custom CSS and JavaScript files in `_config.yml`:

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

Custom CSS is injected after theme styles (allowing overrides), and JavaScript is injected before the closing `</body>` tag.

## Draft Content

Control draft visibility in development:

```yaml
server:
  showDrafts: true  # Show drafts in dev server
```

When `showDrafts` is `true`, posts with `draft: true` in front matter will be included in the development server. Drafts are always excluded from production builds.

## Custom Permalinks

Set custom permalinks per collection:

```yaml
collections:
  posts:
    permalink: /blog/:year/:month/:slug/
```

Or override per item in front matter:

```yaml
---
title: "Special Post"
permalink: /featured/special-post/
---
```

## Pagination

Configure pagination size:

```yaml
pagination:
  size: 10  # Items per page
```

## Custom Collections

You can create custom collections beyond posts, pages, and notes by adding them to `_config.yml`:

```yaml
collections:
  projects:
    path: projects
    layout: project
    permalink: /projects/:slug/
    sortBy: date
    sortOrder: desc
```

## Next Steps

- See the complete [Configuration Reference](/reference/configuration/)
- Learn about [deployment](/guides/deployment/)

