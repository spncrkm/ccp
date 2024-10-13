import { BrowserRouter } from "react-router-dom"
import Features from "./landingpage/Features"
import Footer from "./landingpage/Footer"
import Header from "./landingpage/Header"
import Hero from "./landingpage/Hero"
import Projects from './landingpage/NewProjects'
import Partners from './landingpage/Partners'


function App() {

  return (
    <BrowserRouter>
     <Header />
     <Hero />
     <Features />
     <Projects />
     <Partners />
     <Footer />
    </BrowserRouter>
  )
}

export default App
