---
title: "Plugin Structure"
description: "Plugin structure, discovery, and error handling"
order: 49
slug: plugins/structure
---

# Plugin Structure

This guide covers the structure of plugins, how they're discovered, and how errors are handled.

## Plugin Structure

A plugin must export an object with the following structure:

```javascript
export default {
  name: 'plugin-name',        // Required: Unique plugin identifier
  version: '1.0.0',            // Required: Plugin version
  dependencies: [],             // Optional: Array of plugin names this depends on
  configSchema: {},            // Optional: Configuration schema
  hooks: {                     // Optional: Hook functions
    afterBuild: async (siteData, config, api) => {
      // Plugin logic
    }
  }
};
```

## Required Fields

### `name`

Unique identifier for the plugin (string). This should match the plugin's npm package name (if published) or be a descriptive name for local plugins.

**Example:**
```javascript
export default {
  name: 'sia-plugin-search',
  // ...
};
```

**Note:** For npm packages, the name should start with `sia-plugin-`. For local plugins, any name is acceptable.

### `version`

Plugin version (string). Follows semantic versioning (e.g., `'1.0.0'`).

**Example:**
```javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  // ...
};
```

## Optional Fields

### `dependencies`

Array of plugin names that must load before this plugin. Plugins listed here will be loaded and executed before this plugin.

**Example:**
```javascript
export default {
  name: 'enhanced-search',
  version: '1.0.0',
  dependencies: ['search-index'], // Requires search-index plugin
  hooks: {
    afterBuild: async (siteData, config, api) => {
      // This plugin enhances the search index created by search-index plugin
      // It runs after search-index because of the dependency
    }
  }
};
```

**Note:** Circular dependencies are not supported and will cause an error.

### `configSchema`

Object describing plugin configuration options (for documentation purposes). This doesn't enforce validation automatically, but helps document what configuration options are available.

**Example:**
```javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  configSchema: {
    outputPath: { type: 'string', default: 'output.json' },
    enabled: { type: 'boolean', default: true },
    maxItems: { type: 'number', default: 100 }
  },
  hooks: {
    // ...
  }
};
```

### `hooks`

Object mapping hook names to hook functions. See [Plugin Hooks](/plugins/hooks/) for a complete reference.

**Example:**
```javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    beforeBuild: (config, api) => {
      // Initialize
    },
    afterBuild: async (siteData, config, api) => {
      // Process
    }
  }
};
```

## Plugin Discovery

Sia discovers plugins from two sources:

### 1. Local Plugins

Files in the `_plugins/` directory (`.js` or `.mjs` files).

**Structure:**
```
project-root/
├── _plugins/
│   ├── search-index.js
│   └── sitemap-generator.js
└── _config.yml
```

**Example:**
```javascript
// _plugins/search-index.js
export default {
  name: 'search-index',
  version: '1.0.0',
  hooks: {
    afterBuild: async (siteData, config, api) => {
      // Plugin logic
    }
  }
};
```

### 2. NPM Package Plugins

Packins in `node_modules` matching the pattern `sia-plugin-*`.

**Installation:**
```bash
npm install sia-plugin-search
```

**Discovery:** Sia automatically discovers packages in `node_modules` that start with `sia-plugin-`.

## Plugin Loading Order

Plugins are loaded in the following order:

1. **Dependency order** - Plugins with dependencies load after their dependencies
2. **Explicit order** - If `plugins.order` is specified in config, those plugins load first
3. **Discovery order** - Remaining plugins load in discovery order

**Example:**
```yaml
plugins:
  order:
    - sia-plugin-search
    - sia-plugin-sitemap
```

In this case:
1. `sia-plugin-search` loads first
2. `sia-plugin-sitemap` loads second
3. Other discovered plugins load after, in dependency order

## Error Handling

By default, plugin errors are logged but don't stop the build. Set `plugins.strictMode: true` in your config to fail the build on plugin errors.

### Error Types

Errors include:
- **Plugin loading failures** - Plugin file can't be loaded or doesn't export correctly
- **Hook execution errors** - Errors thrown during hook execution
- **Validation errors** - Configuration or structure validation failures

### Error Messages

Error messages include:
- Plugin name
- Detailed error information
- Stack trace (in development mode)

### Strict Mode

With `strictMode: true`, any plugin error will cause the build to fail:

```yaml
plugins:
  strictMode: true
```

With `strictMode: false` (default), errors are logged but the build continues:

```yaml
plugins:
  strictMode: false  # Default
```

### Error Handling in Plugins

Plugins should handle errors gracefully:

```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    try {
      // Plugin logic that might fail
      await riskyOperation();
      api.log('Operation successful', 'info');
    } catch (err) {
      api.log(`Plugin error: ${err.message}`, 'error');
      // Don't throw - let the build continue
      // Only throw if the error is critical
    }
  }
}
```

## Module Systems

Plugins can use either CommonJS or ES modules:

### ES Modules (Recommended)

```javascript
// _plugins/my-plugin.mjs
export default {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    // ...
  }
};
```

### CommonJS

```javascript
// _plugins/my-plugin.js
module.exports = {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    // ...
  }
};
```

**Note:** For npm packages, use ES modules (`"type": "module"` in `package.json`).

## Best Practices

1. **Unique names** - Ensure plugin names are unique to avoid conflicts
2. **Version properly** - Use semantic versioning for plugin versions
3. **Handle errors** - Always wrap risky operations in try-catch
4. **Document dependencies** - List all plugin dependencies in the `dependencies` array
5. **Use configSchema** - Document configuration options even if not validated

## Related

- [Plugin Configuration](/plugins/configuration/) - Learn about configuring plugins
- [Creating Plugins](/plugins/creating-plugins/) - See examples of plugin structure
- [Plugin Hooks](/plugins/hooks/) - Learn about available hooks

