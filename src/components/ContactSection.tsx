import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Send, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { useToast } from "@/hooks/use-toast";
const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_02hb1p7',
        'template_96wsj95',
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          message: formData.message,
        },
        'Mu53zh7qStDe0FZdf'
      );

      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you within 24 hours.",
      });

      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };
  return <section className="py-20 px-6 relative overflow-hidden">
      {/* Checkered Flag Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 h-full">
          {Array.from({
          length: 400
        }).map((_, i) => <div key={i} className={`${Math.floor(i / 20) % 2 === i % 2 ? 'bg-foreground' : 'bg-transparent'}`} />)}
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-racing-red text-racing-red">
            FINISH LINE
          </Badge>
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            START YOUR
            <span className="text-racing-red ml-3">ENGINES</span>
          </h2>
          <div className="w-24 h-1 bg-racing-red mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to accelerate your project? Let's discuss how we can cross the finish line together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="racing-card">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-racing-red/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-racing-red" />
                  </div>
                  <div>
                    <h3 className="font-black">EMAIL</h3>
                    <p className="text-muted-foreground">viveksuvarna063@gmail.com</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="racing-card">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-racing-neon-blue/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-racing-neon-blue" />
                  </div>
                  <div>
                    <h3 className="font-black">PHONE</h3>
                    <p className="text-muted-foreground">+91 7756029366</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="racing-card">
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-racing-gold/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-racing-gold" />
                  </div>
                  <div>
                    <h3 className="font-black">LOCATION</h3>
                    <p className="text-muted-foreground">Mumbai, India</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="font-black text-racing-red">FOLLOW THE RACE</h3>
              <div className="flex gap-4">
                <a href="https://github.com/Viveks063" target="_blank" rel="noopener noreferrer">
      <Button variant="racingOutline" size="sm">
        <Github className="w-4 h-4" />
      </Button>
    </a>
                <a href="https://www.linkedin.com/in/vivek-suvarna-7b7047259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BmC4vWKThR7Wklx6grpyBEA%3D%3D" target="_blank" rel="noopener noreferrer">
      <Button variant="racingOutline" size="sm">
        <Linkedin className="w-4 h-4" />
      </Button>
    </a>

                <Button variant="racingOutline" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="racing-card">
              <div className="p-8">
                <h3 className="text-2xl font-black mb-6 text-racing-red">
                  LET'S COLLABORATE
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-black mb-2">
                        FIRST NAME
                      </label>
                      <Input 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name" 
                        className="border-border/50 focus:border-racing-red transition-colors" 
                        required 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-black mb-2">
                        LAST NAME
                      </label>
                      <Input 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name" 
                        className="border-border/50 focus:border-racing-red transition-colors" 
                        required 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-black mb-2">
                      EMAIL ADDRESS
                    </label>
                    <Input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com" 
                      className="border-border/50 focus:border-racing-red transition-colors" 
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-black mb-2">
                      PROJECT DETAILS
                    </label>
                    <Textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project requirements, timeline, and goals..." 
                      rows={5} 
                      className="border-border/50 focus:border-racing-red transition-colors resize-none" 
                      required 
                    />
                  </div>

                  <Button variant="racing" size="lg" className="w-full" type="submit" disabled={isSubmitting}>
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'LAUNCHING...' : 'LAUNCH PROJECT'}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Response Time */}
        <div className="text-center mt-12">
          <div className="racing-card inline-block border-none bg-background/50 backdrop-blur-sm">
            <div className="flex items-center gap-4">
              <div className="text-2xl font-black text-racing-neon-green">24H</div>
              <div className="text-sm text-muted-foreground">
                Average response time
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;