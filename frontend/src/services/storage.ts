export const getStorageFavoriteFlights = () => {
  const currentStorage = localStorage.getItem('favoriteFlights')
  if (currentStorage) {
    return JSON.parse(currentStorage)
  }
  return []
}

export const setStorageFavoriteFlights = (flights: number[]) => {
  localStorage.setItem('favoriteFlights', JSON.stringify(flights))
}

export const appendStorageFavoriteFlights = (flight: number) => {
  const currentStorage = getStorageFavoriteFlights()
  if (currentStorage.includes(flight)) {
    currentStorage.splice(currentStorage.indexOf(flight), 1)
  } else {
    currentStorage.push(flight)
  }
  setStorageFavoriteFlights(currentStorage)
}
