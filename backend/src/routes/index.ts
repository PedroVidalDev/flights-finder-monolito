import { Request, Response, Router } from 'express';

import { flightRouter } from './flightRoutes';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});


router.use('/flights', flightRouter);

export { router as indexRouter };