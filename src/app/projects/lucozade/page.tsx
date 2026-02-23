import Navbar from "@/app/(public)/components/navbar";
import LucozadeContent from "./lucozade";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function LucozadePage() {
  return (
    <>
    <Navbar />
        <LucozadeContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}