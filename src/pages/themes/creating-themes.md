---
title: "Creating Themes"
description: "Complete guide to creating custom themes for Sia"
order: 41
slug: themes/creating-themes
---

# Creating Themes

This guide explains how to create custom themes for Sia and distribute them as npm packages.

## Theme Overview

A Sia theme consists of:

- **Layouts** - Base templates that wrap content
- **Pages** - Templates for listing pages
- **Includes** - Reusable components
- **Styles** - CSS files

## Theme Structure

A complete theme follows this structure:

```
themes/your-theme/
├── layouts/
│   ├── base.njk
│   ├── post.njk
│   ├── page.njk
│   └── note.njk
├── includes/
│   ├── header.njk
│   ├── footer.njk
│   └── ...
├── pages/
│   ├── index.njk
│   ├── blog.njk
│   └── ...
└── styles/
    └── main.css
```

## Required Files

### Layouts

- `base.njk` - Base HTML structure
- `post.njk` - Blog post template
- `page.njk` - Static page template
- `note.njk` - Note template

### Pages

- `index.njk` - Homepage
- `blog.njk` - Blog listing
- `notes.njk` - Notes listing
- `tags.njk` - Tags overview
- `tag.njk` - Individual tag page
- `feed.njk` - RSS feed

## Creating a Theme Package

Use the Sia CLI to scaffold a new theme:

```bash
sia theme my-theme
```

This creates a `sia-theme-my-theme/` directory with all necessary files.

## Publishing Your Theme

1. Customize your theme
2. Update `package.json` with your information
3. Publish to npm:

```bash
cd sia-theme-my-theme
npm publish
```

## Using External Themes

Install a theme package:

```bash
npm install sia-theme-awesome
```

Configure in `_config.yml`:

```yaml
theme:
  name: awesome
```

## Best Practices

- Follow the standard theme structure
- Support dark mode
- Make it responsive
- Document your theme
- Test with different content types

This page contains the complete guide to creating themes for Sia.

