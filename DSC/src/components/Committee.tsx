import React, { useState } from 'react';

interface Committee {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const Committees: React.FC = () => {
  const [activeCommittee, setActiveCommittee] = useState<string | null>(null);
  const committees: Committee[] = [
    { id: 'hr', name: 'HR', description: 'Manages recruitment, member relations, and internal team dynamics to ensure a positive club atmosphere.', icon: '👥' },
    { id: 'pr', name: 'PR', description: 'Builds the club\'s public image through external communications and relationship building with partners.', icon: '🔊' },
    { id: 'digital-marketing', name: 'Digital Marketing', description: 'Creates and executes marketing strategies across digital platforms to promote club activities and events.', icon: '📱' },
    { id: 'cyber', name: 'Cyber', description: 'Focuses on cybersecurity education, ethical hacking, and information security practices.', icon: '🔒' },
    { id: 'ai', name: 'AI', description: 'Explores artificial intelligence technologies, machine learning, and practical AI applications.', icon: '🤖' },
    { id: 'software', name: 'Software', description: 'Develops software solutions, explores various programming languages, and builds practical applications.', icon: '💻' },
    { id: 'web', name: 'Web', description: 'Creates web applications, explores front-end and back-end technologies, and modern web development practices.', icon: '🌐' },
    { id: 'graphic-design', name: 'Graphic Design', description: 'Crafts visual content, illustrations, and designs for club materials and promotional content.', icon: '🎨' },
    { id: 'ui-ux', name: 'UI/UX', description: 'Designs user-centered interfaces and experiences for digital products with a focus on usability.', icon: '📐' },
    { id: 'event-organizing', name: 'Event Organizing', description: 'Plans, coordinates, and executes club events, workshops, and competitions for members and the community.', icon: '📅' },
    { id: 'flutter', name: 'Flutter', description: 'Focuses on mobile app development using Flutter framework to build cross-platform applications.', icon: '📱' },
    { id: 'cloud', name: 'Cloud', description: 'Explores cloud computing technologies, serverless architectures, and modern deployment practices.', icon: '☁️' },
  ];

  return (
    <section id="committees" className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
        <div className={`text-center mb-16 transition-opacity duration-700  'opacity-100 translate-y-0' }`}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Our <span className="text-green-400">Committees</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our specialized committees where you can learn, grow, and contribute based on your interests and skills.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {committees.map((committee, index) => (
            <div
              key={committee.id}
              className={`bg-gray-800 rounded-xl p-6 border border-gray-700 transition-all duration-300 cursor-pointer hover:border-green-400 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-400/10 ${
                'opacity-100 translate-y-0' 
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveCommittee(committee.id)}
              onMouseLeave={() => setActiveCommittee(null)}
            >
              <div className="text-4xl mb-4">{committee.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{committee.name}</h3>
              <p className="text-gray-400 text-sm">{committee.description}</p>
              <div
                className={`mt-4 h-1 bg-blue-500 transition-all duration-300 ${
                  activeCommittee === committee.id ? 'w-full' : 'w-0'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-blue-500 opacity-10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-green-400 opacity-10 rounded-full blur-3xl -z-10"></div>
    </section>
  );
};

export default Committees;
