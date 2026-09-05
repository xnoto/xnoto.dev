# xnoto.dev contributor guidance

## Purpose

This repository is the public source for `xnoto.dev`: a personal portfolio and technical field-notes site about platform infrastructure, developer workflows, and agentic operations.

## Content rules

- Keep public claims factual, source-backed, and appropriately scoped. Label reference designs, experiments, and archived projects clearly.
- Never add employer-confidential material, credentials, tokens, state, private endpoints, raw operational logs, or personal contact details beyond what the owner explicitly approves for publication.
- Do not claim production scale, fleet health, customer adoption, uptime, or outcomes without public, owner-approved evidence.
- Describe agentic workflows in terms of tool boundaries, validation, evidence, and human approval—not autonomous production control.

## Delivery boundary

This repository owns site source and build validation only. AWS S3 resources and deployment-role permissions belong to the canonical infrastructure owner; Cloudflare DNS, TLS, and cache behavior belong to its canonical infrastructure owner. Do not add deployment credentials or infrastructure state here.

A deployment workflow is intentionally absent until the infrastructure change is reviewed, applied, and explicitly approved.

## Workflow

- Use branches and pull requests for changes.
- GitHub Actions is the validation authority; do not claim local checks ran unless they actually did.
- Inspect all public content and diffs for sensitive material before requesting review.
