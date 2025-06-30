import Logo from './sections/Logo'
import NavBar from './components/NavBar'
import FeatureCards from './sections/FeatureCards'
import Hero from './sections/Hero'
import Showcase from './sections/Showcase'
import Experience from './sections/Experience'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Showcase />
      <Logo />
      <FeatureCards />
      <Experience />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>   
  )
}

export default App