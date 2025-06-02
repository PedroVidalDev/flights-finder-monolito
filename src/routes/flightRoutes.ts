import { Router, Request, Response } from 'express';
import { FlightController } from '../controller/FlightController';

const flightController = new FlightController();

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    await flightController.getAllFlights(req, res);
});

router.get('/:id', async (req: Request, res: Response) => {
    await flightController.getFlightById(req, res);
});

export const flightRouter = router;