interface LogoProps {
  className?: string;
  textColor?: string;
}

export default function Logo({ className = "", textColor = "text-black" }: LogoProps) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="bg-black rounded-lg p-2 w-12 h-12 flex items-center justify-center">
        <span className="text-white font-bold text-xl font-playfair">SA</span>
      </div>
      <div className={textColor}>
        <div className="font-playfair font-semibold text-lg">SAUDI</div>
        <div className="font-inter text-sm -mt-1">Marketing</div>
      </div>
    </div>
  );
}
