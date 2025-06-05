import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { FlightsFindAll } from 'pages/Flights/FlightsFindAll'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to={'/flights'} />} />
        <Route path='/flights' element={<FlightsFindAll />} />
        <Route path='/flights/favorites' element={<div>About Page</div>} />
      </Routes>
    </BrowserRouter>
  )
}
