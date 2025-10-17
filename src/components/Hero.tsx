import { useEffect, useState } from "react";
import designerPortrait from "@/assets/designer-portrait.jpg";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 parallax"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <img
          src={designerPortrait}
          alt="SPYART Designer"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 animate-fade-in">
        <div className="mb-6">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-2">
            SPYART
          </h1>
          <p className="text-2xl md:text-4xl font-light text-white/80">
            Graphics Inc.
          </p>
        </div>
        
        <div className="relative">
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            An Imaginative Brain
            <span className="text-gradient-red font-semibold"> Behind </span>
            the Displays
          </p>
        </div>

        {/* Accent Line */}
        <div className="mt-12 mx-auto w-24 h-1 bg-gradient-to-r from-vibrant-red to-neon-blue glow-red" />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};
