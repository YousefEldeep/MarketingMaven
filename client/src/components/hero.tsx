import { ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="bg-saudi-black text-saudi-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Creative marketing campaign" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-4xl">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting <span className="italic">Exceptional</span><br />
            Marketing Stories
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-2xl leading-relaxed">
            Saudi Marketing brings world-class creative solutions to the Egyptian market, 
            transforming brands through innovative campaigns and strategic partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => scrollToSection("portfolio")}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            >
              View Our Work
            </button>
            <button 
              onClick={() => scrollToSection("contact")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors text-center"
            >
              Start Your Project
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white text-2xl" />
      </div>
    </section>
  );
}
