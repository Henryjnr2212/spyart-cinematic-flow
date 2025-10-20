import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectData: Record<string, {
  title: string;
  category: string;
  description: string;
  files: Array<{ type: 'pdf' | 'video'; url: string; label?: string }>;
}> = {
  "brand-identity": {
    title: "Brand Identity - Zana",
    category: "Graphic Design",
    description: "A comprehensive brand identity project showcasing creative vision and design excellence.",
    files: [
      { type: 'pdf', url: '/projects/new-zana-logo.pdf', label: 'Zana Logo Design' }
    ]
  },
  "motion-reel": {
    title: "Motion Reel",
    category: "Motion Design",
    description: "A showcase of motion graphics and animation work demonstrating creativity and technical skill.",
    files: [
      { type: 'video', url: '/projects/motionreel.mp4', label: 'Motion Reel' },
      { type: 'video', url: '/projects/motionreel1.mp4', label: 'Motion Reel 1' }
    ]
  },
  "product-launch": {
    title: "Product Launch",
    category: "Motion Design",
    description: "Dynamic product launch videos designed to captivate and engage audiences.",
    files: [
      { type: 'video', url: '/projects/product-launch.mp4', label: 'Product Launch' },
      { type: 'video', url: '/projects/productlaunch1.mp4', label: 'Product Launch 1' },
      { type: 'video', url: '/projects/productlaunch2.mp4', label: 'Product Launch 2' }
    ]
  },
  "corporate-branding": {
    title: "Corporate Branding - EBAN RE.",
    category: "Graphic Design",
    description: "Professional corporate branding solution for EBAN RE. PVT LTD.",
    files: [
      { type: 'pdf', url: '/projects/eban-re-branding.pdf', label: 'EBAN RE. Branding' }
    ]
  },
  "editorial-design": {
    title: "Editorial Design - Content Box",
    category: "Graphic Design",
    description: "Logo usage and brand guidelines for Content Box.",
    files: [
      { type: 'pdf', url: '/projects/content-box-logo-guide.pdf', label: 'Content Box Logo Guide' }
    ]
  },
  "social-campaign": {
    title: "Social Campaign",
    category: "Mixed Media",
    description: "Coming soon - an innovative social media campaign showcasing creative storytelling.",
    files: []
  }
};

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? projectData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link to="/">
            <Button variant="outline">Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="py-8 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
            Back to Portfolio
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <p className="text-neon-blue text-sm uppercase tracking-wider mb-4">
              {project.category}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              {project.title}
            </h1>
            <p className="text-white/70 text-lg max-w-3xl">
              {project.description}
            </p>
          </div>

          {/* Project Files */}
          <div className="space-y-12">
            {project.files.length === 0 ? (
              <div className="bg-white/5 p-12 text-center">
                <p className="text-white/50">Content coming soon...</p>
              </div>
            ) : (
              project.files.map((file, index) => (
                <div key={index} className="space-y-4">
                  {file.label && (
                    <h3 className="text-2xl font-semibold">{file.label}</h3>
                  )}
                  
                  {file.type === 'video' ? (
                    <video 
                      controls 
                      className="w-full max-w-4xl mx-auto bg-black"
                      src={file.url}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div className="bg-white/5 max-w-5xl mx-auto overflow-hidden">
                      <div className="flex items-center justify-between p-4 bg-white/10">
                        <p className="text-white/70 font-semibold">PDF Document</p>
                        <a 
                          href={file.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-neon-blue hover:underline flex items-center gap-2"
                        >
                          Open in new tab →
                        </a>
                      </div>
                      <iframe 
                        src={file.url}
                        className="w-full h-[800px] bg-white"
                        title={file.label || 'PDF Document'}
                      />
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
