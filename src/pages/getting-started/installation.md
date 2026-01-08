---
title: "Installation"
description: "Install Sia on your system"
order: 11
slug: getting-started/installation
---

## Prerequisites

Sia requires **Node.js 18.0.0 or higher**. Check your Node.js version:

```bash
node --version
```

If you don't have Node.js installed, download it from [nodejs.org](https://nodejs.org/).

## Installation Methods

### Global Installation (Recommended)

Install Sia globally to use the `sia` command anywhere:

```bash
npm install -g @terrymooreii/sia
```

After installation, verify it works:

```bash
sia --version
```

### Local Installation

You can also install Sia as a local dependency in your project:

```bash
npm install @terrymooreii/sia
```

Then use it via `npx`:

```bash
npx sia init my-blog
npx sia dev
npx sia build
```

### Using npx (No Installation)

You can use Sia without installing it globally by using `npx`:

```bash
npx @terrymooreii/sia init my-blog
```

## Upgrading

To upgrade Sia to the latest version:

```bash
npm install -g @terrymooreii/sia@latest
```

Or if installed locally:

```bash
npm update @terrymooreii/sia
```

## Next Steps

Now that Sia is installed, learn how to [create your first site](/getting-started/first-site/).

