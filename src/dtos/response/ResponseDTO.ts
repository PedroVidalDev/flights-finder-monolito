import { PaginationParamsDTO } from "../pagination/PaginationParamsDTO";

export class ResponseDTO<T> {
    status: number;
    message: string;
    page?: number;
    data?: T;

    constructor(status: number, message: string, data?: T, page?: number) {
        this.status = status;
        this.message = message;
        this.data = data;
        if(page) {
            this.page = page;
        }
    }

    static success<T>(data: T, message: string = 'Operation successful', paginationParamsDto?: PaginationParamsDTO): ResponseDTO<T> {
        const page = paginationParamsDto ? paginationParamsDto.page : undefined;

        return new ResponseDTO<T>(200, message, data, page);
    }

    static created<T>(data: T, message: string = 'Resource created successfully'): ResponseDTO<T> {
        return new ResponseDTO<T>(201, message, data);
    }

    static error(status: number, message: string): ResponseDTO<null> {
        return new ResponseDTO<null>(status, message);
    }
}