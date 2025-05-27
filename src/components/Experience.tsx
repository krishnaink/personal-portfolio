
import { Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: "TechStart Inc.",
      position: "Software Development Intern",
      duration: "Jun 2023 - Aug 2023",
      location: "San Francisco, CA",
      description: [
        "Developed and maintained React components for the company's main web application",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and learned best practices for clean, maintainable code",
        "Improved application performance by 15% through code optimization"
      ],
      technologies: ["React", "JavaScript", "Node.js", "Git"]
    },
    {
      company: "University Research Lab",
      position: "Research Assistant",
      duration: "Jan 2023 - May 2023",
      location: "University Campus",
      description: [
        "Assisted in machine learning research project focused on natural language processing",
        "Implemented data preprocessing pipelines and model evaluation scripts",
        "Co-authored research paper on sentiment analysis algorithms",
        "Presented findings at undergraduate research symposium"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Jupyter"]
    },
    {
      company: "Local Business Solutions",
      position: "Freelance Web Developer",
      duration: "Sep 2022 - Dec 2022",
      location: "Remote",
      description: [
        "Built responsive websites for small businesses using modern web technologies",
        "Managed client relationships and project timelines independently",
        "Implemented SEO best practices and improved site loading speeds",
        "Delivered 5 successful projects with 100% client satisfaction"
      ],
      technologies: ["HTML/CSS", "JavaScript", "WordPress", "SEO"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "State University",
      duration: "2020 - 2024",
      location: "City, State",
      details: [
        "Graduated Magna Cum Laude with GPA: 3.8/4.0",
        "Relevant Coursework: Data Structures, Algorithms, Software Engineering, Database Systems, Machine Learning",
        "Dean's List: Fall 2022, Spring 2023, Fall 2023",
        "Senior Capstone: E-commerce Platform with AI-powered Recommendations"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background that shaped my development skills.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8">Education</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
      </div>
    </section>
  );
};

export default Experience;
