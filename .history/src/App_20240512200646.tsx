

import './App.css'

import Homepage from './components/homepage/homepage'
import {Route, Routes} from 'react-router-dom'
import Contact from './components/contact/contact'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='contact' element={<Contact/>}/>
    </Routes>

    </>
  )
}

export default App
