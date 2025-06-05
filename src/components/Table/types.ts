export type TableProps = {
  fetchData: (page: number) => void
  maxPage: number
  columns: string[]
  data: unknown[][]
}
