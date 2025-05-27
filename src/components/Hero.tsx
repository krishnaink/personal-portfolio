
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleResumeDownload = () => {
    // Create a link element to trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/d0404044-a653-4c69-9d1f-ed9bf73f2fc2.png'; // You can replace this with your actual resume PDF
    link.download = 'Krishna_Inukonda_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-25 to-slate-100 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="animate-fade-in">
          <img
            src="/lovable-uploads/d0404044-a653-4c69-9d1f-ed9bf73f2fc2.png"
            alt="Krishna Inukonda Profile"
            className="w-32 h-32 rounded-full mx-auto mb-8 border-4 border-blue-200 shadow-lg object-cover"
          />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
            Krishna <span className="text-blue-600">Inukonda</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Software Developer & Computer Science Student
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Computer Science student at George Mason University with experience in full-stack development, 
            machine learning, and artificial intelligence. Passionate about creating innovative 
            solutions and building scalable applications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg"
              onClick={handleResumeDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/krishnaink" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://linkedin.com/in/krishnainukonda" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:krishnakanth4477@gmail.com" className="text-gray-500 hover:text-blue-600 transition-colors duration-300">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
