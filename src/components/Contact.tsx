import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Linkedin, label: "Behance", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:contact@spyart.com" },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Let's <span className="text-gradient-blue">Connect</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 text-lg">
          Have a project in mind? Let's bring it to life together.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-secondary border-0"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-secondary border-0"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-secondary border-0 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-black text-white hover:bg-black/90 h-12 text-lg font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center animate-fade-in" style={{ animationDelay: "200ms" }}>
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                Whether you need branding, motion graphics, or visual storytelling, 
                I'm here to help turn your vision into reality. Let's create something amazing.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Follow SPYART</h3>
              <div className="flex gap-4">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-black text-white flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
