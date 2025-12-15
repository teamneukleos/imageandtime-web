import AboutHero from "./abouthero";
import Expertise from "./expertise";
import Journey from "./journey";
import Board from "./board";
import Team from "./team";

export default function HomePage() {
  return (
    <>
      <AboutHero />
        <Expertise />
        <Journey />
        <Board />
        <Team />
    </>
  );
}