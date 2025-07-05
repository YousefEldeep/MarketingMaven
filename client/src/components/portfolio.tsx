import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      category: "digital",
      title: "Digital Campaign Portfolio",
      description: "Innovative digital marketing campaigns for Egyptian market",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      category: "branding",
      title: "Brand Identity Projects",
      description: "Complete brand development for Egyptian businesses",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      category: "partnerships",
      title: "Strategic Partnerships",
      description: "Cross-border collaboration campaigns",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      category: "digital",
      title: "E-commerce Solutions",
      description: "Digital transformation for retail brands",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      category: "branding",
      title: "Visual Identity Design",
      description: "Creative brand development projects",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    },
    {
      category: "digital",
      title: "Integrated Campaigns",
      description: "Multi-channel marketing strategies",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
    }
  ];

  const filters = [
    { key: "all", label: "All Projects" },
    { key: "digital", label: "Digital Campaigns" },
    { key: "branding", label: "Branding" },
    { key: "partnerships", label: "Partnerships" }
  ];

  const filteredItems = activeFilter === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="portfolio" className="bg-black text-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing successful campaigns and projects that have made a lasting impact 
            in the Egyptian market.
          </p>
        </div>
        
        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeFilter === filter.key
                  ? "bg-white text-black"
                  : "border border-gray-400 text-gray-300 hover:bg-white hover:text-black"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl bg-gray-900 aspect-square">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <button className="bg-white text-black px-4 py-2 rounded font-medium">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
}
