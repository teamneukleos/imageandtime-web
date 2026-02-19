import AboutHero from "./abouthero";
import Expertise from "./expertise";
import Journey from "./journey";
import Board from "./board";
import Team from "./ourteam";
import CareerHero from "./career-hero";
import OpenPositions from "./OpenPosition";

export default function HomePage() {
  return (
    <>
      <AboutHero />
      <Expertise />
      <Journey />
      <Board />
      <Team />
      <CareerHero />
      <OpenPositions />
    </>
  );
}