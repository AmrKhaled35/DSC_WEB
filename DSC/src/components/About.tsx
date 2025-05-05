import React from 'react';
import { BookOpen, Users, Lightbulb, Award } from 'lucide-react';
interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const About: React.FC = () => {
  const features: Feature[] = [
    {
      id: 1,
      title: 'Volunteer Teaching',
      description: 'Our members volunteer their time to teach and share knowledge with fellow students.',
      icon: <BookOpen className="text-green-500" size={24} />,
    },
    {
      id: 2,
      title: 'Community Building',
      description: 'We foster a supportive community where students can connect, collaborate, and grow together.',
      icon: <Users className="text-blue-500" size={24} />,
    },
    {
      id: 3,
      title: 'Skill Development',
      description: 'Through workshops, projects, and mentorship, we help students develop practical, industry-relevant skills.',
      icon: <Lightbulb className="text-green-500" size={24} />,
    },
    {
      id: 4,
      title: 'Competition Organizing',
      description: 'We organize competitions in problem-solving and other domains to challenge and motivate students.',
      icon: <Award className="text-blue-500" size={24} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className={`lg:w-1/2  'opacity-100 translate-y-0' } transition-all duration-500`}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              About <span className="text-green-500">DSC</span>
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Developer Student Clubs (DSC) is a student-led community that aims to bridge the gap between theory and practical application in technology education.
            </p>
            <p className="text-gray-400 mb-8">
              Founded with the mission to provide students with hands-on learning experiences, our club brings together like-minded individuals passionate about technology and innovation. Through various committees, workshops, and events, we create opportunities for students to learn new skills, collaborate on projects, and prepare for future careers in tech.
            </p>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-green-500">11+</span>
                <span className="text-gray-400 text-sm">Committees</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-500">50+</span>
                <span className="text-gray-400 text-sm">Workshops</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-green-500">500+</span>
                <span className="text-gray-400 text-sm">Members</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-bold text-blue-500">20+</span>
                <span className="text-gray-400 text-sm">Events</span>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6  'opacity-100 translate-y-0'} transition-all duration-500`} style={{ transitionDelay: '0.3s' }}>
            {features.map((feature) => (
              <div key={feature.id} className="bg-gray-800 rounded-xl p-6 border border-gray-700">
                <div className="rounded-full bg-gray-900 p-3 w-fit mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default About;
