import React from 'react';
import { Calendar, Users, Award, BookOpen } from 'lucide-react';
interface Event {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const Events: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: 'Skill Development Workshops',
      description: 'Hands-on sessions teaching practical skills in programming, design, and other technical domains.',
      icon: <BookOpen className="text-green-500" size={24} />,
    },
    {
      id: 2,
      title: 'Problem Solving Competitions',
      description: 'Challenging contests to test and improve algorithmic thinking and coding abilities.',
      icon: <Award className="text-blue-500" size={24} />,
    },
    {
      id: 3,
      title: 'Networking Meetups',
      description: 'Opportunities to connect with industry professionals and like-minded students.',
      icon: <Users className="text-green-500" size={24} />,
    },
    {
      id: 4,
      title: 'Hackathons',
      description: 'Intensive collaborative events to build innovative solutions in a limited timeframe.',
      icon: <Calendar className="text-blue-500" size={24} />,
    },
  ];

  return (
    <section id="events" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16  'animate-slide-up' }`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Our <span className="text-blue-500">Events</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Participate in our diverse range of events designed to enhance your skills, challenge your abilities, and connect you with like-minded individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`bg-gray-800 rounded-xl p-8 border border-gray-700 transition-all duration-300 hover:border-blue-500 hover:translate-y-[-5px] ${
                'opacity-100 translate-y-0' 
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start">
                <div className="rounded-full bg-gray-900 p-3 mr-4">
                  {event.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-16 text-center 'animate-fade-in'}`} style={{ animationDelay: '0.4s' }}>
          <a href="#contact" className="bg-blue-500 text-white font-medium px-8 py-3 rounded-full hover:bg-opacity-90 transition inline-flex items-center">
            <Calendar size={20} className="mr-2" />
            Join Our Next Event
          </a>
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500 opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Events;
