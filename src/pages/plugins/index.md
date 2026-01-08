---
title: "Plugins"
description: "Extend Sia with plugins to add custom functionality"
order: 45
slug: plugins
---

# Plugins

Sia includes a powerful plugin system that allows you to extend functionality at key points in the build lifecycle. Plugins can be created locally in your project or published as npm packages.

## What Are Plugins?

Plugins are JavaScript modules that export a plugin object with hooks that execute at specific points during the build process. They can:

- Transform content before or after parsing
- Generate additional files (search indexes, sitemaps, etc.)
- Add custom Marked extensions for markdown processing
- Register custom Nunjucks template filters and functions
- Modify site data before rendering
- Perform post-build tasks

## Quick Start

### Using a Plugin

1. Install a plugin (if it's an npm package):
   ```bash
   npm install sia-plugin-example
   ```

2. Configure it in `_config.yml`:
   ```yaml
   plugins:
     config:
       sia-plugin-example:
         enabled: true
   ```

3. That's it! The plugin will run automatically during builds.

### Creating a Local Plugin

1. Create a `_plugins/` directory in your project root
2. Create a JavaScript file (`.js` or `.mjs`) in that directory
3. Export a plugin object:

```javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    afterBuild: async (siteData, config, api) => {
      api.log('Plugin executed!', 'info');
    }
  }
};
```

## Plugin Types

Sia supports two types of plugins:

1. **Local plugins**: JavaScript files in your project's `_plugins/` directory
2. **NPM package plugins**: Published npm packages with the `sia-plugin-*` naming convention

## Documentation

- [Creating Plugins](creating-plugins/) - Complete guide to creating local and npm package plugins
- [Configuration](configuration/) - Plugin configuration options
- [Hooks Reference](hooks/) - Complete reference of all available hooks
- [Plugin API](api/) - API utilities available to plugins
- [Plugin Structure](structure/) - Plugin structure, discovery, and error handling

## Examples

Common plugin use cases:

- **Search Index Generation** - Create searchable indexes of your content
- **Sitemap Generation** - Generate XML sitemaps for search engines
- **Content Transformation** - Transform markdown or HTML during processing
- **Custom Markdown** - Add custom markdown syntax
- **Template Filters** - Add custom Nunjucks filters and functions
- **Post-Build Tasks** - Upload files, send notifications, etc.

See [Creating Plugins](creating-plugins/) for detailed examples.

