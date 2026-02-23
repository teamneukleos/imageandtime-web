import Navbar from "@/app/(public)/components/navbar";
import MrBiggsContent from "./mrbiggs";
import CreativeIdea from "./creativeidea";
import Footer from "@/app/(public)/components/footer";

export default function MrBiggsPage() {
  return (
    <>
    <Navbar />
       <MrBiggsContent/>
         <CreativeIdea />
        <Footer />
     
    </>
  );
}