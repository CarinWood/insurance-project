import { Home } from '../components/home/Home'
import { OurOffer } from '../components/ourOffer/OurOffer'
import { About } from '../components/about/About'
import { Steps } from '../components/steps/Steps'
import { Footer } from '../components/footer/Footer'

export const LandingPage = () => {
  return (
    <div>
      <Home/>
      <OurOffer/>
      <About/>
      <Steps/>
      <Footer/>
    </div>
  )
}
