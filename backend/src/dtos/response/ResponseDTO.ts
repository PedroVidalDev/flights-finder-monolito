import { PaginationParamsDTO } from "../pagination/PaginationParamsDTO";

export class ResponseDTO<T> {
    status: number;
    message: string;
    page?: number;
    limit?: number;
    total?: number;
    data?: T;

    constructor(status: number, message: string, data?: T) {
        this.status = status;
        this.message = message;
        this.data = data;
    }

    static success<T>(data: T, message: string = 'Operation successful'): ResponseDTO<T> {
        return new ResponseDTO<T>(200, message, data);
    }

    static created<T>(data: T, message: string = 'Resource created successfully'): ResponseDTO<T> {
        return new ResponseDTO<T>(201, message, data);
    }

    static error(status: number, message: string): ResponseDTO<null> {
        return new ResponseDTO<null>(status, message);
    }
}