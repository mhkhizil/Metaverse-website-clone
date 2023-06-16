import React from 'react'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import ContactUs from './Components/ContactUs/ContactUs'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/contactus' element={<ContactUs/>}/>
      </Routes>
    </div>
  )
}

export default App