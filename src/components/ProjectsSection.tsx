import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Zap, Award, Rocket } from "lucide-react";
import dashboardImage from "@/assets/yt.jpg";
import dashboardImage1 from "@/assets/esp.jpg";
import dashboardImage2 from "@/assets/recognition.jpg";
import dashboardImage3 from "@/assets/movie.jpg";
import dashboardImage4 from "@/assets/house.jpg";
import dashboardImage5 from "@/assets/lstm.jpg";
import dashboardImage6 from "@/assets/fd.jpg";
import dashboardImage7 from "@/assets/recognition.jpg";
import dashboardImage8 from "@/assets/math.jpg";
import dashboardImage9 from "@/assets/temp.jpg";
import dashboardImage10 from "@/assets/weather.jpg";
import dashboardImage11 from "@/assets/fit.jpg";
import dashboardImage12 from "@/assets/railway.jpg";
import dashboardImage13 from "@/assets/music.jpg";
import dashboardImage14 from "@/assets/Alumnit.jpg";
import dashboardImage15 from "@/assets/todo.jpg";
import dashboardImage17 from "@/assets/chat.jpg";
import dashboardImage18 from "@/assets/Blog.jpg";
import dashboardImage19 from "@/assets/url.jpg";
import dashboardImage20 from "@/assets/speaker.jpg";
import dashboardImage16 from "@/assets/Age.jpg";





const ProjectsSection = () => {
  const projects = [
  // AI/ML Projects
  {
    id: 1,
    title: 'Youtube Video Downloader',
    description: 'AI-powered tool to download YouTube videos with automatic quality selection.',
    image: dashboardImage,
    technologies: ['Python', 'AI', 'YouTube API'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 2,
    title: 'Spanish Chatbot',
    description: 'Conversational AI chatbot trained specifically for Spanish language interactions.',
    image: dashboardImage1,
    technologies: ['Python', 'NLP', 'TensorFlow'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },
  {
    id: 3,
    title: 'Image Captioning with Blip',
    description: 'Advanced image captioning system using BLIP model for accurate descriptions.',
    image: dashboardImage2,
    technologies: ['Python', 'BLIP', 'Computer Vision'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Award,
    color: 'racing-gold'
  },
  {
    id: 4,
    title: 'Movie Recommendation',
    description: 'Intelligent movie recommendation system based on user preferences and behavior.',
    image: dashboardImage3,
    technologies: ['Python', 'Machine Learning', 'Collaborative Filtering'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 5,
    title: 'House Price Prediction',
    description: 'ML model to predict house prices based on location, features, and market trends.',
    image: dashboardImage4,
    technologies: ['Python', 'Regression', 'Scikit-learn'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: {users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },
  {
    id: 6,
    title: 'Next Word Prediction using LSTM',
    description: 'Deep learning model using LSTM networks for intelligent text completion.',
    image: dashboardImage5,
    technologies: ['Python', 'LSTM', 'Keras'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Award,
    color: 'racing-gold'
  },
  {
    id: 7,
    title: 'Face Detection Model',
    description: 'Real-time face detection system with high accuracy and performance.',
    image: dashboardImage6,
    technologies: ['Python', 'OpenCV', 'Deep Learning'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 8,
    title: 'Real Time Image Captioning',
    description: 'Live image captioning system that generates descriptions in real-time.',
    image: dashboardImage7,
    technologies: ['Python', 'CNN', 'Real-time Processing'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },
  {
    id: 9,
    title: 'Gesture Math Solver',
    description: 'AI system that solves mathematical equations drawn using hand gestures.',
    image: dashboardImage8,
    technologies: ['Python', 'Computer Vision', 'Gesture Recognition'],
    category: 'AI/ML',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Award,
    color: 'racing-gold'
  },

  // Android Projects
  {
    id: 10,
    title: 'Temperature Converter',
    description: 'A simple and efficient temperature conversion app for Android.',
    image: dashboardImage9,
    technologies: ['Android', 'Java/Kotlin'],
    category: 'Android',
    status: 'Completed',
    metrics: {users: "N/A", speed: "N/A", uptime: "N/A"  },
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 11,
    title: 'Weather App',
    description: 'Real-time weather forecasting app with location-based updates.',
    image: dashboardImage10,
    technologies: ['Android', 'Java', 'Weather API'],
    category: 'Android',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },
  {
    id: 12,
    title: 'Fitness Tracking App',
    description: 'Comprehensive fitness app with workout plans and progress tracking.',
    image: dashboardImage11,
    technologies: ['Android', 'Kotlin', 'SQLite'],
    category: 'Android',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Award,
    color: 'racing-gold'
  },
  {
    id: 13,
    title: 'Railway Ticket App',
    description: 'Mobile application for booking and managing railway tickets.',
    image: dashboardImage12,
    technologies: ['Android', 'Java', 'Firebase'],
    category: 'Android',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 14,
    title: 'Music Player App',
    description: 'Feature-rich music player with playlist management and audio controls.',
    image: dashboardImage13,
    technologies: ['Android', 'Kotlin', 'MediaPlayer API'],
    category: 'Android',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },
  {
    id: 15,
    title: 'Alumnit',
    description: 'Social networking platform where alumni can connect and interact with each other.',
    image: dashboardImage14,
    technologies: ['Android', 'Java', 'Firebase', 'Social Features'],
    category: 'Android',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Award,
    color: 'racing-gold'
  },

  // Web Projects
  {
    id: 16,
    title: 'To Do List',
    description: 'Task management application to organize and track daily activities.',
    image: dashboardImage15,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 17,
    title: 'Age Calculator',
    description: 'Simple web application to calculate age based on date of birth.',
    image: dashboardImage16,
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'Web',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A" },
    icon: Rocket,
    color: 'racing-neon-blue'
  },

  //Java Projects
  {
    id: 18,
    title: 'To Do List API',
    description: 'To-Do List API with Spring Boot with full CRUD functionality and in memory database.',
    image: dashboardImage15,
    technologies: ['Java','Spring Boot', 'Spring Data JPA', 'H2 In-Memory Database'],
    category: 'Backend REST API',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
    {
    id: 19,
    title: 'Microphone to Speaker',
    description: 'Capturing the mic --> Sending data --> Playing audio',
    image: dashboardImage20,
    technologies: ['Java','Spring Boot','Maven'],
    category: 'Backend Application',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 20,
    title: 'Real-Time Chat Application',
    description: 'This application allows multiple users to join different chat rooms and exchange messages in real-time using WebSockets.',
    image: dashboardImage17,
    technologies: ['Java','Spring Boot','Spring WebSocket', 'Maven'],
    category: 'Client-Server Application',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 21,
    title: 'URL shortener service',
    description: 'A fully functional URL shortener service with a web UI, built using Java and Spring Boot.',
    image: dashboardImage19,
    technologies: ['Java','Spring Boot','Spring Data JPA', 'Spring Security'],
    category: ' Backend REST API',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  {
    id: 22,
    title: 'Blog API with Spring Boot ',
    description: 'The project includes full CRUD (Create, Read, Update, Delete) functionality for posts and comments, secured by a modern JWT-based authentication system.',
    image: dashboardImage18,
    technologies: ['Java','Spring Boot','Spring Data JPA','Spring Security'],
    category: ' Backend REST API',
    status: 'Completed',
    metrics: { users: "N/A", speed: "N/A", uptime: "N/A"},
    icon: Zap,
    color: 'racing-red'
  },
  
];

  return (
    <section className="py-20 px-6 bg-secondary/20 relative overflow-hidden">
      {/* Speed Lines Background */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="speed-line animate-speed-blur opacity-10"
            style={{
              top: `${30 + i * 20}%`,
              animationDelay: `${i * 1.5}s`,
              width: '100%'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-racing-red text-racing-red">
            RACE RESULTS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            CHAMPIONSHIP
            <span className="text-racing-red ml-3">PROJECTS</span>
          </h2>
          <div className="w-24 h-1 bg-racing-red mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Projects engineered for peak performance and user experience
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={project.id} className="racing-card group overflow-hidden">
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Status Badge */}
                <Badge 
                  className={`absolute top-4 right-4 bg-racing-${project.color} text-primary-foreground`}
                >
                  {project.status}
                </Badge>
                
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <project.icon className={`w-6 h-6 text-racing-${project.color}`} />
                </div>
              </div>

              <div className="p-6">
                {/* Project Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-black mb-2 group-hover:text-racing-red transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {project.category}
                  </Badge>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Performance Metrics */}
                <div className="grid grid-cols-3 gap-2 mb-4">
                  <div className="text-center p-2 rounded bg-background/50">
                    <div className={`text-sm font-black text-racing-${project.color}`}>
                      {project.metrics.users}
                    </div>
                    <div className="text-xs text-muted-foreground"></div>
                  </div>
                  <div className="text-center p-2 rounded bg-background/50">
                    <div className={`text-sm font-black text-racing-${project.color}`}>
                      {project.metrics.speed}
                    </div>
                    <div className="text-xs text-muted-foreground"></div>
                  </div>
                  <div className="text-center p-2 rounded bg-background/50">
                    <div className={`text-sm font-black text-racing-${project.color}`}>
                      {project.metrics.uptime}
                    </div>
                    <div className="text-xs text-muted-foreground"></div>
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="secondary"
                        className="text-xs bg-secondary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <Button variant="racing" size="lg">
            Podium
            <Zap className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;