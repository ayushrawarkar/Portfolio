import Hero from '../components/sections/Hero';
import AboutMe from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <div className="pt-16"> {/* To account for fixed Navbar */}
      <Hero id="home" />
      <AboutMe id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </div>
  );
}