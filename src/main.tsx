import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/header/header'
import Home from './components/home/home'
import About from './components/about/about'
import Projects from './components/projects/projects'
import Fondo from './components/background/fondo'
import Contact from './components/contact/contact'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Fondo />
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  </StrictMode>,
)
