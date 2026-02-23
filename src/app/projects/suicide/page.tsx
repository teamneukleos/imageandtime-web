import Navbar from "@/app/(public)/components/navbar";
import SuicideContent from "./suicide";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";


export default function SuicidePage() {
  return (
    <>
    <Navbar />
        <SuicideContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}