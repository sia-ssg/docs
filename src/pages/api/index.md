---
title: "API"
description: "Programmatic usage and advanced features"
order: 60
slug: api
---

# API

Sia can be used programmatically in addition to the CLI.

## Installation

```bash
npm install @terrymooreii/sia
```

## Basic Usage

```javascript
import { build, loadConfig } from '@terrymooreii/sia';

// Load configuration
const config = loadConfig('./my-site');

// Build the site
await build({ config });
```

## Available Functions

### `loadConfig(rootDir)`

Load site configuration from `_config.yml`.

```javascript
import { loadConfig } from '@terrymooreii/sia';

const config = loadConfig('./my-site');
```

### `build(options)`

Build the site.

```javascript
import { build } from '@terrymooreii/sia';

await build({
  clean: true,  // Clean output directory first
});
```

### `startServer(options)`

Start the development server.

```javascript
import { startServer } from '@terrymooreii/sia';

await startServer({
  port: 3000,
});
```

## Content Functions

### `parseContent(filePath, content)`

Parse markdown content with front matter.

```javascript
import { parseContent } from '@terrymooreii/sia';

const result = parseContent('post.md', content);
// Returns: { data: {...}, content: '...' }
```

### `loadCollection(config, collectionName)`

Load a content collection.

```javascript
import { loadCollection, loadConfig } from '@terrymooreii/sia';

const config = loadConfig('./my-site');
const posts = loadCollection(config, 'posts');
```

## Template Functions

### `createTemplateEngine(config)`

Create a Nunjucks template engine.

```javascript
import { createTemplateEngine, loadConfig } from '@terrymooreii/sia';

const config = loadConfig('./my-site');
const env = createTemplateEngine(config);
```

## See Also

- [CLI Commands](../reference/cli/) - Command-line interface
- [Configuration](../reference/configuration/) - Configuration options
- [Templates](../reference/templates/) - Template system

