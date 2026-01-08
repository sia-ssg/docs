---
title: "Plugin API"
description: "API utilities available to plugins"
order: 48
slug: plugins/api
---

# Plugin API

The `api` object passed to hooks provides utilities for plugins to interact with the build system.

## API Methods

### `api.config`

Full site configuration object (read-only recommended).

**Type:** Object

**Example:**
```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    const siteUrl = api.config.site.url;
    api.log(`Site URL: ${siteUrl}`, 'info');
  }
}
```

**Note:** While you can modify `api.config`, it's recommended to treat it as read-only to avoid unexpected behavior.

### `api.writeFile(path, content)`

Write a file to the output directory.

**Parameters:**
- `path` (string): File path relative to output directory
- `content` (string): File content

**Example:**
```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    const output = JSON.stringify(siteData, null, 2);
    api.writeFile('site-data.json', output);
  }
}
```

**Note:** The path is relative to the output directory. Use `api.joinPath()` to construct paths safely.

### `api.readFile(path)`

Read a file from the filesystem.

**Parameters:**
- `path` (string): Absolute file path

**Returns:** File content (string)

**Example:**
```javascript
hooks: {
  beforeBuild: (config, api) => {
    const content = api.readFile('/absolute/path/to/file.txt');
    // Process content
  }
}
```

### `api.joinPath(...paths)`

Join path segments (wrapper around Node.js `path.join`).

**Parameters:**
- `...paths` (string): Path segments

**Returns:** Joined path (string)

**Example:**
```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    const outputPath = api.joinPath(config.outputDir, 'data', 'index.json');
    api.writeFile(outputPath, JSON.stringify(siteData));
  }
}
```

**Note:** This ensures cross-platform path compatibility (handles Windows vs Unix paths).

### `api.log(message, level)`

Log a message during the build process.

**Parameters:**
- `message` (string): Log message
- `level` (string): Log level - `'info'`, `'warn'`, or `'error'` (default: `'info'`)

**Example:**
```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    api.log('Processing complete', 'info');
    api.log('Warning: something unusual', 'warn');
    api.log('Error occurred', 'error');
  }
}
```

**Log Levels:**
- `'info'`: Informational messages (default)
- `'warn'`: Warning messages
- `'error'`: Error messages

## Usage Examples

### Writing Multiple Files

```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    // Write search index
    const searchData = {
      pages: siteData.collections.pages.map(p => ({
        title: p.title,
        url: p.url
      }))
    };
    api.writeFile('search-index.json', JSON.stringify(searchData, null, 2));
    
    // Write sitemap
    const sitemap = generateSitemap(siteData);
    api.writeFile('sitemap.xml', sitemap);
    
    api.log('Generated search index and sitemap', 'info');
  }
}
```

### Reading Configuration Files

```javascript
hooks: {
  beforeBuild: (config, api) => {
    try {
      const customConfig = api.readFile(api.joinPath(process.cwd(), 'custom-config.json'));
      const parsed = JSON.parse(customConfig);
      // Use parsed configuration
    } catch (err) {
      api.log('Could not read custom config', 'warn');
    }
  }
}
```

### Error Handling with Logging

```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    try {
      // Plugin logic
      api.log('Plugin executed successfully', 'info');
    } catch (err) {
      api.log(`Plugin error: ${err.message}`, 'error');
      // Don't throw - let the build continue
    }
  }
}
```

### Path Construction

```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    // Safe path construction
    const dataDir = api.joinPath(config.outputDir, 'data');
    const indexPath = api.joinPath(dataDir, 'index.json');
    
    api.writeFile(indexPath, JSON.stringify(siteData));
  }
}
```

## Best Practices

1. **Use `api.joinPath()` for paths** - Ensures cross-platform compatibility
2. **Log appropriately** - Use appropriate log levels (`info`, `warn`, `error`)
3. **Handle errors gracefully** - Don't throw errors unless necessary; log them instead
4. **Read-only config** - Treat `api.config` as read-only to avoid side effects
5. **Async operations** - Use async/await for file operations and external calls

## Related

- [Plugin Hooks](/plugins/hooks/) - Learn about hooks that receive the API object
- [Creating Plugins](/plugins/creating-plugins/) - See API usage in examples

