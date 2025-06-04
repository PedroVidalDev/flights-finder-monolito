import { ThemeProvider } from 'styled-components'

import { FlightsFindAll } from 'pages/Flights/FlightsFindAll'

import { SideBarContainer } from 'components/SideBar/styles'

import { themes } from './themes'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <SideBarContainer />
      <FlightsFindAll />
    </ThemeProvider>
  )
}

export default App
