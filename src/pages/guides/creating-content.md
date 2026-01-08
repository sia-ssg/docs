---
title: "Creating Content"
description: "Learn how to create posts, pages, and notes in Sia"
order: 21
slug: guides/creating-content
---

Sia supports three types of content: **posts**, **pages**, and **notes**. This guide shows you how to create each type.

## Creating Blog Posts

### Using the CLI

The easiest way to create a new post:

```bash
sia new post "My Post Title"
```

This creates a new folder in `src/posts/` with today's date and a slugified version of your title.

### Manual Creation

You can also create posts manually:

1. Create a folder in `src/posts/` with the format: `YYYY-MM-DD-slug`
2. Create an `index.md` file inside
3. Add front matter and content

Example:

```
src/posts/2024-12-17-my-post/
└── index.md
```

```markdown
---
title: "My Post Title"
date: 2024-12-17
tags: [javascript, tutorial]
---

Your post content here...
```

## Creating Pages

### Using the CLI

```bash
sia new page "About Me"
```

This creates a new folder in `src/pages/` with a slugified version of your title.

### Manual Creation

1. Create a folder in `src/pages/` with your desired slug
2. Create an `index.md` file inside
3. Add front matter and content

Example:

```
src/pages/about/
└── index.md
```

```markdown
---
title: "About"
description: "Learn more about me"
---

## About Me

Your page content here...
```

## Creating Notes

### Using the CLI

```bash
sia new note "Quick thought about something"
```

This creates a new folder in `src/notes/` with a timestamp.

### Manual Creation

1. Create a folder in `src/notes/` with the format: `YYYY-MM-DD-note-TIMESTAMP`
2. Create an `index.md` file inside
3. Add front matter and content

Example:

```
src/notes/2024-12-17-note-1234567890/
└── index.md
```

```markdown
---
date: 2024-12-17T14:30:00
tags: [thought]
---

Just discovered a neat CSS trick! ✨
```

## Front Matter

All content types support YAML front matter. Common fields:

- `title` - Content title (required for posts/pages)
- `date` - Publication date
- `tags` - Array of tags
- `excerpt` - Custom excerpt text
- `draft` - Set to `true` to exclude from builds
- `permalink` - Custom URL

See the [Front Matter Reference](/reference/front-matter/) for complete documentation.

## Organizing Assets

Place assets (images, PDFs, etc.) in the same folder as your content:

```
src/posts/2024-12-17-my-post/
├── index.md
├── hero-image.jpg
└── diagram.png
```

Reference them in your markdown:

```markdown
![Hero Image](hero-image.jpg)
```

## Next Steps

- Learn about [working with images and assets](/guides/images-assets/)
- Read the [Front Matter Reference](/reference/front-matter/) for all options
- Explore [markdown features](/reference/markdown/)

