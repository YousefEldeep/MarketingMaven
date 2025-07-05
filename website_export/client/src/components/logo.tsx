import logoImage from "@assets/EditedBy-TheInfluencer.ai-1751726058533_1751741191298.jpg";

interface LogoProps {
  className?: string;
  textColor?: string;
}

export default function Logo({ className = "", textColor = "text-black" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="Saudi Marketing Logo" 
        className="w-12 h-12 object-contain"
      />
      <div className={textColor}>
        <div className="font-playfair font-semibold text-lg">SAUDI</div>
        <div className="font-inter text-sm -mt-1">Marketing</div>
      </div>
    </div>
  );
}
