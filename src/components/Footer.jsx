import React from 'react'

function Footer() {
  return (
 <>
 
  {/* Footer */}
  <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">RM ENTERPRISES</h3>
              <p className="mb-4">Class A Registered Electrical Contractor and Material Supplier with rich experience in Electromechanical, Hospitality and Supply Chain management.</p>
            
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
                <li><a href="#about" className="hover:text-blue-400 transition">About Us</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition">Services</a></li>
                <li><a href="#products" className="hover:text-blue-400 transition">Products</a></li>
                <li><a href="#clients" className="hover:text-blue-400 transition">Clients</a></li>
                <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Certifications</h3>
              <ul className="space-y-2" style={{ listStyleType: "'➡ '" }}>
                <li>Government Approved Class A Electrical Contractor</li>
                <li>GST Registered Business</li>
                <li>ISO Registered Certificate</li>
                <li>MSME Registered Enterprises</li>               
                <li>E.S.I Act Registered</li>
                <li>Character Registered Certificate</li>
                <li>Solvency Registered Certificat</li>
                <li>Labour Licence Registered Certificat</li>
                <li>Employee PF Registered Certificat</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6">
            <p className="text-center text-gray-400">&copy; {new Date().getFullYear()} RM Enterprises. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
 
 </>
  )
}

export default Footer