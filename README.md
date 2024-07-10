# Astro Multi Framework E2E Setup

This repository has been created as a showcase for testing a user-facing JS library in multiple frameworks or environments using Astro.

## Features

- Uses a Turborepo monorepo configuration
- With the _core_ workspace as the entrypoint, it can combine features neatly separated in `packages`
- Runs a single end-to-end test against multiple environments, all you need to do is add a page in `apps/client/src/pages` and pass the handle of this file along to your e2e script. (i.e. `../pages/angular.astro` can be run as `CONTEXT=angular playwright test`)
- Leverages `esbuild` for extremely fast build times and detailed code-splitting.
