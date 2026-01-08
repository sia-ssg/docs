---
title: "Markdown Guide"
description: "Complete guide to markdown features in Sia"
order: 35
slug: reference/markdown
---

# Markdown Guide

Sia supports GitHub Flavored Markdown (GFM) plus several enhanced features.

## Basic Syntax

Standard markdown features:
- Headings (`#`, `##`, etc.)
- Emphasis (`*italic*`, `**bold**`)
- Links and images
- Lists (ordered and unordered)
- Blockquotes
- Code blocks and inline code
- Horizontal rules

## GitHub Flavored Markdown

- **Tables** - Create tables with pipes
- **Task Lists** - `- [x]` and `- [ ]`
- **Strikethrough** - `~~text~~`
- **Autolinks** - URLs automatically linked

## Enhanced Features

### Syntax Highlighting

Code blocks are automatically highlighted using Highlight.js:

````markdown
```javascript
function hello() {
  console.log("Hello!");
}
```
````

### Emoji Shortcodes

Use emoji shortcodes: `:smile:`, `:rocket:`, `:heart:`, etc.

### Heading IDs

All headings automatically get ID attributes for anchor links.

### Footnotes

Add footnotes with `[^1]` and define them with `[^1]: content`.

### Smart Typography

Automatic conversion:
- Straight quotes → curly quotes
- `--` → en-dash
- `---` → em-dash
- `...` → ellipsis

### Alert Boxes

GitHub-style alert boxes:

```markdown
> [!NOTE]
> Useful information

> [!WARNING]
> Important warning
```

### Auto-Linkify

Plain URLs are automatically converted to clickable links.

### Media Embeds

- **YouTube** - Automatically embeds YouTube videos
- **Giphy** - Automatically embeds Giphy GIFs

This page contains the complete markdown documentation for Sia.

