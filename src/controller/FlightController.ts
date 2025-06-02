import { Request, Response } from "express";
import { FlightService } from "../service/FlightService";

export class FlightController {
    private service: FlightService;

    constructor() {
        this.service = new FlightService();
    }

    public async getAllFlights(req: Request, res: Response): Promise<void> {
        try {
            const flights = await this.service.findAll();
            res.status(200).json(flights);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch flights' });
        }
    }

    public async getFlightById(req: Request, res: Response): Promise<void> {
        const flightId = parseInt(req.params.id, 10);
        if (isNaN(flightId)) {
            res.status(400).json({ error: 'Invalid flight ID' });
            return;
        }

        try {
            const flight = await this.service.findById(flightId);
            if (!flight) {
                res.status(404).json({ error: 'Flight not found' });
                return;
            }
            res.status(200).json(flight);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch flight' });
        }
    }
}