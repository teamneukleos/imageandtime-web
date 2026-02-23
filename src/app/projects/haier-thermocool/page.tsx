import Navbar from "@/app/(public)/components/navbar";
import HaierThermocoolContent from "./haierthermocool";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function HaierThermocoolPage() {
  return (
    <>
    <Navbar />
        <HaierThermocoolContent />
        <CreativeIdea />
        <Footer />
    </>
  );
}