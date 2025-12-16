# Blog Content Guide

## Adding New Articles

### Quick Start

1. Create a new `.mdx` file in `content/articles/`
2. Name it using kebab-case: `my-new-article.mdx`
3. Add frontmatter and content
4. The article appears automatically!

### File Structure

```
content/
└── articles/
    ├── _template.mdx          # Copy this for new articles
    ├── my-first-article.mdx
    └── another-article.mdx
```

### Frontmatter Template

Every article needs this at the top:

```yaml
---
title: "Your Article Title"
description: "Brief description (shown in article cards)"
date: "2024-12-16"
tags: ["AI", "Python", "Tutorial"]
featured: true
---
```

| Field | Required | Description |
|-------|----------|-------------|
| `title` | Yes | Article title |
| `description` | Yes | 150-200 char summary |
| `date` | Yes | YYYY-MM-DD format |
| `tags` | No | Array of tags |
| `featured` | No | Show on homepage (default: false) |

### Writing Content

After the frontmatter, write using Markdown:

```markdown
## Section Heading

Regular paragraph text with **bold** and *italic*.

### Code Blocks

\`\`\`python
def example():
    return "Hello!"
\`\`\`

### Lists

- Bullet point
- Another point

1. Numbered
2. List
```

### Tips

1. **Slug = Filename**: `my-article.mdx` → `/articles/my-article`
2. **Date Order**: Articles sort by date (newest first)
3. **Featured**: Set `featured: true` for homepage display
4. **Images**: Place in `public/images/articles/` and reference as `/images/articles/image.png`

### Workflow

```bash
# 1. Copy template
cp content/articles/_template.mdx content/articles/my-new-post.mdx

# 2. Edit the file
code content/articles/my-new-post.mdx

# 3. Dev server auto-refreshes
npm run dev

# 4. View at http://localhost:3000/articles/my-new-post
```

### Deployment

Articles are statically generated at build time:

```bash
npm run build
```

The build will fail if frontmatter is invalid, giving you immediate feedback.
