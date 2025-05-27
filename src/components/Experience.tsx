
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "George Mason University",
      position: "Undergraduate Teaching Assistant",
      duration: "August 2024 - May 2025",
      location: "Fairfax, VA",
      description: [
        "Guided over 200 students in understanding key object-oriented programming concepts such as inheritance, polymorphism, and encapsulation, improving overall student success rates by 15% based on exam scores",
        "Provided assistance during lab sessions for students to help enhance their understanding of the coursework",
        "Collaborated with multiple Graduate Teaching Assistants to help create thoughtful review sessions and practice exercises that increased total class wide engagement by 20%, as measured by attendance and participation"
      ],
      technologies: ["Java", "Python", "Teaching", "OOP Concepts"]
    },
    {
      company: "Citi",
      position: "Software Engineering Intern",
      duration: "April 2025 - May 2025",
      location: "Remote",
      description: [
        "Built a real-time stock tracker in JavaFX with Gradle and YahooAPI, storing 3,600+ Dow Jones prices hourly",
        "Designed a line graph which updates every 5 seconds (17.2k times daily) to display prices in a readable format"
      ],
      technologies: ["Java", "JavaFX", "Gradle", "Yahoo API", "Real-time Systems"]
    },
    {
      company: "Jay Arts Collections",
      position: "UI/UX Designer",
      duration: "December 2024 - January 2025",
      location: "Fairfax, VA",
      description: [
        "Worked with Jay Arts Collections to manage an extensive catalog of over 100+ products by creating and refining existing visual design features for products (buttons, layout, typography) for a more captivating user experience",
        "Leveraged customer analytics to design promotional content, resulting in increased website interaction and sales"
      ],
      technologies: ["UI/UX Design", "Customer Analytics", "Visual Design", "Typography"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "George Mason University",
      duration: "2021 - May 2025",
      location: "Fairfax, VA",
      details: [
        "GPA: 3.56/4.0",
        "Relevant Coursework: Artificial Intelligence, Software Engineering, Operating Systems, Data Structures and Algorithms, Database Systems, Machine Learning, Computer Networks, Secure Programming and Systems, Comparative Programming",
        "Focus on AI/ML and full-stack development",
        "Active participant in computer science community and technical projects"
      ]
    }
  ];

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      description: "Foundational understanding of AWS Cloud concepts, services, and terminology"
    },
    {
      title: "Stanford Machine Learning Specialization",
      issuer: "Stanford University",
      description: "Comprehensive training in machine learning algorithms and applications"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey from teaching assistant to software engineering intern, combined with comprehensive education and certifications.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{exp.position}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div>
                      <CardTitle className="text-xl text-gray-900 mb-1">{edu.degree}</CardTitle>
                      <p className="text-lg font-semibold text-blue-600">{edu.school}</p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 md:text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="h-4 w-4" />
                        {edu.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {edu.location}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {edu.details.map((detail, i) => (
                      <li key={i} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2 mt-1.5">•</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-lg text-gray-900">{cert.title}</CardTitle>
                  <p className="text-blue-600 font-semibold">{cert.issuer}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
