import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import Home from './components/home/home'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Home />
  </StrictMode>,
)
