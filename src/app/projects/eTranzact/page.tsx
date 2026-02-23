import Navbar from "@/app/(public)/components/navbar";
import ETranzactContent from "./eTranzact";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function eTranzactPage() {
  return (
    <>
    <Navbar />
        <ETranzactContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}