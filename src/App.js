import { About } from './components/About';
import Contact from './components/Contact';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
