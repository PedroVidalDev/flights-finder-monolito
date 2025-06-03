import { PrismaClient } from '@prisma/client';

import { Flight } from '../entities/Flight';
import { PrismaClientSingleton } from "../config/db/PrismaClientSingleton";

export class FlightRepository {
    private model: PrismaClient;

    constructor() {
        this.model = PrismaClientSingleton.getInstance();
    }

    public async findAll(): Promise<Flight[]> {
        const flightData = await this.model.flight.findMany();

        return flightData.map(flight =>
            new Flight(
                flight.id,
                flight.flightNumber,
                flight.airline,
                flight.origin,
                flight.destination,
                flight.departure,
                flight.arrival,
                flight.price
            )
        );
    }

    public async findById(id: number): Promise<Flight | null> {
        const flightData = await this.model.flight.findUnique({
            where: { id },
        });


        if (!flightData) {
            return null;
        }

        return new Flight(
            flightData.id,
            flightData.flightNumber,
            flightData.airline,
            flightData.origin,
            flightData.destination,
            flightData.departure,
            flightData.arrival,
            flightData.price
        );
    }
}