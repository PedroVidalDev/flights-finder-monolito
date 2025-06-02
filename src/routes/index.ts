import { Router } from 'express';

import { flightRouter } from './flightRoutes';

const router = Router();

router.use('/flights', flightRouter);

export { router as indexRouter };