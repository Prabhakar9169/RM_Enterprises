import React, { useState, useEffect, useRef } from 'react'

function Team() {
  // State to track which members' images are shown
  const [showRatnakarImage, setShowRatnakarImage] = useState(false);
  const [showNishantImage, setShowNishantImage] = useState(false);
  
  // Refs for the containers
  const ratnakarRef = useRef(null);
  const nishantRef = useRef(null);
  
  // Handle clicks outside of the image containers
  useEffect(() => {
    function handleClickOutside(event) {
      if (showRatnakarImage && ratnakarRef.current && !ratnakarRef.current.contains(event.target)) {
        setShowRatnakarImage(false);
      }
      if (showNishantImage && nishantRef.current && !nishantRef.current.contains(event.target)) {
        setShowNishantImage(false);
      }
    }
    
    // Add event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showRatnakarImage, showNishantImage]);

  return (
    <>
     {/* Our Team Sections */}
     <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Ratnakar Mishra with dropdown image */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md"   onClick={() => setShowRatnakarImage(!showRatnakarImage)} ref={ratnakarRef}>
              <div 
                className="cursor-pointer" 
              
              >
                <h3 className="text-xl font-bold text-blue-700">Mr. Ratnakar Mishra</h3>
                <p className="text-gray-600 italic mb-2">Proprietor</p>
                <p>Electrical & FM expertise with more than 17 years of Experience</p>
                <p className="text-blue-600 mt-2 text-sm">
                
                </p>
              </div>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  showRatnakarImage ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <img 
                  src="/images/ratnakarMishra.jpeg" 
                  alt="Mr. Ratnakar Mishra" 
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
            
            {/* Nishant Khare with dropdown image */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md"  onClick={() => setShowNishantImage(!showNishantImage)} ref={nishantRef}>
              <div 
                className="cursor-pointer" 
               
              >
                <h3 className="text-xl font-bold text-blue-700">Mr. Nishant Khare</h3>
                <p className="text-gray-600 italic mb-2">Co-Founder</p>
                <p>Electrical & FM Expertise with 8 years of Experience</p>
                <p className="text-blue-600 mt-2 text-sm">
                 
                </p>
              </div>
              <div 
                className={`mt-4 overflow-hidden transition-all duration-500 ease-in-out ${
                  showNishantImage ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <img 
                  src="/images/nishantKhare.jpeg" 
                  alt="Mr. Nishant Khare" 
                  className="w-full rounded-md shadow-sm"
                />
              </div>
            </div>
           
            {/* Regular team members without dropdown images */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Sanjay Mishra</h3>
              <p className="text-gray-600 italic mb-2">Team Member</p>
              <p>AC & Refrigeration Expertise with 20 years of Experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Rajendra Nigam</h3>
              <p className="text-gray-600 italic mb-2">Team Member</p>
              <p>Soft Services Expertise with 9 years of Experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Abhay Singh</h3>
              <p className="text-gray-600 italic mb-2">Team Member</p>
              <p>MEP Project Execution with More Than 5 Years of Experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Rajmani Mishra</h3>
              <p className="text-gray-600 italic mb-2">Sales Manager</p>
              <p>With More Than 3 Years of Experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Neeraj Kasyap</h3>
              <p className="text-gray-600 italic mb-2">Marketing Manager</p>
              <p>With 10 Years of Experience</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Krishnamani Pandey</h3>
              <p className="text-gray-600 italic mb-2">Project Manager</p>
              <p>Project managing and execution expertise</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Akshay Pandey</h3>
              <p className="text-gray-600 italic mb-2">Team Member</p>
              <p>MEP installation & project execution with more than 7 years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Team