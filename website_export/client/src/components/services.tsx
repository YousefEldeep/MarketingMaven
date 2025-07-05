import { Megaphone, Palette, TrendingUp, Video, Handshake, Smartphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Megaphone className="text-white text-2xl" />,
      title: "Digital Campaigns",
      description: "Strategic digital marketing campaigns designed to reach and engage Egyptian audiences across all digital platforms.",
      features: ["Social Media Marketing", "Google Ads Management", "Content Strategy"]
    },
    {
      icon: <Palette className="text-white text-2xl" />,
      title: "Brand Identity",
      description: "Complete brand development and identity design that resonates with Egyptian consumers and cultural values.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity"]
    },
    {
      icon: <TrendingUp className="text-white text-2xl" />,
      title: "Market Research",
      description: "In-depth analysis of Egyptian market trends, consumer behavior, and competitive landscape insights.",
      features: ["Consumer Analysis", "Market Trends", "Competitor Research"]
    },
    {
      icon: <Video className="text-white text-2xl" />,
      title: "Content Creation",
      description: "High-quality video, photography, and written content that tells your brand's story effectively.",
      features: ["Video Production", "Photography", "Copywriting"]
    },
    {
      icon: <Handshake className="text-white text-2xl" />,
      title: "Partnership Marketing",
      description: "Strategic partnerships and collaborations that expand your reach in the Egyptian market.",
      features: ["Strategic Alliances", "Influencer Partnerships", "Co-marketing"]
    },
    {
      icon: <Smartphone className="text-white text-2xl" />,
      title: "Digital Presence",
      description: "Complete digital transformation including website development and mobile app marketing strategies.",
      features: ["Website Development", "App Marketing", "SEO Optimization"]
    }
  ];

  return (
    <section id="services" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive marketing solutions tailored for the Egyptian market, 
            combining global expertise with local insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
              <div className="bg-off-white p-8 rounded-xl h-full">
                <div className="bg-black w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="text-sm text-gray-500 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>• {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
