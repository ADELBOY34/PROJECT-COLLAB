import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageIslem from './pages/PageIslem'
import PageAdel from './pages/PageAdel'
import PageMyriam from './pages/PageMyriam'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<h1>home page</h1>}/>
        <Route path='/islem' element={<PageIslem/>}/>
        <Route path='/adelpage' element={
          <PageAdel/>
      }/>
        <Route path='/myriam' element={<PageMyriam/>}/>
      </Routes>
  
    </div>
  )
}

export default App
