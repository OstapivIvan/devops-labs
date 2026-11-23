import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

// Minimal "build": copy src/ into dist/ and stamp build info.
// The CI test job runs the tests against dist/, so the artifact matters.
const { version } = JSON.parse(readFileSync('package.json', 'utf8'));

rmSync('dist', { recursive: true, force: true });
mkdirSync('dist', { recursive: true });
cpSync('src', 'dist', { recursive: true });

writeFileSync(
  'dist/build-info.json',
  JSON.stringify(
    {
      version,
      commit: process.env.GITHUB_SHA ?? 'local',
      builtAt: new Date().toISOString(),
    },
    null,
    2
  ) + '\n'
);

console.log('Build complete -> dist/');
