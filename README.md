# Persimmon website

<p align="right"><a href="./README.zh-CN.md">简体中文</a></p>

This repository contains the source for [persimmon.cc](https://persimmon.cc).
It maintains the public landing page and the support, privacy, and terms pages
required by the Persimmon app.

Application source, product documentation, issues, and release automation are
maintained in the Persimmon application repository rather than here.

## Routes

- `/` — landing page and download links
- `/support` — support contact and troubleshooting information
- `/privacy` — privacy policy
- `/terms` — terms of service

## Development

The site uses Node.js 22, pnpm 10, Next.js, and Vinext.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Run the full local gate before proposing a change:

```bash
pnpm check
```

## Configuration and deployment

Copy [`.env.example`](./.env.example) when local environment overrides are
needed. Production is deployed to Cloudflare Workers by the workflow in
`.github/workflows/deploy-cloudflare.yml` after a push to `main`.

Keep this repository focused on the website. App implementation, app feature
documentation, and binary publication belong in the application repository.

## License

Website source is available under the [MIT License](./LICENSE). The Persimmon
name, product identity, screenshots, demo media, and third-party store marks are
not granted for reuse by that license unless separately stated.
