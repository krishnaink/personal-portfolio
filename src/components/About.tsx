
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const highlights = [{
    icon: Code,
    title: "Full-Stack Development",
    description: "Experienced in React, Node.js, Flask, and modern web technologies"
  }, {
    icon: Lightbulb,
    title: "Machine Learning & AI",
    description: "Applied ML techniques for movie recommendation systems and data analysis"
  }, {
    icon: Users,
    title: "Teaching & Leadership",
    description: "Undergraduate teaching assistant guiding 200+ students in programming"
  }, {
    icon: Zap,
    title: "Problem Solver",
    description: "Strong analytical skills with focus on optimization and system design"
  }];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 dark:from-gray-900 dark:via-gray-800 dark:to-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Computer Science student at George Mason University with a 3.56/4.0 GPA. 
            Passionate about building innovative software solutions and leveraging artificial intelligence 
            to solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-300 dark:border-blue-600 bg-white dark:bg-gray-800 hover:scale-105">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-200 to-slate-200 dark:from-blue-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'SQL'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-200 shadow-sm border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'Flask', 'Springboot', 'MongoDB', 'NumPy', 'Git'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-200 shadow-sm border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-3">Concepts & Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Cloud Computing', 'REST APIs', 'AWS Certified', 'CI/CD'].map(skill => (
                  <span key={skill} className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-700 dark:text-gray-200 shadow-sm border border-blue-300 dark:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 transition-colors">
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
