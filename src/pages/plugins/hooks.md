---
title: "Plugin Hooks"
description: "Complete reference for all plugin hooks"
order: 47
slug: plugins/hooks
---

# Plugin Hooks Reference

Hooks are functions that plugins can register to execute at specific points in the build process.

## Build Lifecycle Hooks

### `beforeBuild(config, api)`

Executes before the build starts, after configuration is loaded.

**Parameters:**
- `config`: Site configuration object
- `api`: Plugin API object (see [Plugin API](/plugins/api/))

**Use cases:** Initialize plugin state, validate configuration, set up external services

**Example:**
```javascript
hooks: {
  beforeBuild: (config, api) => {
    api.log('Initializing plugin...', 'info');
    // Initialize plugin state
  }
}
```

### `afterConfigLoad(config, api)`

Executes immediately after configuration is loaded, before any build steps.

**Parameters:**
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Modify configuration, validate plugin requirements

**Example:**
```javascript
hooks: {
  afterConfigLoad: (config, api) => {
    // Validate required configuration
    if (!config.site.url) {
      throw new Error('site.url is required');
    }
  }
}
```

### `afterContentLoad(siteData, config, api)`

Executes after all content collections are loaded and parsed.

**Parameters:**
- `siteData`: Complete site data object with collections, tags, etc.
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Analyze content, generate metadata, modify collections

**Example:**
```javascript
hooks: {
  afterContentLoad: (siteData, config, api) => {
    // Analyze content
    const totalPosts = siteData.collections.posts.length;
    api.log(`Loaded ${totalPosts} posts`, 'info');
  }
}
```

### `afterTagCollections(tags, context, api)`

Executes after tag collections are built.

**Parameters:**
- `tags`: Tag collections object
- `context`: Object with `config` and `collections`
- `api`: Plugin API object

**Use cases:** Modify tag data, generate tag statistics

**Example:**
```javascript
hooks: {
  afterTagCollections: (tags, context, api) => {
    // Generate tag statistics
    const tagCount = Object.keys(tags).length;
    api.log(`Found ${tagCount} unique tags`, 'info');
  }
}
```

### `beforeSiteData(siteData, config, api)`

Executes before final siteData is created, allowing modification.

**Parameters:**
- `siteData`: Site data object (can be modified)
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Add custom data to siteData, modify collections

**Example:**
```javascript
hooks: {
  beforeSiteData: (siteData, config, api) => {
    // Add custom data
    siteData.customStats = {
      totalItems: siteData.collections.posts.length + siteData.collections.pages.length
    };
  }
}
```

### `beforeRender(siteData, config, api)`

Executes before templates are rendered.

**Parameters:**
- `siteData`: Site data object
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Prepare data for rendering, modify siteData for templates

**Example:**
```javascript
hooks: {
  beforeRender: (siteData, config, api) => {
    // Prepare data for templates
    siteData.collections.posts.forEach(post => {
      post.readingTime = calculateReadingTime(post.content);
    });
  }
}
```

### `afterRender(siteData, config, api)`

Executes after all templates are rendered but before assets are copied.

**Parameters:**
- `siteData`: Site data object
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Post-process rendered HTML, generate additional files

**Example:**
```javascript
hooks: {
  afterRender: (siteData, config, api) => {
    // Post-process rendered files
    api.log('Templates rendered', 'info');
  }
}
```

### `afterBuild(siteData, config, api)`

Executes after the build completes, including asset copying.

**Parameters:**
- `siteData`: Site data object
- `config`: Site configuration object
- `api`: Plugin API object

**Use cases:** Generate search indexes, create sitemaps, upload files, send notifications

**Example:**
```javascript
hooks: {
  afterBuild: async (siteData, config, api) => {
    // Generate search index
    const searchData = siteData.collections.posts.map(post => ({
      title: post.title,
      url: post.url
    }));
    
    api.writeFile('search-index.json', JSON.stringify(searchData));
    api.log('Generated search index', 'info');
  }
}
```

## Content Processing Hooks

### `beforeContentParse(rawContent, filePath)`

Executes before a markdown file is parsed. Can modify the raw content.

**Parameters:**
- `rawContent`: Raw file content (string)
- `filePath`: Path to the file

**Returns:** Modified content string (or original if unchanged)

**Use cases:** Pre-process markdown, inject content, transform syntax

**Example:**
```javascript
hooks: {
  beforeContentParse: (rawContent, filePath) => {
    // Replace custom syntax
    return rawContent.replace(/\[TOC\]/g, '<!-- Table of Contents -->');
  }
}
```

### `afterContentParse(item, filePath)`

Executes after a content item is parsed. Can modify the item.

**Parameters:**
- `item`: Parsed content item object
- `filePath`: Path to the file

**Returns:** Modified item object (or original if unchanged)

**Use cases:** Add custom metadata, transform content, modify front matter

**Example:**
```javascript
hooks: {
  afterContentParse: (item, filePath) => {
    // Add custom metadata
    item.customField = 'value';
    return item;
  }
}
```

### `beforeMarkdown(markdown, context)`

Executes before markdown is converted to HTML. Can modify the markdown.

**Parameters:**
- `markdown`: Markdown content (string)
- `context`: Object with `filePath` and `frontMatter`

**Returns:** Modified markdown string (or original if unchanged)

**Use cases:** Transform markdown syntax, inject content

**Example:**
```javascript
hooks: {
  beforeMarkdown: (markdown, context) => {
    // Transform custom syntax
    return markdown.replace(/\[TOC\]/g, '<!-- Table of Contents -->');
  }
}
```

### `afterMarkdown(html, context)`

Executes after markdown is converted to HTML. Can modify the HTML.

**Parameters:**
- `html`: Generated HTML (string)
- `context`: Object with `filePath` and `frontMatter`

**Returns:** Modified HTML string (or original if unchanged)

**Use cases:** Post-process HTML, inject scripts, modify structure

**Example:**
```javascript
hooks: {
  afterMarkdown: (html, context) => {
    // Inject custom HTML
    return html.replace(
      '<!-- Table of Contents -->',
      '<nav class="toc">...</nav>'
    );
  }
}
```

## Template Hooks

### `addTemplateFilter(env, config)`

Allows plugins to register custom Nunjucks filters.

**Parameters:**
- `env`: Nunjucks environment object
- `config`: Site configuration object

**Use cases:** Add custom template filters for data transformation

**Example:**
```javascript
hooks: {
  addTemplateFilter: (env, config) => {
    env.addFilter('uppercase', (str) => str.toUpperCase());
    env.addFilter('formatNumber', (num) => {
      return new Intl.NumberFormat().format(num);
    });
  }
}
```

Use in templates:
```nunjucks
{{ post.title | uppercase }}
{{ post.wordCount | formatNumber }}
```

### `addTemplateFunction(env, config)`

Allows plugins to register custom Nunjucks functions.

**Parameters:**
- `env`: Nunjucks environment object
- `config`: Site configuration object

**Use cases:** Add custom template functions for complex operations

**Example:**
```javascript
hooks: {
  addTemplateFunction: (env, config) => {
    env.addGlobal('getApiData', async (url) => {
      const response = await fetch(url);
      return await response.json();
    });
  }
}
```

Use in templates:
```nunjucks
{% set data = getApiData('https://api.example.com/data') %}
```

## Marked Extension Hook

Plugins can add custom Marked extensions using the `addMarkedExtension` function from the plugin API or by using the `beforeBuild` hook to call it.

**Example:**
```javascript
import { addMarkedExtension } from '@terrymooreii/sia';

hooks: {
  beforeBuild: (config, api) => {
    addMarkedExtension({
      renderer: {
        // Custom blockquote renderer
        blockquote(quote) {
          return `<blockquote class="custom-quote">${quote}</blockquote>`;
        }
      }
    });
  }
}
```

## Hook Execution Order

Hooks execute in the following order during a build:

1. `beforeBuild`
2. `afterConfigLoad`
3. `beforeContentParse` (for each file)
4. `afterContentParse` (for each file)
5. `afterContentLoad`
6. `afterTagCollections`
7. `beforeSiteData`
8. `beforeMarkdown` (for each file)
9. `afterMarkdown` (for each file)
10. `beforeRender`
11. `afterRender`
12. `afterBuild`

Template hooks (`addTemplateFilter`, `addTemplateFunction`) execute during template initialization, before rendering.

## Related

- [Plugin API](/plugins/api/) - Learn about the API object available to hooks
- [Creating Plugins](/plugins/creating-plugins/) - See examples of using hooks in plugins

