import React from 'react'
import Home from './components/Home'
import Create from './components/CRUD/Create'
import Show from './components/CRUD/Show'
// import Navbar from './components/Navbar'
import {
  BrowserRouter as Router,
  Route, 
  Routes} from 'react-router-dom'

function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route  path='/create' element={<Create />}/>
        <Route path='/listing' element={<Show />} />
      </Routes>
    </Router>
  )
}

export default App


