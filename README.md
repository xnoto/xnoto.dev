# xnoto.dev

Public source for [xnoto.dev](https://xnoto.dev), a personal portfolio and field-notes site about platform infrastructure, developer workflows, and agentic operations.

## Status

The Astro site foundation is merged. Canonical AWS and Cloudflare owners provision the S3 website bucket, DNS, and TLS outside this repository. The deployment workflow requires an explicit manual dispatch on `main`; it is the only path that can publish the built static artifact.

## Development

```sh
npm install --ignore-scripts
npm run dev
npm run build
```

GitHub Actions builds the site on pull requests and pushes to `main`. The deployment workflow can publish only after an explicit `workflow_dispatch` from `main`.

## Deployment contract

Deployment uses a dedicated GitHub OIDC role with write access only to the site artifact bucket. AWS resource ownership and Cloudflare configuration remain outside this repository. The site repository stores no long-lived cloud credentials, OpenTofu state, or provider tokens.

## Public-content policy

Project pages distinguish maintained work, reference designs, and archived projects. Source-linked claims are intentionally scoped; no employer-confidential material or live operational state belongs here.
