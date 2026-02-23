import Navbar from "@/app/(public)/components/navbar";
import OneAlphaContent from "./OneAlpha";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function OneAlphaPage() {
  return (
    <>
    <Navbar />
      <OneAlphaContent />
      <CreativeIdea />
      <Footer />
    </>
  );
}