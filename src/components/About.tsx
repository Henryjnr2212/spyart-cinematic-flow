import { useEffect, useRef, useState } from "react";

export const About = () => {
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

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">
          About <span className="text-gradient-blue">SPYART</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">Design Philosophy</h3>
              <div className="w-12 h-1 bg-vibrant-red" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Every pixel tells a story. I believe in creating designs that don't just look good—they communicate, 
              inspire, and leave lasting impressions. Motion brings static to life, and precision turns ideas into art.
            </p>
          </div>

          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">My Approach</h3>
              <div className="w-12 h-1 bg-neon-blue" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I merge creativity with strategy. Understanding your vision, analyzing your audience, 
              and crafting solutions that balance aesthetics with functionality. From concept to completion, 
              every project is handled with meticulous attention to detail.
            </p>
          </div>

          <div 
            className={`transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="mb-4">
              <h3 className="text-2xl font-bold mb-2">The Experience</h3>
              <div className="w-12 h-1 bg-vibrant-red" />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Years of crafting visual narratives across multiple industries. From brand identities to motion graphics, 
              I've helped businesses and creators elevate their presence with designs that resonate and perform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
