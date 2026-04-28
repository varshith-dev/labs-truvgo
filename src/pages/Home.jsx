import Hero from '../sections/Hero';
import About from '../sections/About';
import Team from '../sections/Team';
import Hackathon from '../sections/Hackathon';
import Ecosystem from '../sections/Ecosystem';
import Vision from '../sections/Vision';
import Contact from '../sections/Contact';
import SketchBackground from '../sections/SketchBackground';

export default function Home() {
  return (
    <>
      <SketchBackground opacity={0.15} />
      <main>
        <Hero />
        <About />
        <Team />
        <Hackathon />
        <Ecosystem />
        <Vision />
        <Contact />
      </main>
      <footer>
        <p>© 2026 TWISTEMS • Futuristic Innovation Collective • Building the Future Today</p>
      </footer>
    </>
  );
}
