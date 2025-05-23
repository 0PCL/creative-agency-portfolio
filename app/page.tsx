import Hero from "./components/Hero"
import AboutUs from "./components/AboutUs"
import Services from "./components/Services"
import PortfolioGrid from "./components/PortfolioGrid"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Newsletter from "./components/Newsletter"
import CustomCursor from "./components/CustomCursor"

export default function Home() {
  return (
    <main className="relative">
      <CustomCursor />
      <Hero />
      <AboutUs />
      <Services />
      <PortfolioGrid />
      <Testimonials />
      <Newsletter />
      <Contact />
    </main>
  )
}
