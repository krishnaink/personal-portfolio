
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <img
            src="/lovable-uploads/cbe67b38-e099-4d92-ba73-355746fc8f70.png"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Aditya Sri <span className="text-blue-600">Inukonda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Developer & Computer Science Graduate
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Recent George Mason University graduate with experience in full-stack development, 
            machine learning, and building scalable applications. Passionate about creating innovative 
            solutions and optimizing user experiences.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button variant="outline" className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/adityasri" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/aditya-sri-inukonda" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:adityasriinukonda@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
