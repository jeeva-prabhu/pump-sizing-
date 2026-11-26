'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const html = fs.readFileSync(path.join(__dirname, '..', 'app/index.html'), 'utf8');

test('professional workspace shell and navigation targets are present', () => {
  assert.match(html, /<div class="app-shell">[\s\S]*?<aside class="sidebar"/);
  assert.match(html, /href="#setup-panel"/);
  assert.match(html, /href="#segments"/);
  assert.match(html, /href="#results-panel"/);
  assert.match(html, /href="#viewportShell"/);
  for (const id of ['setup-panel', 'segments', 'results-panel', 'viewportShell']) {
    assert.match(html, new RegExp('id="' + id + '"'));
  }
});

test('both engineering panels use complete labelled panel headers', () => {
  assert.match(html, /<section class="panel" id="setup-panel">\s*<div class="panel-heading">[\s\S]*?<h3>System design basis<\/h3>[\s\S]*?01 \/ INPUTS<\/span><\/div>/);
  assert.match(html, /<section class="panel" id="results-panel">\s*<div class="panel-heading">[\s\S]*?<h3>System calculation results<\/h3>[\s\S]*?02 \/ OUTPUTS<\/span><\/div>/);
});

test('professional light workspace palette and responsive navigation are defined', () => {
  assert.match(html, /--bg:#f2f5f8/);
  assert.match(html, /--accent:#087f83/);
  assert.match(html, /\.sidebar\s*\{/);
  assert.match(html, /@media\(max-width:700px\)/);
});

test('existing engineering calculator and 3D controls remain wired', () => {
  for (const token of [
    'PumpHydraulicsV51.calculateMultiSegment',
    'PumpHydraulicsStorage.saveConfiguration',
    'PumpHydraulics3D.create',
    'id="fullscreenBtn"',
    'id="explodeSlider"',
    'id="flowToggleBtn"',
  ]) assert.ok(html.includes(token), 'missing preserved application feature: ' + token);
});
