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
    <div className="min-h-screen">
      <a
        href="#main-content"
        className="sr-only rounded-full bg-cyan-500 px-4 py-2 font-medium text-white focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to content
      </a>
      <ThemeToggle className="fixed top-4 right-4 z-50" />
      <header>
        <Hero />
      </header>
      <main id="main-content">
        <About />
        <WorkExperience />
        <Skills />
        <Education />
        <Projects />
        <Socials />
      </main>
      <Navbar />
    </div>
  );
}

export default App;
