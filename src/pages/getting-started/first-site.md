---
title: "Your First Site"
description: "Create your first Sia site step by step"
order: 12
slug: getting-started/first-site
---

This guide walks you through creating your first Sia site from scratch.

## Step 1: Initialize a New Site

Create a new Sia site:

```bash
sia init my-blog
```

This creates a new directory called `my-blog` with all the necessary files.

## Step 2: Navigate to Your Site

```bash
cd my-blog
```

## Step 3: Install Dependencies

```bash
npm install
```

This installs Sia and any other dependencies.

## Step 4: Start the Development Server

```bash
npm run dev
```

Or use the Sia command directly:

```bash
sia dev
```

You should see output like:

```
🚀 Starting development server...
📝 Server running at http://localhost:3000
```

## Step 5: View Your Site

Open your browser and visit `http://localhost:3000`. You should see your new Sia site!

## Step 6: Create Your First Post

In a new terminal, create a blog post:

```bash
npm run new post "My First Post"
```

Or:

```bash
sia new post "My First Post"
```

This creates a new post in `src/posts/` with today's date.

## Step 7: Edit Your Post

Open the newly created post file (e.g., `src/posts/2024-12-17-my-first-post/index.md`) and add some content:

```markdown
---
title: "My First Post"
date: 2024-12-17
tags: [welcome, first-post]
---

## Welcome!

This is my first post using Sia. I'm excited to start blogging!

Here's some **bold text** and *italic text*.

### Features I Love

- Markdown support
- Live reload
- Easy to use
```

Save the file. The development server will automatically reload, and you'll see your changes!

## Step 8: Build for Production

When you're ready to deploy, build your site:

```bash
npm run build
```

This creates a `dist/` folder with all your static files, ready to deploy to any hosting service.

## Next Steps

- Learn about the [project structure](/getting-started/project-structure/)
- Read the [guides](/guides/) for common tasks
- Check out the [reference documentation](/reference/) for all features

