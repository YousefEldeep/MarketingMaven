import { Heart, Lightbulb, Handshake } from "lucide-react";

export default function About() {
  const values = [
    {
      icon: <Heart className="text-white text-xl" />,
      title: "Cultural Authenticity",
      description: "Respecting and celebrating the rich cultural heritage of both Saudi Arabia and Egypt in every campaign."
    },
    {
      icon: <Lightbulb className="text-white text-xl" />,
      title: "Creative Innovation",
      description: "Pushing the boundaries of traditional marketing with innovative solutions and creative thinking."
    },
    {
      icon: <Handshake className="text-white text-xl" />,
      title: "Strategic Partnerships",
      description: "Building lasting relationships that create mutual value and drive sustainable growth."
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="about" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
              Bridging Saudi Excellence with Egyptian Innovation
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Saudi Marketing brings the strategic insights and creative excellence of Saudi Arabia's 
              marketing landscape to the dynamic Egyptian market. Our team combines deep understanding 
              of both cultures with cutting-edge marketing technologies.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Founded on the principle that great marketing transcends borders, we specialize in 
              creating campaigns that resonate authentically with Egyptian consumers while maintaining 
              the highest international standards.
            </p>
            
            {/* Key Statistics */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold font-playfair mb-2">100+</div>
                <div className="text-gray-400">Successful Campaigns</div>
              </div>
              <div>
                <div className="text-3xl font-bold font-playfair mb-2">2018</div>
                <div className="text-gray-400">Established in Egypt</div>
              </div>
            </div>
            
            <button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Learn More About Us
            </button>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Saudi Marketing team collaborating on Egyptian market strategies" 
              className="rounded-xl shadow-2xl" 
            />
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-6 rounded-xl shadow-xl">
              <div className="text-2xl font-bold font-playfair mb-1">25+</div>
              <div className="text-sm text-gray-600">Expert Team Members</div>
            </div>
          </div>
        </div>
        
        {/* Team Values */}
        <div className="mt-20">
          <h3 className="font-playfair text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-800 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h4 className="font-playfair text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
