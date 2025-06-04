import { useCallback, useState } from 'react'

import { FlightDTO } from 'dtos/FlightDTO'
import { ResponseDTO } from 'dtos/ResponseDTO'

import { api } from 'services/axios'

export const useFlights = () => {
  const [flights, setFlights] = useState<FlightDTO[]>([])

  const fetchGetAllFlights = useCallback(async () => {
    const response = await api.get<ResponseDTO<FlightDTO[]>>('/flights')
    setFlights(response.data.data ?? [])
  }, [])

  return { fetchGetAllFlights, flights }
}
