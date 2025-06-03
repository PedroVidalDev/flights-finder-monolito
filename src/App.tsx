import { ThemeProvider } from 'styled-components'

import { themes } from './themes'

import { FlightsFindAll } from './pages/Flights/FlightsFindAll'

import { SideBarContainer } from './components/SideBar/styles'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <SideBarContainer />
      <FlightsFindAll />
    </ThemeProvider>
  )
}

export default App
