import Welcome from '../components/Welcome';
import AboutMe from '../components/AboutMe';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Welcome />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
}