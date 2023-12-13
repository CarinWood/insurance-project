import { Home } from '../components/home/Home'
import { OurOffer } from '../components/ourOffer/OurOffer'
import { About } from '../components/about/About'
import { Steps } from '../components/steps/Steps'
import { Footer } from '../components/footer/Footer'
import { Nav } from '../components/navbar/Nav'

export const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <Home/>
      <OurOffer/>
      <About/>
      <Steps/>
      <Footer/>
    </div>
  )
}
