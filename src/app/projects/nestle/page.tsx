import Navbar from "@/app/(public)/components/navbar";
import NestleContent from "./nestle";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function NestlePage() {
  return (
    <>
    <Navbar />
      <NestleContent />
      <CreativeIdea />
      <Footer />
    </>
  );
}