import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Header from './Header/Header.jsx'
import Main from './Main/Main.jsx'
import Str2 from './str2/str2.jsx'
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Main/>} />
        <Route path='Main' element={<Main/>}/>
        <Route path='Str2' element={<Str2/>}/>
      </Routes>
    </>
  )
}

export default App
