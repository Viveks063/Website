import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Monitor, Server, Smartphone, Database, Gauge } from "lucide-react";
const SkillsSection = () => {
  const skills = [{
    name: "AI/ML",
    level: 90,
    icon: Database,
    color: "text-racing-gold"
  }, {
    name: "Backend",
    level: 88,
    icon: Server,
    color: "text-racing-neon-blue"
  }, {
    name: "Mobile Development",
    level: 80,
    icon: Smartphone,
    color: "text-racing-neon-green"
  }, {
   name: "Frontend",
    level: 85,
    icon: Monitor,
    color: "text-racing-red"
  }];
  const technologies = [{
    category: "DSA",
    items: [],
    color: "racing-red"
  }, {
    category: "Scrapping",
    items: [],
    color: "racing-neon-blue"
  }, {
    category: "Database",
    items: [],
    color: "racing-gold"
  }, {
    category: "Cloud",
    items: [],
    color: "racing-neon-green"
  }];
  return <section className="py-20 px-6 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 carbon-pattern opacity-30"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-racing-red text-racing-red">
            PERFORMANCE SPECS
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            TECHNICAL
            <span className="text-racing-red ml-3">CAPABILITIES</span>
          </h2>
          <div className="w-24 h-1 bg-racing-red mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Racing-grade skills tuned for maximum performance and reliability
          </p>
        </div>

        {/* Performance Meters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => <Card key={skill.name} className="racing-card text-center group">
              <div className="p-6">
                <div className="mb-4">
                  <skill.icon className={`w-10 h-10 mx-auto ${skill.color} group-hover:animate-engine-rev`} />
                </div>
                <h3 className="font-black mb-4">{skill.name}</h3>
                
                {/* Performance Gauge */}
                <div className="relative mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Gauge className={`w-6 h-6 ${skill.color}`} />
                    <span className="ml-2 text-2xl font-black">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" style={{
                background: `linear-gradient(90deg, hsl(var(--racing-red)) 0%, hsl(var(--racing-red)) ${skill.level}%, hsl(var(--muted)) ${skill.level}%, hsl(var(--muted)) 100%)`
              }} />
                </div>
                
                <div className="text-xs text-muted-foreground font-mono">
                  SKILL LEVEL
                </div>
              </div>
            </Card>)}
        </div>

        {/* Technology Stack */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => <Card key={tech.category} className="racing-card">
              <div className="p-6">
                <div className="mb-4">
                  <h3 className={`font-black text-racing-${tech.color} mb-2`}>
                    {tech.category.toUpperCase()}
                  </h3>
                  <div className={`w-8 h-1 bg-racing-${tech.color}`}></div>
                </div>
                
                <div className="space-y-2">
                  {tech.items.map(item => <Badge key={item} variant="secondary" className="w-full justify-start bg-secondary/20 border border-border/50 hover:bg-secondary/40 transition-colors">
                      {item}
                    </Badge>)}
                </div>
              </div>
            </Card>)}
        </div>

        {/* Performance Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            
            
            
            
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;