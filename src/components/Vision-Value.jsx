import React, { useState, useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

function VisionValue() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Set up intersection observer to detect when section is in viewport
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('about');
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Vision & Values Section */}
      <section id="about" className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Vision and Values section - animates from left */}
            <div 
              className={`md:w-2/5 transition-all duration-1000 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-32 opacity-0'
              }`}
            >
              {/* Vision */}
              <div className="mb-12">
                <h2 className="text-3xl font-bold mb-6 text-black">Our Vision</h2>
                <p className="text-lg mb-4">
                  To become a global leader in brand, technology, and services. Our vision provides us with a clear sense of direction and destination, capturing our aspiration to excel in everything we do. It defines what we stand for as a company and guides our employees in their choices and decisions every day. We are committed to delivering excellence in electrical work, all MEP services, all types of material supply, civil construction, and optical fiber work, ensuring innovation, quality, and reliability in every project we undertake.
                </p>
              </div>
              
              {/* Values - now below Vision on the left side */}
              <div className={`transition-all delay-300 duration-1000 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'
              }`}>
                <h2 className="text-3xl font-bold mb-6 text-black">Our Values</h2>
                <p className="text-lg mb-4 font-bold">Excellence is our Passion</p>
                <ul className="space-y-4">
                  <li className={`flex items-start transition-all delay-100 duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                  }`}>
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>We put our customer at center of what we do.</span>
                  </li>
                  <li className={`flex items-start transition-all delay-300 duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                  }`}>
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>We value challenge and reward our people.</span>
                  </li>
                  <li className={`flex items-start transition-all delay-500 duration-700 transform ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
                  }`}>
                    <CheckCircle className="text-green-600 mr-2 mt-1 flex-shrink-0" size={20} />
                    <span>We drive excellence sustainable financial performance.</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Image section - with centered image */}
            <div 
              className={`md:w-3/5 transition-all duration-1000 transform flex justify-center items-center ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'
              }`}
            >
              <img 
                src="/images/welcomPage.jpg" 
                alt="Company values representation" 
                className="w-3/4 h-auto rounded-lg shadow-lg object-cover my-6" 
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default VisionValue;