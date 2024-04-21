import './App.css'
import Navbar from './Components/Navbar'

import About from './Components/About'
import Portfolio from './Components/Portfolio'

import Experience from './Components/Experience'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import ReHome from './Components/ReHome'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
 
  return (
  
<Router>
       <Navbar/>
      <Routes>
      <Route path='/'  element={<ReHome/>}/>
        <Route path='/home'  element={<ReHome/>}/>
        <Route path='/about'  element={<About/>}/>
        <Route path='/contact'  element={<Contact/>}/>
        <Route path='/experience'  element={<Experience/>}/>
        <Route path='/portfolio'  element={<Portfolio/>}/>
      </Routes>
      <Footer/>
     </Router>
  )
}


export default App
