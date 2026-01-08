---
title: "Themes"
description: "Learn about Sia themes and how to customize them"
order: 40
slug: themes
---

# Themes

Sia themes control the visual appearance and structure of your site.

## Built-in Themes

Sia includes four themes:

- **main** - Clean, modern theme
- **minimal** - Minimalist design
- **developer** - Developer-focused theme
- **magazine** - Magazine-style layout

## Selecting a Theme

Set your theme in `_config.yml`:

```yaml
theme:
  name: developer
```

## Customizing Themes

You can customize themes by:

- Overriding layouts in `_layouts/`
- Overriding includes in `_includes/`
- Adding custom CSS in `styles/main.css`

See [Customizing Themes](../guides/customizing-themes/) for details.

## Creating Themes

Learn how to create your own themes:

- [Creating Themes](creating-themes/) - Complete guide to building themes
- [Customizing](customizing/) - How to customize existing themes

## External Themes

Sia supports external themes distributed as npm packages. Install a theme:

```bash
npm install sia-theme-awesome
```

Then configure it:

```yaml
theme:
  name: awesome
```

