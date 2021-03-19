import { Router } from 'express';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { renderToString } from 'react-dom/server';
import { App } from '../../client/app';


const replaceHolder = '##ROOT##';

const getTemplate = path => {
  return readFileSync(path, { encoding: 'utf-8' }).toString();
};

const getPath = () => {
  return resolve('src/client/templates/index.html');
};

const template = [getPath, getTemplate].reduce((acc, curr) => curr(acc), {});

const replaceTemplate = (markup) => {
  return template.replace(replaceHolder, markup)
};

const handler = (req, res, next) => {
  const html = [renderToString, replaceTemplate].reduce((acc, curr) => curr(acc), <App />);

  res
    .status(200)
    .send(html);
}

export const viewController =
  Router()
    .use(handler);
