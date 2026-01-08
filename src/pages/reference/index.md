---
title: "Reference"
description: "Complete API reference and documentation"
order: 30
slug: reference
---

Complete reference documentation for all Sia features.

## Reference Sections

- [CLI Commands](cli/) - All command-line interface commands
- [Configuration](configuration/) - Complete `_config.yml` reference
- [Front Matter](front-matter/) - All front matter fields and options
- [Templates](templates/) - Template variables, filters, and syntax
- [Markdown](markdown/) - Markdown features and syntax

## Quick Reference

### Common Commands

```bash
# Create a new site
sia init my-site

# Start development server
sia dev

# Build for production
sia build

# Create new content
sia new post "Title"
sia new page "Title"
sia new note "Content"
```

### Configuration File

```yaml
site:
  title: "My Site"
  description: "Site description"
  url: "https://example.com"

theme:
  name: main

collections:
  posts:
    path: posts
    layout: post
    permalink: /blog/:slug/
```

