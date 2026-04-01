import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Team } from './components/Team';
import { Projects } from './components/Projects';
import { Stats } from './components/Stats';
import { Footer } from './components/Footer';
import { ThreeBackground } from './components/ThreeBackground';

function App() {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    if (window.matchMedia("(pointer: fine)").matches && cursor) {
      document.body.classList.add('custom-cursor-active');

      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      };

      document.addEventListener('mousemove', handleMouseMove);

      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div id="custom-cursor" className="fixed top-0 left-0 w-3 h-3 rounded-full bg-white mix-blend-difference pointer-events-none z-[100] hidden sm:block origin-center" style={{ transform: 'translate(-50%, -50%)' }} />

      <ThreeBackground isModalOpen={false} />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Team />
        <Projects />
        <Stats />
        <Footer />
      </main>
    </>
  );
}

export default App;
