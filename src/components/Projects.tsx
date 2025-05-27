
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: "ResumAid",
      description: "Developed a full-stack web application that interviews students to help enhance their resumes based on job listings. Leveraged Firebase for user authentication and efficiently managed up to 200 interview questions per user.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=500&h=300&fit=crop",
      technologies: ["Python", "React", "REST API", "Firebase", "Generative AI"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Netflix Movie Recommender AI",
      description: "Created a movie recommender system using Pandas and Sci-kit Learn to suggest related movies based on user search. Processed 5000+ films from TMDB database using cosine similarity vectorization.",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=300&fit=crop",
      technologies: ["Python", "Kaggle", "NumPy", "Streamlit", "Sci-kit Learn"],
      github: "#",
      demo: "#",
      featured: true
    },
    {
      title: "Real-time Stock Tracker",
      description: "Built during Citi internship - real-time stock monitoring system that tracks 3,600+ Dow Jones prices per hour with live updates every 5 seconds using JavaFX and Yahoo API.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&h=300&fit=crop",
      technologies: ["Java", "JavaFX", "Gradle", "Yahoo API"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Virtual Machine Scheduler",
      description: "Developed a CPU scheduler for a VM, implemented process creation through linked lists and bitwise operators. Collaborated in a large code-base to complete key scheduler functions.",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&h=300&fit=crop",
      technologies: ["C", "Operating Systems", "Data Structures", "Process Management"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Jay Arts Collections UI/UX",
      description: "Worked with Jay Arts Collections to manage an extensive catalog of over 100+ products by creating and refining existing visual design features for a more captivating user experience.",
      image: "https://images.unsplash.com/photo-1551021794-03be4ddaf67d?w=500&h=300&fit=crop",
      technologies: ["UI/UX Design", "Customer Analytics", "Visual Design", "Typography"],
      github: "#",
      demo: "#",
      featured: false
    },
    {
      title: "Machine Learning Portfolio",
      description: "Collection of AI and machine learning projects demonstrating proficiency in various algorithms and techniques, including supervised and unsupervised learning models.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      technologies: ["Python", "Machine Learning", "AI", "Data Analysis"],
      github: "#",
      demo: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my technical projects ranging from AI-powered applications to full-stack web development 
            and real-time systems programming.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-blue-300 bg-white hover:scale-[1.02]">
              <div className="relative group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full">
                    <a href={project.github} className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 rounded-full">
                    <a href={project.demo} className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-blue-300 bg-white hover:scale-105">
                <div className="relative group">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-800">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-blue-100 text-blue-700 border-blue-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-full">
                      <a href={project.github}>
                        <Github className="h-3 w-3" />
                      </a>
                    </Button>
                    <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700 rounded-full">
                      <a href={project.demo}>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
