import { Request, Response } from "express";

import { ResponseDTO } from "../dtos/response/ResponseDTO";

import { FlightService } from "../services/FlightService";
import { PaginationParamsDTO } from "../dtos/pagination/PaginationParamsDTO";

export class FlightController {
    private service: FlightService;

    constructor() {
        this.service = new FlightService();
    }

    public async getAllFlights(req: Request, res: Response): Promise<void> {
        try {
            const paginationParamsDto = new PaginationParamsDTO(
                parseInt(req.query.page as string, 10) || 1,
                parseInt(req.query.limit as string, 10) || 10
            );

            const flights = await this.service.findAll(paginationParamsDto);

            res.status(200).json(ResponseDTO.success(flights, 'Flights fetched successfully'));
        } catch (error) {
            res.status(500).json(ResponseDTO.error(500, 'Failed to fetch flights'));
        }
    }

    public async getFlightById(req: Request, res: Response): Promise<void> {
        const flightId = parseInt(req.params.id, 10);
        if (isNaN(flightId)) {
            res.status(400).json(ResponseDTO.error(400, 'Invalid flight ID'));
            return;
        }

        try {
            const flight = await this.service.findById(flightId);
            if (!flight) {
                res.status(404).json(ResponseDTO.error(404, 'Flight not found'));
                return;
            }
            res.status(200).json(ResponseDTO.success(flight, 'Flight fetched successfully'));
        } catch (error) {
            res.status(500).json(ResponseDTO.error(500, 'Failed to fetch flight'));
        }
    }
}