import { useEffect, useRef, useState } from "react";

const tools = [
  { name: "Corel Draw", proficiency: 100, color: "vibrant-red" },
  { name: "Adobe Photoshop", proficiency: 70, color: "neon-blue" },
  { name: "After Effects", proficiency: 95, color: "vibrant-red" },
  { name: "VSDC Editor", proficiency: 100, color: "neon-blue" },
];

export const TechArsenal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          My Tech <span className="text-gradient-red">Arsenal</span>
        </h2>
        <p className="text-center text-white/60 mb-20 text-lg">
          The tools that bring ideas to life
        </p>

        <div className="space-y-10">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl md:text-2xl font-bold">{tool.name}</h3>
                <span className="text-lg font-semibold text-white/80">
                  {tool.proficiency}%
                </span>
              </div>
              
              <div className="relative h-3 bg-white/10 overflow-hidden">
                <div
                  className={`absolute inset-y-0 left-0 transition-all duration-1000 ease-out ${
                    tool.color === "vibrant-red" ? "bg-vibrant-red glow-red" : "bg-neon-blue glow-blue"
                  }`}
                  style={{
                    width: isVisible ? `${tool.proficiency}%` : "0%",
                    transitionDelay: `${index * 150 + 200}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-white/70 text-lg">
            Constantly evolving, always learning, forever creating.
          </p>
        </div>
      </div>
    </section>
  );
};
