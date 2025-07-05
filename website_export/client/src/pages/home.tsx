import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Partners from "@/components/partners";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <Portfolio />
      <Partners />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}
