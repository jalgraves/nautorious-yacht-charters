# Circleback

A React + TypeScript single-page application built with Vite, designed to be packaged and served from AWS CloudFront.

## Prerequisites

- [Node.js](https://nodejs.org/) v20 or later
- npm v10 or later

## Getting Started

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

The app will be available at `http://localhost:5173`.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start the Vite dev server with hot module replacement |
| `npm run build` | Type-check and build for production (outputs to `dist/`) |
| `npm run preview` | Serve the production build locally for testing |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run lint` | Run ESLint across the project |

## Building for Production

```sh
npm run build
```

This runs the TypeScript compiler followed by the Vite bundler. The output is written to the `dist/` directory and includes:

- `index.html` — the SPA entry point
- `assets/` — JS, CSS, and other static files with content-hashed filenames for long-lived caching

To verify the production build locally:

```sh
npm run preview
```

## Docker Build

A multi-stage Dockerfile is included for building static assets in CI:

```sh
docker build --target static --output dist .
```

This produces the same `dist/` directory contents without needing Node.js installed on the host.

## Deploying to CloudFront

1. Upload the contents of `dist/` to an S3 bucket configured as a CloudFront origin.
2. Set `Cache-Control: max-age=31536000, immutable` on all files in `assets/` (they have content hashes in their filenames).
3. Set `Cache-Control: no-cache` on `index.html` so CloudFront always fetches the latest version.
4. Add a custom error response in CloudFront for HTTP 403 and 404 that returns `/index.html` with status 200. This enables client-side routing — all paths are handled by React Router in the browser.

## Cach invalidation

```sh
aws cloudfront create-invalidation \
  --distribution-id ${DISTRIBUTION_ID}$ \
  --paths "/*"
```

## Project Structure

```
src/
  main.tsx             # React entry point with BrowserRouter
  App.tsx              # Route definitions
  index.css            # Global styles
  components/
    Layout.tsx         # Shared header/footer layout
  pages/
    HomePage.tsx       # Landing page
    NotFoundPage.tsx   # 404 catch-all page
```
