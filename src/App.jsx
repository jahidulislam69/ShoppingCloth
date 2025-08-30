import React from 'react'
import HeroCar from './Pages/HeroCar'
import Navbar from './Components/Navbar'
import ProductShow from './Pages/ProductShow'
import Explore from './Pages/Explore'
import About from './Pages/About'
import Footer from './Pages/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <HeroCar/>
      <ProductShow/>
      <Explore/>
      <About/>
      <Footer/>
    </div>
  )
}

export default App
