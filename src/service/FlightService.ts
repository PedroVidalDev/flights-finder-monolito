import { FlightRepository } from "../repositories/FlightRepository";

export class FlightService {
    private repository: FlightRepository;

    constructor() {
        this.repository = new FlightRepository();
    }

    public async findAll() {
        return this.repository.findAll();
    }

    public async findById(id: number) {
        return this.repository.findById(id);
    }
}