
import { Route, Routes } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Services' element={<Services/>}/>
        <Route path='/Contact' element={<Contact/>}/>

      </Routes>
      <Footer/>
    </>
  )
}

export default App
