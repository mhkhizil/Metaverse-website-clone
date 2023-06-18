import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'
import Login from './Components/Login/Login'

const App = () => {
  const location = useLocation()
  const isLogin = location.pathname == '/login' || location.pathname == '/loginemail'
  return (
    <div>
      {!isLogin && <Navbar/>}
      <Routes>
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}

export default App