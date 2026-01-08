---
title: "Examples"
description: "Example sites and code samples built with Sia"
order: 50
slug: examples
---

# Examples

See Sia in action with these examples and showcases.

## Example Sites

Coming soon! Check back for example sites built with Sia.

## Code Examples

### Basic Site Setup

```bash
# Initialize a new site
sia init my-blog
cd my-blog

# Create your first post
sia new post "Welcome to My Blog"

# Start development server
sia dev
```

### Custom Configuration

```yaml
# _config.yml
site:
  title: "My Blog"
  description: "A blog about web development"
  url: "https://myblog.com"

theme:
  name: developer

collections:
  posts:
    path: posts
    layout: post
    permalink: /blog/:slug/
```

### Custom Layout

```nunjucks
{# _layouts/post.njk #}
{% extends "base.njk" %}

{% block content %}
<article>
  <h1>{{ page.title }}</h1>
  <time>{{ page.date | date('long') }}</time>
  {{ content | safe }}
</article>
{% endblock %}
```

## Showcase

Have you built something with Sia? [Submit it](https://github.com/terrymooreii/sia/issues) to be featured here!

