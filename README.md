# devops-labs

[![CI](https://github.com/OstapivIvan/devops-labs/actions/workflows/ci.yaml/badge.svg)](https://github.com/OstapivIvan/devops-labs/actions/workflows/ci.yaml)

A tiny Node.js project (a couple of string helpers) used to practice GitHub Actions CI. The code is deliberately trivial; the pipeline is the point.

## Run locally

```bash
npm run ci      # build into dist/, then run the tests against dist/
```

## CI

Workflow: [`.github/workflows/ci.yaml`](.github/workflows/ci.yaml). It runs on `pull_request` to `main` and on `push` to `main`.

| Job | Needs | What it does |
|---|---|---|
| `build` | none | Builds `dist/` and uploads it as the `dist` artifact |
| `test` | `build` | Downloads the `dist` artifact and runs the tests against it |

A pull request shows the `build` and `test` checks, which must be green before merging.

### Download the build artifact

Open a run in the **Actions** tab, scroll to **Artifacts** on the run summary page and download `dist` (kept for 7 days).
