
import './assets/App.css'
import AboutSection from './components/AboutSection'
import ContactSection from './components/Contactsection'
import EducationSection from './components/EducationSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import NavBarSection from './components/NavBarSection'
import ProjectSection from './components/ProjectSection'
import SkillsSection from './components/SkillsSection'

function App() {
 

  return (
    <>
    <NavBarSection/>
    <HeroSection/>
    <SkillsSection/>
    <AboutSection/>
    <ProjectSection/>
    <EducationSection/>
    <ContactSection/>
    <FooterSection/>
    </>
  )
}

export default App
