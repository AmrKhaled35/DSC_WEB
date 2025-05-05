import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  committee: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Joining the Software Committee at DSC was the best decision I made during my academic journey. The workshops and projects helped me develop practical skills that my courses didn't cover.",
      name: "Ahmed Hassan",
      role: "Computer Science Student",
      committee: "Software Committee"
    },
    {
      id: 2,
      text: "The UI/UX committee provided me with real-world design experience and a supportive community. I've grown tremendously as a designer thanks to the mentorship and collaborative projects.",
      name: "Layla Mahmoud",
      role: "Design Student",
      committee: "UI/UX Committee"
    },
    {
      id: 3,
      text: "Being part of the AI committee allowed me to explore cutting-edge technologies and work on exciting projects with like-minded peers. The knowledge I gained was invaluable for my career.",
      name: "Omar Ali",
      role: "Engineering Student",
      committee: "AI Committee"
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-500  'opacity-100 translate-y-0' `}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Member <span className="text-blue-500">Testimonials</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Hear what our members have to say about their experiences with DSC.
          </p>
        </div>

        <div className={`relative max-w-4xl mx-auto transition-all duration-500 delay-200  opacity-100 translate-y-0 }`}>
          <div className="bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-700 relative">
            <Quote className="text-green-500 opacity-20 absolute top-8 left-8" size={40} />

            <div className="text-center">
              <p className="text-lg md:text-xl text-gray-200 mb-8 italic relative z-10">
                "{testimonials[currentIndex].text}"
              </p>
              <div className="flex flex-col items-center">
                <p className="font-semibold text-white">{testimonials[currentIndex].name}</p>
                <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                <p className="text-green-500 text-sm mt-1">{testimonials[currentIndex].committee}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex space-x-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-green-500 w-6' : 'bg-gray-600 w-3'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-gray-800 text-gray-400 hover:text-white hover:bg-blue-500 hover:bg-opacity-20 transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Testimonials;
