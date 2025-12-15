import Hero from './components/hero';
import Intro from './components/intro';
import OurWork from './components/ourwork';
import OurServices from './components/ourservices';
import ProjectIdea from './components/ProjectIdea';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <Intro />
      <OurWork />
      <OurServices />
      <ProjectIdea />
    </>
  );
}