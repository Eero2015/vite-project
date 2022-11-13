import { useState } from 'react'
import './App.css'
import About from './business card/about'
import Footer from './business card/footer'
import Info from './business card/info'
import Interest from './business card/interest'


function App() {
  return(
    <div>
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
    )
}
export default App
