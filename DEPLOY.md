# Deploying The Code Insight

This site is meant to stay simple: write Markdown, push to GitHub, let GitHub Pages publish the site.

## What to push

Push the source files, not the generated site.

Commit these:

- `src/`
- `public/`
- `.github/workflows/deploy.yml`
- `astro.config.mjs`
- `package.json`
- `package-lock.json`
- `tsconfig.json`
- `README.md`
- `DEPLOY.md`

Do not commit these:

- `node_modules/`
- `dist/`
- `.astro/`

They are already ignored in `.gitignore`.

## Before the first deploy

Edit `astro.config.mjs` and replace:

```js
site: 'https://example.com',
```

If you use the normal GitHub Pages URL, use this shape:

```js
site: 'https://YOUR-USERNAME.github.io/YOUR-REPO-NAME',
```

If you use a custom domain, use your real domain:

```js
site: 'https://yourdomain.com',
```

Also update `public/robots.txt` if it still contains `example.com`.

## First GitHub push

Create a GitHub repo, then push this project:

```sh
git init
git add .
git commit -m "Initial blog setup"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Enable GitHub Pages

In your GitHub repo:

1. Open `Settings`.
2. Go to `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Save if GitHub asks you to.

After that, every push to `main` runs the deploy workflow and publishes the site.

You can watch it in the repo under `Actions`.

## Writing a new article

Create a new Markdown file in:

```text
src/content/articles/
```

Example:

```text
src/content/articles/my-first-real-post.md
```

Use this shape:

```md
---
title: "My First Real Post"
description: "A short summary of what this article explains."
published: 2026-07-10
tags: ["notes", "software"]
---

Write the article here.
```

Then publish it:

```sh
git add src/content/articles/my-first-real-post.md
git commit -m "Add article about my first real post"
git push
```

GitHub Pages will rebuild the site automatically.

## Updating an article

Edit the same Markdown file, then push:

```sh
git add src/content/articles/my-first-real-post.md
git commit -m "Update article"
git push
```

To hide a draft article, add this to its frontmatter:

```md
draft: true
```

## Adding a project

Create a Markdown file in:

```text
src/content/projects/
```

Example:

```text
src/content/projects/my-tool.md
```

Use this shape:

```md
---
title: "My Tool"
description: "What it does and why I built it."
link: "https://example.com"
repository: ""
featured: true
order: 10
---

This is the story of the project: what it solves, what I learned, and what I would improve.
```

Projects do not have to be open source. Leave `repository` empty or remove it if there is no public repo.

Then publish it:

```sh
git add src/content/projects/my-tool.md
git commit -m "Add project note for My Tool"
git push
```

## Adding images

Put images in:

```text
public/images/
```

Reference them like this:

```md
![Screenshot of the project](/images/my-project.webp)
```

For a project card image, use frontmatter:

```md
image: "/images/my-project.webp"
```

## The usual routine

Most updates are just this:

```sh
npm run dev
```

Write or edit Markdown.

```sh
git add .
git commit -m "Update blog"
git push
```

That is the whole loop.
