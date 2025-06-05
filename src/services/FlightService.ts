import { FlightDTO } from "../dtos/flight/FlightDTO";
import { PaginationParamsDTO } from "src/dtos/pagination/PaginationParamsDTO";

import { FlightRepository } from "../repositories/FlightRepository";

export class FlightService {
    private repository: FlightRepository;

    constructor() {
        this.repository = new FlightRepository();
    }

    public async findAll(paginationParamsDto: PaginationParamsDTO): Promise<FlightDTO[]> {
        const entities = await this.repository.findAll(paginationParamsDto);

        return entities.map(entity => (
            entity.toDto()
        ));
    }

    public async findById(id: number): Promise<FlightDTO | null> {
        const entity = await this.repository.findById(id);

        if (!entity) {
            return null;
        }

        return entity.toDto();
    }
}