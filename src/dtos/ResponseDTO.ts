export type ResponseDTO<T> = {
  status: number
  message: string
  data?: T
}

export type PaginationDTO<T> = {
  status: number
  message: string
  data?: {
    data: T
    total: number
    page: number
    limit: number
  }
}
