import Navbar from "@/app/(public)/components/navbar";
import SickleCellContent from "./sickle-cell";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function SickleCellPage() {
  return (
    <>
      <Navbar />
      <SickleCellContent />
      <CreativeIdea />
      <Footer />
    </>
  );
}