import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MountainParallax from './components/mountainParallax/mountainParallax'
import TextFormat from './components/textFormat/textFormat'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<TextFormat
isAnimated={false}/>
    </>
  )
}

export default App
