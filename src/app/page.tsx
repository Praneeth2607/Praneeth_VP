import Hero from "./components/hero"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Skills from "./components/Skills"
import Divider from "./components/Divider"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />

      <Divider />
      <Skills />

      <Divider />
      <Experience />

      <Divider />
      <Projects />

      <Divider />
      <Contact />

    </>
  )
}
