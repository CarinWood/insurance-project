import './App.css'
import { About } from './components/about/About'
import { Home } from './components/home/Home'
import { Nav } from './components/navbar/Nav'
import { OurOffer } from './components/ourOffer/OurOffer'
import { Steps } from './components/steps/Steps'

function App() {
 

  return (
    <div className='app'>
       <Nav/>
      <Home/>
      <OurOffer/>
      <About/>
      <Steps/>
    </div>
  )
}

export default App
