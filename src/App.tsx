import { ThemeProvider } from 'styled-components'

import { themes } from './themes'

import { AppRoutes } from './Routes'

import { SideBarContainer } from 'components/SideBar/styles'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <SideBarContainer />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
