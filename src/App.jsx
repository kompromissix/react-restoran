import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main/>} />
        <Route path='Main' element={<Main/>}/>
      </Routes>
    </>
  )
}

export default App
