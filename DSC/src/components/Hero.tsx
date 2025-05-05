import  { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        backgroundImage:
          'radial-gradient(circle at 10% 20%, rgba(61, 220, 132, 0.1) 0%, rgba(66, 133, 244, 0.1) 90%)',
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center max-w-4xl mx-auto transition-opacity duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-white">
            Developer
            <br />
            <span className="text-green-400">Student</span>{' '}
            <span className="text-blue-500">Clubs</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join a vibrant community of passionate students building innovative solutions,
            mastering new technologies, and growing through collaborative learning experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#committees"
              className="bg-green-400 text-black font-medium px-8 py-3 rounded-full hover:bg-green-300 transition transform hover:scale-105"
            >
              Explore Committees
            </a>
            <a
              href="#contact"
              className="bg-transparent text-white font-medium px-8 py-3 rounded-full border border-blue-500 hover:bg-blue-500 hover:bg-opacity-10 transition transform hover:scale-105"
            >
              Join Us
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a
            href="#committees"
            className="flex flex-col items-center text-gray-400 hover:text-green-400 transition"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-green-400 opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Hero;
