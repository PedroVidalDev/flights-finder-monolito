import { PrismaClientSingleton } from "../config/db/PrismaClientSingleton";
import { PrismaClient } from "../config/db/generated/prisma";

export class FlightRepository {
    private model: PrismaClient;

    constructor() {
        this.model = PrismaClientSingleton.getInstance();
    }

    public async findAll() {
        return this.model.flight.findMany();
    }

    public async findById(id: number) {
        return this.model.flight.findUnique({
            where: { id },
        });
    }
}