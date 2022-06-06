import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home/Home'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";



const App = () => {
  return (
      <div>
        <Routes>
          <Navbar />
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
  )
}

export default App


