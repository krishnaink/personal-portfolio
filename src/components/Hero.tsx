
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Alex <span className="text-blue-600">Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full-Stack Developer & CS Graduate
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions and building scalable applications. 
            Recently graduated with a Computer Science degree and ready to make an impact in tech.
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
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
