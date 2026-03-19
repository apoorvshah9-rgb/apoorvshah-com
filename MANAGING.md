# Managing Your Website

This guide explains how to update your site without touching any code. Everything is done by creating or editing plain text files on GitHub.

---

## How to add a new blog post

1. Go to your GitHub repository in your browser (e.g. `github.com/yourname/apoorvshah-com`)
2. Navigate to `src/content/blog/`
3. Click **Add file → Create new file**
4. Name the file using lowercase words with hyphens, ending in `.md`
   - Good: `why-india-needs-better-urban-planning.md`
   - Good: `on-managing-people-well.md`
5. Copy and paste this template into the file:

```
---
title: "Your Post Title Here"
date: 2026-03-19
description: "A one or two sentence summary of this post."
draft: false
---

Your essay goes here. Write naturally.

## Optional Section Heading

You can use **bold** and *italics*.

> This is a block quote — good for pull quotes.
```

6. Fill in your title, date (format: YYYY-MM-DD), description, and write your essay below the second `---`
7. Scroll to the bottom and click **Commit changes**
8. Your post will appear on the site within 2–3 minutes

**To save a draft without publishing:** Change `draft: false` to `draft: true`. It won't appear on the site until you change it back.

---

## How to add a link

1. Go to `src/content/links/` in your GitHub repository
2. Click **Add file → Create new file**
3. Name the file something descriptive, ending in `.md`
   - Example: `tsmc-acquired-podcast.md`
4. Paste this template:

```
---
title: "Title of the Link"
url: "https://example.com/the-link"
category: "Articles"
description: "One sentence on why this is worth reading/watching/listening to."
date: 2026-03-19
---
```

5. Fill in the details. For `category`, choose exactly one of:
   - `Articles`
   - `Podcasts`
   - `Research`
   - `Videos`
6. Click **Commit changes**
7. The link appears on your Links page within 2–3 minutes

---

## How to edit an existing post or link

1. Navigate to the file in GitHub
2. Click the **pencil icon** (Edit this file) in the top right
3. Make your changes
4. Click **Commit changes**

---

## How to delete a post or link

1. Navigate to the file in GitHub
2. Click the **three dots menu** (⋯) in the top right
3. Click **Delete file**
4. Click **Commit changes**

---

## Updating your bio or personal details

Your bio text is in `src/pages/index.astro`. To edit it:

1. Open that file in GitHub
2. Click the pencil icon to edit
3. Find the line that says `Father. Teacher. Lawyer.` or the interests paragraph
4. Update the text
5. Commit changes

**Important:** Only edit the text inside quotation marks or between `>` and `<` tags. Do not move or delete anything else in that file.

---

## Formatting reference (Markdown)

| What you want | What to type |
|---|---|
| **Bold** | `**bold text**` |
| *Italic* | `*italic text*` |
| A heading | `## Heading` |
| A link | `[Link text](https://url.com)` |
| A block quote | `> Quote text here` |
| A horizontal line | `---` |

---

## If something looks broken

The most common issues:
- **Date format wrong** — must be `YYYY-MM-DD` (e.g. `2026-03-19`, not `19 March 2026`)
- **Category wrong** — must be exactly `Articles`, `Podcasts`, `Research`, or `Videos` — capitals matter
- **Missing quotes** — all values except `date` and `draft` must be in double quotes `"like this"`
- **URL missing `https://`** — links must start with `https://`

If in doubt, look at an existing file in the same folder and copy its format exactly.

---

## File naming conventions

- Use lowercase only
- Replace spaces with hyphens: `my-new-post.md`
- No special characters: no `&`, `?`, `%`, etc.
- Always end with `.md`
