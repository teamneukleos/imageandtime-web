import AboutHero from "./abouthero";
import About from "./about";
import Stat from "./stat";
import OurTeam from "./ourteam";
import Board from "./board";
import Team from "./team";

export default function HomePage() {
  return (
    <>
      <AboutHero />
        <About />
        <Stat />
        <OurTeam />
        <Board />
        <Team />
    </>
  );
}