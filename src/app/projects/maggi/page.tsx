import Navbar from "@/app/(public)/components/navbar";
import MaggiContent from "./maggi";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function MaggiPage() {
  return (
    <>
    <Navbar />
        <MaggiContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}