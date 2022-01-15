# 11ty Base

Opiniated starter template for [11ty](https://11ty.dev).

## Features

### SEO

The template includes a basic SEO configuration. The title, the description and the meta tags (Facebook, Twitter, OpenGraph) are automatically generated from the frontmatter of each page.

### Styling

The template uses [Tailwind CSS](https://tailwindcss.com) for styling. It only includes a basic set of styles, for typography and link styling.

When `NODE_ENV` is set to `development`, the template uses the [unminiified version of the generated CSS](./src/assets/css/style.css). This is useful for debugging. When `NODE_ENV` is set to `production`, the template uses a [minified and optimized CSS](./src/assets/css/style.min.css).
