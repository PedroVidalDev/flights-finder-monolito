import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    console.log('Fetching all flights');
});

router.get('/:id', (req: Request, res: Response) => {
    const flightId = req.params.id;
    console.log(`Fetching flight with ID: ${flightId}`);
});

export const flightRouter = router;