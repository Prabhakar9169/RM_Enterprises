import React, { useEffect, useState } from 'react';

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set visibility to true after component mounts to trigger animations
    setTimeout(() => {
      setIsVisible(true);
    }, 100); // Small delay to ensure animation works properly
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative  py-16 overflow-hidden bg-gray-900 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/backgroundImage.jpg')",
          backgroundSize : '200% 100%',
          backgroundRepeat : 'no-repeat'
          // Replace 'your-image.jpg' with your actual image filename
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 "></div>
        
        <div className="container mx-auto px-4 flex flex-col items-center text-center relative z-10">
          <h1 
            className={`text-4xl md:text-5xl text-yellow-600 font-bold mb-6 transition-all duration-1000 ease-in-out transform ${
              isVisible 
                ? 'scale-100 opacity-100' 
                : 'scale-0 opacity-0'
            }`}
          >
            RM ENTERPRISES
          </h1>
          
          <p 
            className={`text-xl md:text-2xl mb-8 max-w-3xl font-bold transition-all duration-700 delay-300 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            Government approved Class A registered contractor for Electrical work, All MEP services, all kind of material supply, all type of Civil construction and Optical fiber Work.
          </p>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-500 transform ${
              isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-8 opacity-0 scale-95'
            }`}
          >
            <a 
              href="#services" 
              className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition"
            >
              Our Services
            </a>
            <a 
              href="#contact" 
              className="bg-blue-500 hover:bg-gray-100  font-bold py-3 px-6 rounded-md transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;