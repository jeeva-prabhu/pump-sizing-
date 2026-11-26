'use strict';

const express = require('express');
const path = require('path');

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const APP_DIR = path.join(__dirname, 'app');
const THREE_DIR = path.join(__dirname, 'node_modules', 'three');

app.use('/vendor/three', express.static(THREE_DIR));
app.use(express.static(APP_DIR));

app.use((req, res, next) => {
  if (req.method === 'GET' && !path.extname(req.path)) {
    return res.sendFile(path.join(APP_DIR, 'index.html'));
  }
  return next();
});

app.listen(PORT, HOST, () => {
  console.log(`Pump Hydraulics Engineering Suite listening on http://${HOST}:${PORT}`);
});
