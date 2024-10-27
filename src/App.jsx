import { BrowserRouter, Route, Routes } from "react-router-dom"
import Features from "./landingpage/Features"
import Footer from "./landingpage/Footer"
import Header from "./landingpage/Header"
import Hero from "./landingpage/Hero"
import Projects from './landingpage/NewProjects'
import Partners from './landingpage/Partners'
import Homepage from "./landingpage/Homepage"
import ProjectsPage from "./components/ProjectsPage"


function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/projects" element={<ProjectsPage/>} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
