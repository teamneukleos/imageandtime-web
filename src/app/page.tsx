import Hero from './components/hero';
import Intro from './components/intro';

import OurServices from './components/ourservices';
import Brands from './components/brands';
import ProjectIdea from './components/ProjectIdea';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      <Intro />
      
      <OurServices />
      <Brands />
      <ProjectIdea />
    </>
  );
}