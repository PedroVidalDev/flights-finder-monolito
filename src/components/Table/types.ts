export type TableProps = {
  fetchData: (page: number) => void
  columns: string[]
  data: unknown[][]
}
