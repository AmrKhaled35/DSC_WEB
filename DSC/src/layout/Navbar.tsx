import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-[#000000] shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-[#3DDC84] font-bold text-2xl">DS</span>
            <span className="text-[#4285F4] font-bold text-2xl">C</span>
          </a>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-[#3DDC84] transition">Home</a>
            <a href="#committees" className="text-white hover:text-[#3DDC84] transition">Committees</a>
            <a href="#events" className="text-white hover:text-[#3DDC84] transition">Events</a>
            <a href="#about" className="text-white hover:text-[#3DDC84] transition">About</a>
            <a href="#contact" className="text-white hover:text-[#3DDC84] transition">Contact</a>
          </div>

          {/* Join button */}
          <a href="#contact" className="hidden md:block bg-[#3DDC84] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition">
            Join Us
          </a>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#121212] absolute top-full left-0 right-0 p-4 border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-white hover:text-[#3DDC84] transition py-2" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#committees" className="text-white hover:text-[#3DDC84] transition py-2" onClick={() => setIsOpen(false)}>Committees</a>
            <a href="#events" className="text-white hover:text-[#3DDC84] transition py-2" onClick={() => setIsOpen(false)}>Events</a>
            <a href="#about" className="text-white hover:text-[#3DDC84] transition py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#contact" className="text-white hover:text-[#3DDC84] transition py-2" onClick={() => setIsOpen(false)}>Contact</a>
            <a href="#contact" className="bg-[#3DDC84] text-black px-6 py-2 rounded-full font-medium hover:bg-opacity-90 transition text-center" onClick={() => setIsOpen(false)}>
              Join Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
