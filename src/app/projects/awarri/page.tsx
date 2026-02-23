import Navbar from "@/app/(public)/components/navbar";
import AwarriContent from "./awarri";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function AwarriPage() {
  return (
    <>
    <Navbar />
        <AwarriContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}