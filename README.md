# xnoto.dev

Public source for [xnoto.dev](https://xnoto.dev), a personal portfolio and field-notes site about platform infrastructure, developer workflows, and agentic operations.

## Status

The Astro site foundation is under review. No deployment workflow, S3 bucket, DNS record, or Cloudflare cache policy is owned by this repository yet.

## Development

```sh
npm install --ignore-scripts
npm run dev
npm run build
```

GitHub Actions builds the site on pull requests and pushes to `main`. It does not publish the site.

## Deployment contract

The future deployment uses a dedicated GitHub OIDC role with write access only to the site artifact bucket. AWS resource ownership and Cloudflare configuration remain outside this repository. The site repository will not store long-lived cloud credentials, OpenTofu state, or provider tokens.

## Public-content policy

Project pages distinguish maintained work, reference designs, and archived projects. Source-linked claims are intentionally scoped; no employer-confidential material or live operational state belongs here.
