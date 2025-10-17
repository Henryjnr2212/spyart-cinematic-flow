import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Creative Director, Innovate Co.",
    content: "SPYART transformed our brand identity with incredible precision and creativity. The motion graphics brought our vision to life in ways we never imagined. Simply outstanding work!",
    rating: 5,
    featured: true,
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "CEO, TechStart",
    content: "Professional, creative, and reliable. SPYART's attention to detail is unmatched.",
    rating: 5,
    featured: false,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Marketing Lead, Bright Future",
    content: "The visual storytelling and design quality exceeded all expectations. Highly recommend!",
    rating: 5,
    featured: false,
  },
  {
    id: 4,
    name: "David Kim",
    role: "Founder, Creative Labs",
    content: "Exceptional talent with a unique eye for motion design. A true professional.",
    rating: 5,
    featured: false,
  },
];

export const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const featured = testimonials.find((t) => t.featured);
  const others = testimonials.filter((t) => !t.featured);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Client <span className="text-gradient-blue">Voices</span>
        </h2>
        <p className="text-center text-muted-foreground mb-20 text-lg">
          What people say about working with SPYART
        </p>

        {/* Featured Testimonial */}
        {featured && (
          <div
            className={`mb-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="relative bg-black text-white p-12 md:p-16 glow-red">
              <div className="absolute top-8 left-8 text-6xl opacity-20">"</div>
              
              <div className="relative z-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(featured.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-vibrant-red text-vibrant-red" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl leading-relaxed mb-8">
                  {featured.content}
                </p>
                
                <div>
                  <p className="font-bold text-lg">{featured.name}</p>
                  <p className="text-white/70">{featured.role}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {others.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`bg-secondary p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-neon-blue text-neon-blue" />
                ))}
              </div>
              
              <p className="text-sm leading-relaxed mb-6 text-foreground/80">
                {testimonial.content}
              </p>
              
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

