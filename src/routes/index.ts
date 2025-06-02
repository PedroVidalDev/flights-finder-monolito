import { Router } from 'express';

import { flightRouter } from './flightRoutes';

export const router = Router();

router.use('/flights', flightRouter);