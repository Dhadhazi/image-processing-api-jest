import { Application, Router } from 'express';
import { ImagesController } from './controllers/ImagesController';
import { IndexController } from './controllers/IndexController';

const _routes: [string, Router][] = [
  ['/', IndexController],
  ['/images', ImagesController],
];

export const routes = (app: Application): void => {
  _routes.forEach((route) => {
    const [url, controller] = route;
    app.use(url, controller);
  });
};
