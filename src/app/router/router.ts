import { Application, Request, Response } from 'express';
import { authRoutes } from '../modules/auth/auth.route';
import { serviceRouter } from '../modules/service/service.route';
import { slotRouter } from '../modules/slot/slot.route';
import {
  bookingRouter,
  myBookingRouter,
} from '../modules/booking/booking.route';

const modulesRouters = [
  {
    path: '/api/auth',
    route: authRoutes,
  },
  {
    path: '/api/services',
    route: serviceRouter,
  },
  {
    path: '/api/slots',
    route: slotRouter,
  },
  {
    path: '/api/bookings',
    route: bookingRouter,
  },
  {
    path: '/api/my-bookings',
    route: myBookingRouter,
  },
];

export const routes = (app: Application) => {
  // root route
  app.get('/', (req: Request, res: Response) => {
    res.send('Hi, welcome to car wash booking system');
  });

  // all routes
  modulesRouters.forEach((router) => app.use(router.path, router.route));

  // not found route
  app.route('*').all((req: Request, res: Response) => {
    res.send({
      success: false,
      statusCode: 404,
      message: 'Not Found',
    });
  });
};
