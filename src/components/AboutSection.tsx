import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Rocket, Trophy, Settings } from "lucide-react";

import myLogo from '@/assets/photo.png';

const AboutSection = () => {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-racing-red text-racing-red">
            DRIVER PROFILE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ABOUT THE
            <span className="text-racing-red ml-3">PILOT</span>
          </h2>
          <div className="w-24 h-1 bg-racing-red mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image Column */}
          <div className="relative">
            <div 
              className="aspect-square rounded-2xl overflow-hidden racing-glow p-0" 
              style={{  }}
            >
              <img 
                src={myLogo} 
                alt="Your Company Logo" 
                className="w-full h-full object-contain" 
              />
            </div>
            
            {/* Racing Stats Cards */}
            <div className="absolute -right-4 top-4 racing-card w-32 text-center p-3">
              <Trophy className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
              <div className="text-xl font-black text-yellow-400">15</div>
              <div className="text-xs text-muted-foreground">WINS</div>
            </div>
            
            <div className="absolute -left-4 bottom-4 racing-card w-32 text-center p-3">
              <Rocket className="w-6 h-6 text-sky-400 mx-auto mb-2" />
              <div className="text-xl font-black text-sky-400">300+</div>
              <div className="text-xs text-muted-foreground">KM/H</div>
            </div>
          </div>

          {/* Content Column */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-racing-red">
                PRECISION ENGINEERING
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate software developer with expertise in creating innovative applications and AI-powered solutions. With a strong foundation in multiple programming languages and a keen interest in emerging technologies, I strive to build impactful digital experiences.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="racing-card p-4 text-center">
                <Code className="w-8 h-8 text-racing-red mx-auto mb-2" />
                <div className="font-black">FRONTEND</div>
                <div className="text-sm text-muted-foreground">React Specialist</div>
              </Card>
              
              <Card className="racing-card p-4 text-center">
                <Settings className="w-8 h-8 text-sky-400 mx-auto mb-2" />
                <div className="font-black">BACKEND</div>
                <div className="text-sm text-muted-foreground">Node.js Expert</div>
              </Card>
            </div>

            <div className="space-y-3">
              <h4 className="font-black text-racing-red">RACING TECHNOLOGIES</h4>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Kotlin', 'Python', 'AI/ML', 'Web Development', 'JavaScript', 'Firebase', 'Mobile Development', 'Cloud Computing'].map(tech => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/30 border border-racing-red/30 hover:bg-racing-red/20 transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <blockquote className="border-l-4 border-racing-red pl-4 italic text-muted-foreground">
                "Success in racing and coding comes from the same principle: never stop improving, and always push the limits."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;