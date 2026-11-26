'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'app/index.html'), 'utf8');
const vercel = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));

test('Three.js import map uses pinned CDN URLs compatible with static and file URL hosting', () => {
  assert.match(html, /"three":\s*"https:\/\/cdn\.jsdelivr\.net\/npm\/three@0\.187\.0\/build\/three\.module\.js"/);
  assert.match(html, /"three\/addons\/":\s*"https:\/\/cdn\.jsdelivr\.net\/npm\/three@0\.187\.0\/examples\/jsm\//);
  assert.doesNotMatch(html, /"three":\s*"\/vendor\/three\//);
});

test('Vercel static output points to the app directory', () => {
  assert.equal(vercel.outputDirectory, 'app');
});

test('3D ES module is included in build and lint syntax checks', () => {
  assert.match(packageJson.scripts.build, /app\/hydraulics-3d\.js/);
  assert.match(packageJson.scripts.lint, /app\/hydraulics-3d\.js/);
  assert.match(html, /type="module" src="\.\/hydraulics-3d\.js"/);
});

test('deployment configuration test is part of the default test suite', () => {
  assert.match(packageJson.scripts.test, /test:deployment/);
});
