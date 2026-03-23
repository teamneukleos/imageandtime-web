import Navbar from './(public)/components/navbar';
import NavbarGlow from './(public)/components/navbarglow';
import Hero from './(public)/components/hero';
import Intro from './(public)/components/intro';

import Brands from './(public)/components/brands';
import Awards from './(public)/components/award';
import Footer from './(public)/components/footer';

export default function HomePage() {
  return (
    <>
    <Navbar />
    <NavbarGlow />
      <Hero />
      
      <Intro />
      
      
      <Brands />
      <Awards />
      <Footer />
    </>
  );
}