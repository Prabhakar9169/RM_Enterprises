import React from 'react'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-black">Contact Us</h2>
          
          <div className="max-w-full mx-auto">
            {/* Form remains commented out as requested */}
            {/* <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">Get In Touch</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                <label htmlFor="email" className="block mb-1">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-1">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-md transition"
                >
                  Send Message
                </button>
              </form>
            </div> */}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="font-bold">Registered Address:</p>
                      <p>VILL KUCHHMUCHH, GAURA, BADSHAHPUR,</p>
                      <p>Jaunpur, Uttar Pradesh - 222133</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p>+91 9935039393</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p>Toll Free No. 7084000069</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="mr-3 flex-shrink-0" size={20} />
                    <div>
                      <p>rmenterprisesjop@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800 p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Emergency Services</h3>
              <p>We provide 24/7 emergency services for critical electrical issues. Call our emergency hotline for immediate assistance.</p>
              <p className="font-bold mt-2">Emergency: +91 9935039393</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact