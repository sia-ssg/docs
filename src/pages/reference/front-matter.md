---
title: "Front Matter Reference"
description: "Complete reference for YAML front matter fields"
order: 33
slug: reference/front-matter
---

# Front Matter Reference

Front matter is YAML metadata at the beginning of your markdown files. It defines properties like title, date, tags, and more.

## Table of Contents

- [Basic Syntax](#basic-syntax)
- [Common Fields](#common-fields)
- [Posts](#posts)
- [Pages](#pages)
- [Notes](#notes)
- [Permalink Variables](#permalink-variables)
- [Date from Filename](#date-from-filename)
- [Draft Content](#draft-content)
- [Examples](#examples)

---

## Basic Syntax

Front matter is enclosed between triple dashes at the very beginning of the file:

```yaml
---
title: "My Post Title"
date: 2024-12-17
tags: [javascript, tutorial]
---

Your markdown content starts here...
```

**Important:** The front matter must be the first thing in the file with no whitespace before it.

---

## Common Fields

These fields work across all content types (posts, pages, notes):

| Field | Type | Description | Default |
|-------|------|-------------|---------|
| `title` | string | Content title | None (required for posts/pages) |
| `date` | date | Publication date | From filename or current date |
| `tags` | array/string | Tags for categorization | `[]` |
| `layout` | string | Template layout to use | From collection config |
| `permalink` | string | Custom URL path | From collection config |
| `draft` | boolean | Exclude from production builds | `false` |
| `excerpt` | string | Custom excerpt text | Auto-generated from content |
| `slug` | string | URL slug | From filename |
| `image` | string | Featured/social image path | None |
| `author` | string | Author name | `site.author` |
| `description` | string | Meta description | `excerpt` |

For complete details on all fields and examples, see the sections above.

