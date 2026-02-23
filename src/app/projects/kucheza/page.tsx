import Navbar from "@/app/(public)/components/navbar";
import KuchezaContent from "./kucheza";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function KuchezaPage() {
  return (
    <>
    <Navbar />
      <KuchezaContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}