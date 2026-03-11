# Choksiwala Jewellers - Static Website

This is a fully static website built with **HTML, CSS, and JavaScript only** (no backend, no database).

## Project Structure

```text
choksiwala-static-site/
├── assets/
│   └── cj-logo.jpg
├── css/
│   └── styles.css
├── js/
│   ├── app.js
│   ├── contact.js
│   ├── gallery-data.js
│   ├── gallery.js
│   └── image-view.js
├── contact.html
├── disclaimer.html
├── gallery.html
├── image.html
├── index.html
├── privacy.html
└── netlify.toml
```

## Netlify Form Setup (Already Implemented)

The contact form in `contact.html` includes:
- `name="contact"`
- `method="POST"`
- `data-netlify="true"`
- Hidden field: `<input type="hidden" name="form-name" value="contact" />`

It also shows an **inline success message** after submit.

## Deploy on Netlify

1. Push this folder to your GitHub repo.
2. In Netlify, click **Add new site → Import an existing project**.
3. Select your repository.
4. Configure:
   - Build command: *(leave empty)*
   - Publish directory: `choksiwala-static-site`
5. Deploy site.

## Deploy on GitHub Pages

1. Push this folder to GitHub.
2. In repo settings, go to **Pages**.
3. Set source branch (e.g., `main`) and folder to `/(root)` if this folder is root, or deploy with a static publishing workflow.

## Replacing Dummy Images

- Home featured images and gallery images are currently premium dummy image URLs.
- Replace URLs in `js/gallery-data.js` with real store photos when ready.