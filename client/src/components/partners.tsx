export default function Partners() {
  const partners = [
    "ALMARAI", "NANA", "ULTIMATE", "VENUERIFIC", "AGA", "KAYANEE",
    "CALIBRE CHOICE", "DERINGERS", "FROM WITHIN SALON", "SALWA", "CBI", "KOYA",
    "AL WING GRAND", "O1CHI", "CLINIC", "RED SEA", "LIFE EYES", "FARIED", 
    "AL ASMA CLINICS", "SETRA", "RAPID", "MUSTASHFA", "WINGS", "SEERATILIK",
    "ROYAL CARE", "LIPE", "HOUSE OF JEWEL", "RAFAL", "AL ASHLY", "AL KHAIR"
  ];

  const stats = [
    { number: "30+", label: "Trusted Clients" },
    { number: "150M+", label: "Combined Reach" },
    { number: "5+", label: "Years of Excellence" }
  ];

  return (
    <section id="partners" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">Our Clients</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're proud to work with diverse brands and organizations across various industries, 
            delivering exceptional marketing solutions that drive real results.
          </p>
        </div>
        
        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-off-white p-4 rounded-lg flex items-center justify-center h-20 hover:bg-gray-100 transition-colors"
            >
              <div className="text-gray-400 font-semibold text-xs text-center leading-tight">
                {partner}
              </div>
            </div>
          ))}
        </div>
        
        {/* Partnership Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold font-playfair mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
