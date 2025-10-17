export const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Scrolling Tagline */}
        <div className="mb-8 relative">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-4xl md:text-6xl font-bold opacity-10 mx-8">
              AN IMAGINATIVE BRAIN BEHIND THE DISPLAYS
            </span>
            <span className="text-4xl md:text-6xl font-bold opacity-10 mx-8">
              AN IMAGINATIVE BRAIN BEHIND THE DISPLAYS
            </span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <div>
            <p className="text-2xl font-bold">SPYART</p>
            <p className="text-sm text-white/60">Graphics Inc.</p>
          </div>

          <div className="text-center md:text-right">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} SPYART Graphics Inc. All rights reserved.
            </p>
            <p className="text-white/40 text-xs mt-2">
              Crafted with precision and passion
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};
