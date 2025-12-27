import './App.css'
import Router from './config/router'
import { ThemeProvider } from '@emotion/react'
import theme from './config/theme'


function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
    <Router/>
      
    </ThemeProvider>
    </>
  )
}

export default App
