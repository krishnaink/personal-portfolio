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
  return <section id="about" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Computer Science student at George Mason University with a 3.56/4.0 GPA. 
            Passionate about building innovative software solutions and leveraging artificial intelligence 
            to solve real-world problems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((highlight, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-300 bg-white hover:scale-105">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{highlight.title}</h4>
                  <p className="text-sm text-gray-600">{highlight.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-blue-200 to-slate-200 rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Python', 'C', 'JavaScript', 'HTML/CSS', 'SQL'].map(skill => <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-blue-300 hover:bg-blue-50 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'Node.js', 'Express.js', 'Flask', 'Springboot', 'MongoDB', 'NumPy', 'Git'].map(skill => <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-blue-300 hover:bg-blue-50 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Concepts & Certifications</h4>
              <div className="flex flex-wrap gap-2">
                {['AI/ML', 'Cloud Computing', 'REST APIs', 'AWS Certified', 'CI/CD'].map(skill => <span key={skill} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 shadow-sm border border-blue-300 hover:bg-blue-50 transition-colors">
                    {skill}
                  </span>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;