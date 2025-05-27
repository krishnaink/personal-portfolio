
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code"
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      description: "Analytical thinking and creative solutions to complex challenges"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: Zap,
      title: "Quick Learner",
      description: "Adaptable to new technologies and frameworks"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a recent Computer Science graduate with a passion for building innovative software solutions 
            and a strong foundation in both frontend and backend development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">My Journey</h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              During my Computer Science studies, I developed a strong foundation in algorithms, data structures, 
              and software engineering principles. I've worked on various projects ranging from web applications 
              to machine learning models, always focusing on creating user-centered solutions.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I'm particularly interested in full-stack development, cloud technologies, and the intersection 
              of AI and web development. I believe in continuous learning and staying up-to-date with the 
              latest industry trends and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Backend</h4>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Java', 'PostgreSQL', 'MongoDB'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">Tools & Others</h4>
              <div className="flex flex-wrap gap-2">
                {['Git', 'Docker', 'AWS', 'Linux', 'Figma'].map((skill) => (
                  <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
