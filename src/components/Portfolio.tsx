import { useState } from "react";
import { Link } from "react-router-dom";
import editorialDesign from "@/assets/editorial-design.jpeg";

const projects = [
  { 
    id: 1, 
    title: "Brand Identity", 
    category: "Graphic Design", 
    color: "from-vibrant-red to-red-600",
    slug: "brand-identity",
    thumbnail: "/projects/new-zana-logo.pdf"
  },
  { 
    id: 2, 
    title: "Motion Reel", 
    category: "Motion Design", 
    color: "from-neon-blue to-cyan-400",
    slug: "motion-reel",
    thumbnail: "/projects/motionreel.mp4"
  },
  { 
    id: 3, 
    title: "Product Launch", 
    category: "Motion Design", 
    color: "from-purple-500 to-pink-500",
    slug: "product-launch",
    thumbnail: "/projects/product-launch.mp4"
  },
  { 
    id: 4, 
    title: "Corporate Branding", 
    category: "Graphic Design", 
    color: "from-orange-500 to-red-500",
    slug: "corporate-branding",
    thumbnail: "/projects/eban-re-branding.pdf"
  },
  { 
    id: 5, 
    title: "Social Campaign", 
    category: "Mixed Media", 
    color: "from-green-500 to-emerald-500",
    slug: "social-campaign"
  },
  { 
    id: 6, 
    title: "Editorial Design", 
    category: "Graphic Design", 
    color: "from-blue-500 to-indigo-500",
    slug: "editorial-design",
    thumbnail: editorialDesign
  },
];

export const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-bold mb-4 text-center">
          Selected <span className="text-gradient-red">Works</span>
        </h2>
        <p className="text-center text-white/60 mb-20 text-lg">
          A glimpse into creative solutions and visual storytelling
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/project/${project.slug}`}
              className="group relative aspect-square overflow-hidden cursor-pointer animate-fade-in block rounded-lg"
              style={{ animationDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Background - thumbnail or gradient */}
              {project.thumbnail ? (
                project.thumbnail.endsWith('.mp4') ? (
                  <video 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                    style={{ transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)" }}
                    src={project.thumbnail}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => e.currentTarget.pause()}
                    onTouchStart={(e) => e.currentTarget.play()}
                  />
                ) : project.thumbnail.endsWith('.pdf') ? (
                  <iframe 
                    src={`${project.thumbnail}#view=FitH`}
                    className="absolute inset-0 w-full h-full pointer-events-none transition-all duration-500"
                    style={{ transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)" }}
                    title={project.title}
                    loading="lazy"
                  />
                ) : (
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-500"
                    style={{ transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)" }}
                    loading="lazy"
                  />
                )
              ) : (
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} transition-all duration-500`}
                  style={{ transform: hoveredId === project.id ? "scale(1.05)" : "scale(1)" }}
                />
              )}
              
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20" />
              
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <p className="text-sm text-white/70 mb-2 tracking-wider uppercase">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
                  {project.title}
                </h3>
              </div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                hoveredId === project.id ? "opacity-100" : "opacity-0"
              }`}>
                <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold">VIEW</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
