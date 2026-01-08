---
title: "CLI Commands"
description: "Complete reference for all Sia command-line interface commands"
order: 31
slug: reference/cli
---

# CLI Commands

Sia provides a command-line interface for common tasks. All commands start with `sia`.

## Site Management

### `sia init [directory]`

Create a new Sia site.

```bash
# Create site in current directory
sia init

# Create site in named directory
sia init my-blog

# Non-interactive mode (uses defaults)
sia init my-blog --yes
```

**Options:**
- `--yes` - Skip interactive prompts, use defaults

### `sia dev`

Start the development server with live reload.

```bash
# Start on default port (3000)
sia dev

# Start on custom port
sia dev --port 8080
```

**Options:**
- `--port <number>` - Specify port number (default: 3000)

### `sia build`

Build your site for production.

```bash
# Standard build
sia build

# Clean build (removes dist/ first)
sia build --clean
```

**Options:**
- `--clean` - Remove output directory before building

## Content Creation

### `sia new post "Title"`

Create a new blog post.

```bash
sia new post "My Post Title"
```

Creates a folder in `src/posts/` with today's date and a slugified title.

### `sia new page "Title"`

Create a new static page.

```bash
sia new page "About Me"
```

Creates a folder in `src/pages/` with a slugified title.

### `sia new note "Content"`

Create a new note (short-form content).

```bash
sia new note "Quick thought"
```

Creates a folder in `src/notes/` with a timestamp.

## Theme Management

### `sia theme <name>`

Create a new theme package scaffold.

```bash
# Interactive mode
sia theme my-theme

# Quick mode (skip prompts)
sia theme my-theme --quick
```

**Options:**
- `--quick` - Skip interactive prompts

This creates a `sia-theme-{name}/` directory with all necessary files for a theme package.

## Global Options

All commands support:

- `--help` - Show help information
- `--version` - Show version number

## Examples

```bash
# Complete workflow
sia init my-site
cd my-site
npm install
sia dev

# Create content
sia new post "Welcome"
sia new page "About"
sia new note "First note"

# Build for production
sia build
```

