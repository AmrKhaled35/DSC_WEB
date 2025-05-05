import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121212] py-10 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="text-[#3DDC84] font-bold text-xl">DS</span>
              <span className="text-[#4285F4] font-bold text-xl">C</span>
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Developer Student Clubs - Empowering students through technology
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-16 text-sm">
            <div>
              <h5 className="font-medium text-white mb-3">Quick Links</h5>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-[#3DDC84] transition">Home</a></li>
                <li><a href="#committees" className="text-gray-400 hover:text-[#3DDC84] transition">Committees</a></li>
                <li><a href="#events" className="text-gray-400 hover:text-[#3DDC84] transition">Events</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-[#3DDC84] transition">About</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-white mb-3">Resources</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Projects</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Documentation</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-[#3DDC84] transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium text-white mb-3">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#3DDC84] transition">Code of Conduct</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Developer Student Clubs. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0 flex items-center">
            Made with <Heart size={14} className="mx-1 text-[#3DDC84]" /> by DSC Web Committee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
