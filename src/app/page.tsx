import Navbar from './(public)/components/navbar';
import NavbarGlow from './(public)/components/navbarglow';
import Hero from './(public)/components/hero';
import Intro from './(public)/components/intro';

import OurServices from './(public)/components/ourservices';
import Brands from './(public)/components/brands';
import ProjectIdea from './(public)/components/ProjectIdea';
import Footer from './(public)/components/footer';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <NavbarGlow />
      <Hero />
      
      <Intro />
      
      <OurServices />
      <Brands />
      <ProjectIdea />
      <Footer />
    </>
  );
}