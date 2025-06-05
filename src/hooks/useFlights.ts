import { useCallback, useState } from 'react'

import { FlightDTO } from 'dtos/FlightDTO'
import { PaginationDTO } from 'dtos/ResponseDTO'

import { api } from 'services/axios'

export const useFlights = () => {
  const [flights, setFlights] = useState<FlightDTO[]>([])
  const [page, setPage] = useState<number>(1)
  const [maxPage, setMaxPage] = useState<number>(1)

  const fetchGetAllFlights = useCallback(
    async (
      newPage?: number | null,
      filters?: { field: string; value: string }[],
    ) => {
      const response = await api.get<PaginationDTO<FlightDTO[]>>('/flights', {
        params: {
          page: newPage ?? page,
          limit: 10,
          filters: JSON.stringify(filters) ?? undefined,
        },
      })
      setFlights(response.data.data?.data ?? [])
      setPage(response.data.data?.page ?? 1)

      const total = response.data.data?.total
      const limit = response.data.data?.limit
      if (typeof total === 'number' && typeof limit === 'number' && limit > 0) {
        setMaxPage(Math.ceil(total / limit))
      } else {
        setMaxPage(1)
      }
    },
    [],
  )

  return { fetchGetAllFlights, flights, maxPage }
}
