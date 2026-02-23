import Navbar from './components/navbar';
import NavbarGlow from './components/navbarglow';
import Footer from './components/footer';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <NavbarGlow />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}