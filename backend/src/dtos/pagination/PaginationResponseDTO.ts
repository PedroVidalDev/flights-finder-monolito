import { PaginationParamsDTO } from "./PaginationParamsDTO";

export class PaginationResponseDTO<T> {
    page: number;
    limit: number;
    total: number;
    data?: T[];

    constructor(page: number, limit: number, total: number, data?: T[]) {
        this.data = data;
        this.page = page;
        this.limit = limit;
        this.total = total;
    }
}