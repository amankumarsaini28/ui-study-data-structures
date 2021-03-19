const { Router, static } = require('express');
const { join } = require('path');

const staticAssetPath = join(__dirname, '..', '..', '__tmp');

const handler = static(staticAssetPath);

module.exports = Router().use(handler);