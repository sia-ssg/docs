---
title: "Template Reference"
description: "Nunjucks template variables, filters, and syntax"
order: 34
slug: reference/templates
---

# Template Reference

Sia uses [Nunjucks](https://mozilla.github.io/nunjucks/) as its templating engine. This guide covers all available variables and custom filters.

## Global Variables

### `site`

Site configuration from `_config.yml`:

- `site.title` - Site title
- `site.description` - Site description
- `site.url` - Full site URL
- `site.author` - Default author name
- `site.basePath` - URL path prefix

### `collections`

Object containing all content collections:

- `collections.posts` - All blog posts
- `collections.pages` - All static pages
- `collections.notes` - All notes

### `tags`

Object containing tag data, keyed by normalized tag name. Each tag has:
- `name` - Original tag name
- `slug` - URL-friendly slug
- `items` - Content items with this tag
- `count` - Number of items

### `allTags`

Array of all tags sorted by count (most used first).

## Page Variables

### `page`

The current content item being rendered:

- `page.title` - Content title
- `page.date` - Publication date
- `page.tags` - Array of tag strings
- `page.content` - Rendered HTML content
- `page.excerpt` - Plain text excerpt
- `page.url` - Full URL path
- `page.slug` - URL slug
- And more...

### `content`

The rendered HTML content. Always use with the `safe` filter:

```nunjucks
{{ content | safe }}
```

## Custom Filters

Sia provides these custom filters:

- `date(format)` - Format dates
- `slug` - Generate URL-friendly slugs
- `excerpt(length)` - Extract excerpts
- `limit(count)` - Limit arrays
- `skip(count)` - Skip array items
- `wordCount` - Get word count
- `readingTime(wpm)` - Estimate reading time
- `groupBy(key)` - Group arrays
- `sortBy(key, order)` - Sort arrays
- `where(key, value)` - Filter items
- `withTag(tag)` - Filter by tag
- `json(spaces)` - Convert to JSON
- `url` - Prepend basePath

This page contains the complete template reference for Sia.

