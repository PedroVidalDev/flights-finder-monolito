export class PaginationParamsDTO {
    page: number;
    limit: number;
    filters: Record<string, any>[] = [];
    
    constructor(page: number = 1, limit: number = 10, filters: Record<string, any>[] = []) {
        this.page = page;
        this.limit = limit;
        this.filters = filters;
    }
}