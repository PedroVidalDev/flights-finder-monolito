export type FlightsFindAllFiltersProps = {
  fetchData: (
    page: number | null,
    filters: { field: string; value: string }[],
  ) => void
}
