import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Header from './components/Header'
import BentoGrid from './components/BentoGrid'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      {/* <BentoGrid /> */}
    </>
  )
}

export default App
