const { Router } = require('express');
const { readFileSync } = require('fs');
const { resolve } = require('path');
const { compile } = require('handlebars');

const build = require('../../scripts/build');
build();

const indexTemplate = readFileSync(resolve('server/view/index.hbs'), { encoding: 'utf-8' }).toString();
const render = compile(indexTemplate);

const handleViewRequest = async (req, res, next) => {
  try {
    const { url } = req;
    res.status(200).send(render({ title: `page at ${url}`, scripts:[{src: '/assets/app.js'}]}));
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
  
}

module.exports = Router()
  .use(handleViewRequest);