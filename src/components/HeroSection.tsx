import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target } from "lucide-react";
import heroImage from "@/assets/f1-hero.jpg";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden carbon-pattern">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20" style={{
      backgroundImage: `url(${heroImage})`
    }} />
      
      {/* Speed Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({
        length: 5
      }).map((_, i) => <div key={i} className="speed-line animate-speed-blur" style={{
        top: `${20 + i * 15}%`,
        animationDelay: `${i * 0.5}s`,
        width: '100%'
      }} />)}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-race-start">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="text-racing-red w-8 h-8" />
            <span className="text-racing-silver font-mono text-sm tracking-wider">PORTFOLIO</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-foreground via-racing-red to-foreground bg-clip-text text-transparent">Vivek Suvarna</h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground font-mono tracking-wide">SOFTWARE DEVELOPER</p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-racing-red"></div>
            <Target className="text-racing-red w-6 h-6 animate-engine-rev" />
            <div className="h-px w-16 bg-racing-red"></div>
          </div>
          
          <p className="text-lg mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">Accelerating through code at breakneck speeds.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Viveks063" target="_blank" rel="noopener noreferrer">
            <Button variant="racing" size="lg" className="group">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
            <a href="resume.html" target="_blank">
  <Button variant="racingOutline" size="lg">
    Download CV
  </Button>
</a>
          </div>
        </div>
      </div>

      {/* Racing Stats */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex gap-8 text-center">
          <div className="racing-card border-none bg-background/10 backdrop-blur-sm">
            <div className="text-2xl font-black text-racing-red">Projects</div>
            <div className="text-xs text-muted-foreground font-mono">
          </div>
          </div>
          <div className="racing-card border-none bg-background/10 backdrop-blur-sm">
            <div className="text-2xl font-black text-racing-neon-blue">Skills</div>
            <div className="text-xs text-muted-foreground font-mono">
          </div>
          </div>
          <div className="racing-card border-none bg-background/10 backdrop-blur-sm">
            <div className="text-2xl font-black text-racing-gold">99%</div>
            <div className="text-xs text-muted-foreground font-mono">UPTIME</div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;