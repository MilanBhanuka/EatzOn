

// import React from 'react'
import { Route,Routes  } from 'react-router-dom'
import Navbar from './components/navbar'

import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer'
import { useState } from 'react'
import LoginPopup from './components/LoginPopup'

const App = () => {

  const [showLogin , setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/placeorder' element={<PlaceOrder />} />
      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App
