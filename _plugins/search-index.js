export default {
  name: 'search-index',
  version: '1.0.0',
  configSchema: {
    outputFileName: { type: 'string', default: 'search-index.json' },
  },
  hooks: {
    afterBuild: async (siteData, config, api) => {
      try {
        // Debug: Log that plugin is running
        api.log('Search index plugin: Starting...', 'info');
        api.log(`Search index plugin: outputDir = ${config.outputDir}`, 'info');
        
        // Helper function to strip HTML tags and get plain text
        function stripHtml(html) {
          if (!html) return '';
          // Remove HTML tags
          return html
            .replace(/<[^>]*>/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        }

        // Helper function to extract excerpt
        function getExcerpt(item, maxLength = 150) {
          // Use front matter excerpt if available
          if (item.excerpt && item.excerpt.trim()) {
            return stripHtml(item.excerpt).substring(0, maxLength);
          }
          
          // Otherwise, extract from content
          if (item.content) {
            const text = stripHtml(item.content);
            if (text.length > maxLength) {
              return text.substring(0, maxLength) + '...';
            }
            return text;
          }
          
          return '';
        }

        // Build search index from all pages
        const searchIndex = [];

        // Process all pages from collections
        for (const [collectionName, items] of Object.entries(siteData.collections)) {
          api.log(`Search index plugin: Processing collection ${collectionName} with ${items.length} items`, 'info');
          for (const item of items) {
            // Skip if no title (likely an index/overview page that we might want to include)
            // But we'll include all pages for now
            const searchItem = {
              title: item.title || 'Untitled',
              url: item.url || '',
              content: stripHtml(item.content || ''),
              excerpt: getExcerpt(item)
            };

            // Only add if we have at least a title and URL
            if (searchItem.title && searchItem.url) {
              searchIndex.push(searchItem);
            }
          }
        }

        // Write search index to assets directory
        // Path is relative to output directory as per API docs
        const outputPath = api.joinPath('assets', config.outputFileName);
        api.log(`Search index plugin: Writing to ${outputPath}`, 'info');
        api.writeFile(outputPath, JSON.stringify(searchIndex, null, 2));
        
        api.log(`Search index plugin: Generated search index with ${searchIndex.length} items`, 'info');
      } catch (err) {
        api.log(`Search index plugin error: ${err.message}`, 'error');
        api.log(`Search index plugin error stack: ${err.stack}`, 'error');
        // Don't throw - let the build continue
        console.error('Search index plugin error:', err);
      }
    }
  }
};

