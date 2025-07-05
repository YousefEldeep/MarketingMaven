import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const portfolioItems = [
    {
      category: "digital",
      title: "Saudi Telecom Egypt Launch",
      description: "Digital campaign for STC's market entry into Egypt with localized messaging and cultural adaptation",
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "2.5M+ reach, 15% engagement rate"
    },
    {
      category: "branding",
      title: "NEOM Future City Branding",
      description: "Brand positioning and visual identity for NEOM's Egyptian partnerships and investments",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "Brand awareness increased by 40%"
    },
    {
      category: "partnerships",
      title: "Aramco-Egypt Energy Alliance",
      description: "Strategic communication campaign for Saudi Aramco's energy partnerships in Egypt",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "Government stakeholder approval 95%"
    },
    {
      category: "digital",
      title: "AlRajhi Bank Digital Expansion",
      description: "Digital marketing strategy for AlRajhi Bank's Egyptian market penetration",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "Customer acquisition +60%"
    },
    {
      category: "branding",
      title: "SABIC Sustainability Initiative",
      description: "Environmental sustainability messaging and brand campaign for SABIC in Egypt",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "ESG rating improvement 25 points"
    },
    {
      category: "partnerships",
      title: "Saudi-Egyptian Tourism Bridge",
      description: "Cross-cultural tourism campaign promoting Saudi destinations to Egyptian travelers",
      image: "https://images.unsplash.com/photo-1539650116574-75c0c6b73469?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800",
      metrics: "Tourism bookings +180%"
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
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="font-playfair text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 mb-3 text-sm">{item.description}</p>
                  <p className="text-yellow-400 mb-4 text-sm font-medium">{item.metrics}</p>
                  <button className="bg-white text-black px-4 py-2 rounded font-medium text-sm hover:bg-gray-100 transition-colors">
                    View Case Study
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
