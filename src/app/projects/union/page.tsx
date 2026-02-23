import Navbar from "@/app/(public)/components/navbar";
import UnionContent from "./union";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function UnionPage() {
  return (
    <>
      <Navbar />
        <UnionContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}