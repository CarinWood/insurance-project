import './App.css'
import { Route, Routes } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { ContactPage } from './pages/ContactPage'

function App() {
 

  return (
    <div className='app'>
      <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </div>
  )
}

export default App
