
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black dark:bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Krishna Inukonda</h3>
            <p className="text-gray-400 dark:text-gray-300 leading-relaxed">
              Computer Science student passionate about artificial intelligence, machine learning, 
              and building innovative software solutions. Ready to make an impact in the tech industry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Projects
              </a>
              <a href="#experience" className="block text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Experience
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400 dark:text-gray-300">
              <p>krishnakanth4477@gmail.com</p>
              <p>240-728-8361</p>
              <p>Fairfax, VA</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/krishnaink" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/in/krishnainukonda" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="mailto:krishnakanth4477@gmail.com" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
