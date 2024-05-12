

import './App.css'

import Homepage from './components/homepage/homepage'
import {Route, Routes} from 'react-router-dom'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='contact' element={<Cont}
    </Routes>

    </>
  )
}

export default App
