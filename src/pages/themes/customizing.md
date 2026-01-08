---
title: "Customizing Themes"
description: "How to customize existing Sia themes"
order: 42
slug: themes/customizing
---

# Customizing Themes

You can customize any Sia theme without modifying the theme files directly.

## Override Layouts

Create custom layouts in `_layouts/` to override theme layouts:

```
_layouts/
├── base.njk      # Override base layout
├── post.njk      # Override post layout
└── page.njk      # Override page layout
```

## Override Includes

Create custom includes in `_includes/`:

```
_includes/
├── header.njk    # Override header
└── footer.njk    # Override footer
```

## Custom Styles

Add `styles/main.css` to override theme styles. Your custom CSS will completely replace the theme's default styles.

## Theme Resolution Order

Sia resolves themes in this order:

1. Custom layouts/includes in your project
2. Built-in themes
3. External npm packages (`sia-theme-*`)

This means your custom files take precedence over theme defaults.

## Example: Customizing the Header

1. Copy the theme's header include (if needed for reference)
2. Create `_includes/header.njk` with your customizations
3. Your custom header will be used instead of the theme's default

## Best Practices

- Start with a built-in theme that's close to what you want
- Override only what you need to change
- Keep customizations minimal for easier maintenance
- Document your customizations

