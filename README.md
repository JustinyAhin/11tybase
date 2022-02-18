# 11ty Base

Opiniated starter template for [11ty](https://11ty.dev).

## Features

### SEO

The template includes a basic SEO configuration. The title, the description and the meta tags (Facebook, Twitter, OpenGraph) are automatically generated from the frontmatter of each page.

### Styling

The template uses [Tailwind CSS](https://tailwindcss.com) for styling. It only includes a basic set of styles, for typography and link styling.

When `NODE_ENV` is set to `development`, the template uses the [unminiified version of the generated CSS](./src/assets/css/style.css). This is useful for debugging. When `NODE_ENV` is set to `production`, the template uses a [minified and optimized CSS](./src/assets/css/style.min.css).

## Usage

### Serve

The `serve:*` commands are used to start the development server. `serve:tailwind` pass the [base CSS file](./assets/css/base.css) through the [Tailwind configuration file](./tailwind.config.js) and generates the unminified development CSS file. `serve:11ty` starts the BrowserSync for 11ty serve and watches for changes in the `src` directory.

Run `npm run serve` to start the development.

### Build

`build:tailwind` works almost similar to `serve:tailwind`. The only difference is that it generates the minified CSS file used in production. `build:11ty` builds the site and generates the static HTML files in the `dist` directory.

Run `npm run build` to start the production build.
