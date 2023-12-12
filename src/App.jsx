import './App.css'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Nav } from './components/navbar/Nav'
import { OurOffer } from './components/ourOffer/OurOffer'

function App() {
 

  return (
    <>
       <Nav/>
      <Home/>
      <OurOffer/>
      <About/>
    </>
  )
}

export default App
