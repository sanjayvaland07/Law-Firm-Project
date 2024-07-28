import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import About from './components/About'
import Gettouch from './components/Gettouch'
import PracticeAreas from './components/PracticeAreas'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Landing/>
     <About/>
     <PracticeAreas/>
     <Gettouch/>
    </>
  )
}

export default App
