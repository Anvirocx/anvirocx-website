import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import About from "../components/about/About";
import Process from "../components/process/Process";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#080808]">
      <Navbar />
      <Hero />

      <div className="section-transition" />

      <Services />

      <About />

      <Process />

      <Contact />

      <Footer />
    </main>
  );
}
