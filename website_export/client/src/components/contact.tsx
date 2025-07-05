import { MapPin, Phone, Mail, Clock, CheckCircle, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="text-white" />,
      title: "Office Location",
      description: "New Cairo, Egypt\n5th Settlement, Building 12"
    },
    {
      icon: <Phone className="text-white" />,
      title: "Phone",
      description: "+20 2 1234 5678"
    },
    {
      icon: <Mail className="text-white" />,
      title: "Email",
      description: "hello@saudimarketing.eg"
    },
    {
      icon: <Clock className="text-white" />,
      title: "Business Hours",
      description: "Sunday - Thursday: 9:00 AM - 6:00 PM\nFriday - Saturday: Closed"
    }
  ];

  const socialLinks = [
    { icon: <Linkedin />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Facebook />, href: "#" }
  ];

  return (
    <section id="contact" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to elevate your brand in the Egyptian market? Let's discuss how Saudi Marketing 
              can help you achieve your goals.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="font-playfair text-2xl font-semibold mb-6 text-center">Contact Information</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-black w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{info.title}</h4>
                        <p className="text-gray-600 whitespace-pre-line">{info.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Social Media */}
              <div className="text-center">
                <h4 className="font-semibold mb-6">Follow Us</h4>
                <div className="flex justify-center space-x-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.href} 
                      className="bg-black text-white w-12 h-12 rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
              
              {/* Quick Response Promise */}
              <div className="bg-black text-white p-8 rounded-xl text-center">
                <h4 className="font-playfair text-2xl font-semibold mb-4">Quick Response Promise</h4>
                <p className="text-gray-300 mb-6 text-lg">
                  We understand the fast-paced nature of the Egyptian market. That's why we guarantee a response within 24 hours.
                </p>
                <div className="flex items-center justify-center space-x-3">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-lg">24-hour response guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}