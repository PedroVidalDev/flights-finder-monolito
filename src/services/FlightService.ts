import { FlightDTO } from "../dtos/flight/FlightDTO";
import { PaginationParamsDTO } from "src/dtos/pagination/PaginationParamsDTO";
import { PaginationResponseDTO } from "../dtos/pagination/PaginationResponseDTO";

import { FlightRepository } from "../repositories/FlightRepository";

export class FlightService {
    private repository: FlightRepository;

    constructor() {
        this.repository = new FlightRepository();
    }

    public async findAll(paginationParamsDto: PaginationParamsDTO): Promise<PaginationResponseDTO<FlightDTO>> {
        const [entities, total] = await this.repository.findAll(paginationParamsDto);

        return new PaginationResponseDTO(
            paginationParamsDto.page,
            paginationParamsDto.limit,
            total,
            entities.map(entity => entity.toDto())
        );
    }

    public async findById(id: number): Promise<FlightDTO | null> {
        const entity = await this.repository.findById(id);

        if (!entity) {
            return null;
        }

        return entity.toDto();
    }
}