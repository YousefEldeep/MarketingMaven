import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";
import Logo from "./logo";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "Services", section: "services" },
    { label: "Portfolio", section: "portfolio" },
    { label: "Partners", section: "partners" },
    { label: "About", section: "about" },
    { label: "Contact", section: "contact" }
  ];

  const socialLinks = [
    { icon: <Linkedin className="text-xl" />, href: "#" },
    { icon: <Instagram className="text-xl" />, href: "#" },
    { icon: <Twitter className="text-xl" />, href: "#" },
    { icon: <Facebook className="text-xl" />, href: "#" }
  ];

  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <Logo textColor="text-white" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Bridging Saudi excellence with Egyptian innovation to create impactful marketing 
              solutions that resonate with local audiences.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-gray-400 text-sm">
              <p>New Cairo, Egypt<br />5th Settlement, Building 12</p>
              <p>+20 2 1234 5678</p>
              <p>hello@saudimarketing.eg</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Saudi Marketing. All rights reserved. Proudly serving the Egyptian market.</p>
        </div>
      </div>
    </footer>
  );
}
