import Navbar from "@/app/(public)/components/navbar";
import LacaseraContent from "./lacasera";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function LacaseraPage() {
  return (
    <>
    <Navbar />
      <LacaseraContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}