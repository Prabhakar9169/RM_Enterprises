import React from 'react'

function Team() {
  return (
    <>
     {/* Our Team Section */}
     <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Our Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Ratnakar Mishra</h3>
              <p className="text-gray-600 italic mb-2">Proprietor</p>
              <p>Electrical & FM expertise with more than 17 years of Experience</p>
            </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700">Mr. Nishant Khare</h3>
              <p className="text-gray-600 italic mb-2">Co-Founder</p>
              <p>Electrical & FM Expertise with 8 years of Experience</p>
            </div>
           
           
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