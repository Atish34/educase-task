import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Profile from './pages/Profile'
import Login from "./pages/Login"

const App = () => {
  return <>
   <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
  </>
}

export default App