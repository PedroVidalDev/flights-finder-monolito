import { ThemeProvider } from 'styled-components'

import { themes } from './themes'

import { AppRoutes } from './Routes'

import { SideBarContainer } from 'components/SideBar/styles'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {
  return (
    <ThemeProvider theme={themes}>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        pauseOnHover={false}
        theme='light'
        transition={Bounce}
      />
      <SideBarContainer />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
