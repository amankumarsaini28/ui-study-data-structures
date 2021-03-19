import Express from 'express';
import { urlencoded } from 'body-parser';
import morgan from 'morgan';

import { isWorking } from './controllers/isWorking';
import { viewController } from './controllers/viewController';

Express()
  .use(morgan('dev'))
  .use(urlencoded({ extended: true }))
  .use('/isWorking', isWorking)
  .use(viewController)
  .listen(8080, () => {
    console.log('app started');
  });