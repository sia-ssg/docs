---
title: "Plugin Configuration"
description: "Configure plugins in your Sia site"
order: 46
slug: plugins/configuration
---

# Plugin Configuration

Plugins are configured in your `_config.yml` or `_config.json` file.

## Basic Configuration

```yaml
plugins:
  enabled: true          # Master switch (default: true)
  strictMode: false      # Fail build on plugin errors (default: false)
  order:                 # Explicit plugin execution order (optional)
    - sia-search-plugin
    - sia-sitemap-plugin
  plugins: []            # Explicit list of plugins to load (optional, empty = all)
  config:                # Plugin-specific configuration
    sia-search-plugin:
      outputPath: search-index.json
      includeContent: false
```

## Configuration Options

### `enabled`

Set to `false` to disable all plugins. Default: `true`

```yaml
plugins:
  enabled: false  # Disables all plugins
```

### `strictMode`

If `true`, the build will fail if any plugin has an error. If `false` (default), errors are logged but the build continues.

```yaml
plugins:
  strictMode: true  # Build fails on plugin errors
```

### `order`

Array of plugin names specifying execution order. Plugins not in this list will execute after, in dependency order.

```yaml
plugins:
  order:
    - sia-search-plugin
    - sia-sitemap-plugin
    - my-custom-plugin
```

### `plugins`

Array of plugin names to explicitly load. If empty or omitted, all discovered plugins are loaded.

```yaml
plugins:
  plugins:
    - sia-search-plugin
    - sia-sitemap-plugin
```

### `config`

Object containing plugin-specific configuration, keyed by plugin name.

```yaml
plugins:
  config:
    sia-search-plugin:
      outputPath: search-index.json
      includeContent: false
    sia-sitemap-plugin:
      outputFile: sitemap.xml
      includeDrafts: false
```

## Accessing Configuration in Plugins

Plugins can access their configuration from `config.plugins.config`:

```javascript
export default {
  name: 'my-plugin',
  version: '1.0.0',
  hooks: {
    afterBuild: async (siteData, config, api) => {
      const pluginConfig = config.plugins?.config?.['my-plugin'] || {};
      const outputPath = pluginConfig.outputPath || 'default.json';
      
      // Use configuration
      api.writeFile(outputPath, JSON.stringify(siteData));
    }
  }
};
```

## Configuration Schema

Plugins can define a `configSchema` to document their configuration options:

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

The `configSchema` is primarily for documentation purposes and doesn't enforce validation automatically.

## Examples

### Disable All Plugins

```yaml
plugins:
  enabled: false
```

### Enable Strict Mode

```yaml
plugins:
  strictMode: true
```

### Configure Multiple Plugins

```yaml
plugins:
  config:
    sia-search-plugin:
      outputPath: search-index.json
      includeContent: true
    sia-sitemap-plugin:
      outputFile: sitemap.xml
      changefreq: weekly
    my-custom-plugin:
      customOption: value
```

## Related

- [Plugin Structure](/plugins/structure/) - Learn about plugin discovery and loading
- [Creating Plugins](/plugins/creating-plugins/) - See how to create plugins with configuration

