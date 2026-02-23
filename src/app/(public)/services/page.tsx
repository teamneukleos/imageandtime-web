import ServiceHero from './servicehero';
import Services from './services';
import ServicesGrid from './servicesgrid';

export default function HomePage() {
  return (
    <>
        <ServiceHero />
        <Services />
        <ServicesGrid />
    </>
  );
}