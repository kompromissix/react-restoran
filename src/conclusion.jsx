import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import { HashRouter } from 'react-router-dom'
import Nav from './nav/nav.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Header />
      <Nav></Nav>
      <Main />
      <App />
    </HashRouter>
  </StrictMode>,
)
