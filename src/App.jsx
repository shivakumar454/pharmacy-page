import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/head/head'
import About from './components/about/about'
import Benefits from './components/benefits/benefits'
import Jobscourses from './components/jobsncourses/jobscourses'
import Details from './components/details/details'
import Footer from './components/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Head/>
     <About/>
     <Benefits/>  
     <Jobscourses/>
     <Details/>
     <Footer/>
    </>
  )
}

export default App
