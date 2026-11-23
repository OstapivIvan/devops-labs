import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { capitalize, slugify } from '../dist/strings.js';

// These tests run against the BUILT output (dist/), not src/.
// In CI the test job gets dist/ from the build job's artifact.

test('build output contains build-info.json', () => {
  assert.ok(existsSync(new URL('../dist/build-info.json', import.meta.url)));
});

test('capitalize upper-cases the first letter', () => {
  assert.equal(capitalize('hello'), 'Hello');
});

test('capitalize returns empty string for empty input', () => {
  assert.equal(capitalize(''), '');
});

test('slugify makes URL-friendly text', () => {
  assert.equal(slugify('  Hello, World! '), 'hello-world');
});
