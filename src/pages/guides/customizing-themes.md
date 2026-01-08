---
title: "Customizing Themes"
description: "Customize existing themes or create your own"
order: 23
slug: guides/customizing-themes
---

Sia comes with built-in themes, but you can easily customize them or create your own.

## Built-in Themes

Sia includes four themes:

- **main** - Clean, modern theme
- **minimal** - Minimalist design
- **developer** - Developer-focused theme
- **magazine** - Magazine-style layout

Select a theme in `_config.yml`:

```yaml
theme:
  name: developer
```

## Customizing Existing Themes

### Override Layouts

Create custom layouts in `_layouts/` to override theme layouts:

```
_layouts/
├── base.njk      # Override base layout
├── post.njk      # Override post layout
└── page.njk      # Override page layout
```

### Override Includes

Create custom includes in `_includes/`:

```
_includes/
├── header.njk    # Override header
└── footer.njk    # Override footer
```

### Custom Styles

Add `styles/main.css` to override theme styles:

```css
/* Custom styles */
.my-custom-class {
  color: blue;
}
```

Your custom CSS will be used instead of the theme's default styles.

## Creating a Custom Theme

For a complete custom theme, see the [Creating Themes](/themes/creating-themes/) guide.

## Theme Resolution Order

Sia resolves themes in this order:

1. Custom layouts/includes in your project
2. Built-in themes (`main`, `minimal`, `developer`, `magazine`)
3. External npm packages (`sia-theme-*`)

## Next Steps

- Learn about [creating themes](/themes/creating-themes/)
- Explore [advanced configuration](/guides/advanced-config/)

