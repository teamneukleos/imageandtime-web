import Navbar from "@/app/(public)/components/navbar";
import GreenspringsContent from "./greensprings";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function GreenspringsPage() {
  return (
    <>
    <Navbar />
       <GreenspringsContent />
         <CreativeIdea />
        <Footer />
    </>
  );
}