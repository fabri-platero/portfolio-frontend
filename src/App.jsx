import About from './Components/About';
import Education from './Components/Education';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Socials from './Components/Socials';
import ThemeToggle from './Components/ThemeToggle';
import WorkExperience from './Components/WorkExperience';

function App() {
  return (
    <div className="min-h-screen pb-24">
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <div className="mx-auto flex w-[min(94%,56rem)] flex-col gap-16 px-4 py-20">
        <Hero />
        <About />
        <WorkExperience />
        <Skills />
        <Education />
        <Projects />
        <Socials />
      </div>
      <Navbar />
    </div>
  );
}

export default App;
