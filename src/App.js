import { About } from './components/About';
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
    </div>
  );
}

export default App;
