import { PrismaClient } from '@prisma/client';

import { Flight } from '../entities/Flight';
import { PrismaClientSingleton } from "../config/db/PrismaClientSingleton";
import { PaginationParamsDTO } from 'src/dtos/pagination/PaginationParamsDTO';

export class FlightRepository {
    private model: PrismaClient;

    constructor() {
        this.model = PrismaClientSingleton.getInstance();
    }

    public async findAll(paginationParamsDto: PaginationParamsDTO): Promise<[Flight[], number]> {
        const { page, limit, filters } = paginationParamsDto;
        const skip = (page - 1) * limit;

        const whereClause: Record<string, any> = {};

        if (filters && filters.length > 0) {
            filters.forEach(filter => {
                if (filter.field === 'departure' && typeof filter.value === 'string') {
                const dateString = filter.value;

                const startDate = new Date(dateString);
                startDate.setUTCHours(0, 0, 0, 0);

                const endDate = new Date(startDate);
                endDate.setUTCDate(startDate.getUTCDate() + 1);

                whereClause[filter.field] = {
                    gte: startDate,
                    lt: endDate,
                };
            } else {
                whereClause[filter.field] = filter.value;
            }
            });
        }

        const flightData = await this.model.flight.findMany({
            skip: skip,
            take: limit,
            where: whereClause,
        });

        const total = await this.model.flight.count();

        return [flightData.map(flight =>
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
        ), total];
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