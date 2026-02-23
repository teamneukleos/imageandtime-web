import Navbar from "@/app/(public)/components/navbar";
import BukkaHutContent from "./bukkahut";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function BukkaHutPage() {
  return (
    <>
        <Navbar />
        <BukkaHutContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}