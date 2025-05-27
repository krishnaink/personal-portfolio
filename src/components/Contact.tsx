
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and AI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Let's Connect</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether you're looking for a developer to join your team, have a project in mind, 
              or just want to network, I'd love to hear from you. Here's how you can reach me:
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-blue-200 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-600">krishnakanth4477@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-200 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-600">240-728-8361</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-200 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-800">Location</p>
                  <p className="text-gray-600">Fairfax, VA</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="shadow-lg border-blue-300 bg-white">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Input placeholder="First Name" className="w-full border-blue-300 focus:border-blue-600 rounded-lg" />
                  </div>
                  <div>
                    <Input placeholder="Last Name" className="w-full border-blue-300 focus:border-blue-600 rounded-lg" />
                  </div>
                </div>
                
                <div>
                  <Input type="email" placeholder="Email Address" className="w-full border-blue-300 focus:border-blue-600 rounded-lg" />
                </div>
                
                <div>
                  <Input placeholder="Subject" className="w-full border-blue-300 focus:border-blue-600 rounded-lg" />
                </div>
                
                <div>
                  <Textarea 
                    placeholder="Your message..." 
                    className="w-full min-h-[120px] resize-none border-blue-300 focus:border-blue-600 rounded-lg"
                  />
                </div>
                
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border-blue-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Ready to work together?</h3>
            <p className="text-gray-600 mb-6">
              I'm currently available for internships, full-time opportunities, and exciting projects. 
              Let's discuss how we can bring your ideas to life!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
