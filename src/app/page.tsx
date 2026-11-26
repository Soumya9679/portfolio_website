import Hero from '@/components/sections/Hero';
import Projects from '@/components/sections/Projects';
import Skills from '@/components/sections/Skills';
import Leadership from '@/components/sections/Leadership';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Leadership />
      <About />
      <Contact />
    </>
  );
}
