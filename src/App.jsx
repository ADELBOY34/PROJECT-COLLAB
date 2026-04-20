import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageIslem from './pages/PageIslem'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>home page</h1>}/>
        <Route path='/islem' element={<PageIslem/>}/>
      </Routes>
    </div>
  )
}

export default App
