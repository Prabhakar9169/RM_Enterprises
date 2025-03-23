import React from 'react'
import { useState } from 'react'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, CheckCircle } from 'lucide-react'

function Header() {

   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  return (
    <>
     {/* Header/Navbar */}
     <header className="bg-black text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">RM ENTERPRISES</h1>
            <span className="text-sm bg-yellow-500 text-blue-900 px-2 py-1 rounded">ISO Registered</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-300 transition">Home</a>
            <a href="#about" className="hover:text-yellow-300 transition">About Us</a>
            <a href="#services" className="hover:text-yellow-300 transition">Services</a>
            <a href="#products" className="hover:text-yellow-300 transition">Products</a>
            <a href="#clients" className="hover:text-yellow-300 transition">Clients</a>
            <a href="#team" className="hover:text-yellow-300 transition">Our Team</a>
            <a href="#contact" className="hover:text-yellow-300 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-blue-900 py-4">
            <div className="container mx-auto px-4 flex flex-col space-y-3">
              <a href="#home" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#about" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>About Us</a>
              <a href="#services" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#products" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Products</a>
              <a href="#clients" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Clients</a>
              <a href="#team" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Our Team</a>
              <a href="#contact" className="hover:text-yellow-300 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}

export default Header