import React, { useEffect, useRef } from 'react';
import { Compass, BookOpen, Scroll, ChevronDown, Sparkles, Award, Box } from 'lucide-react';
import { playMuseumChime, playPaperRustle } from '../utils/audio';
import { HERO_TAGLINE } from '../data/sourceNarrative';

interface HeroProps {
  onBeginJourney: () => void;
  audioEnabled: boolean;
  reduceMotion: boolean;
  onOpenArtifact: (id: string) => void;
  onNavigateSection?: (id: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onBeginJourney,
  audioEnabled,
  reduceMotion,
  onOpenArtifact,
  onNavigateSection
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Subtle animated canvas for floating ink particles and historical cartographic grid
  useEffect(() => {
    if (reduceMotion) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Ink particles and antique dust motes
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      type: 'ink' | 'gold' | 'paper';
      rotation: number;
      rotSpeed: number;
    }> = [];

    const numParticles = 35;
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 4 + 1.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: -Math.random() * 0.5 - 0.2, // drifting upwards
        opacity: Math.random() * 0.6 + 0.2,
        type: Math.random() > 0.6 ? 'gold' : Math.random() > 0.3 ? 'ink' : 'paper',
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.02
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle nautical rhumb lines (cartographic compass lines)
      ctx.save();
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.04)';
      ctx.lineWidth = 1;
      const centerX = width * 0.5;
      const centerY = height * 0.45;
      for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 8) {
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(
          centerX + Math.cos(angle) * Math.max(width, height),
          centerY + Math.sin(angle) * Math.max(width, height)
        );
        ctx.stroke();
      }
      ctx.restore();

      // Render floating particles
      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotSpeed;

        if (p.y < -20) {
          p.y = height + 20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'gold') {
          ctx.fillStyle = `rgba(212, 175, 55, ${p.opacity * 0.7})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.type === 'paper') {
          // Floating tiny parchment scrap
          ctx.fillStyle = `rgba(235, 217, 180, ${p.opacity * 0.5})`;
          ctx.fillRect(-p.size * 1.5, -p.size, p.size * 3, p.size * 2);
          ctx.strokeStyle = `rgba(180, 140, 80, ${p.opacity * 0.3})`;
          ctx.strokeRect(-p.size * 1.5, -p.size, p.size * 3, p.size * 2);
        } else {
          // Sepia ink dot
          ctx.fillStyle = `rgba(40, 25, 15, ${p.opacity * 0.8})`;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [reduceMotion]);

  const handleStart = () => {
    playMuseumChime(audioEnabled);
    onBeginJourney();
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-16 overflow-hidden bg-gradient-to-b from-[#fbf8f1] via-[#f7f2e6] to-[#f4ede0] border-b border-[#c8b38d]/40"
    >
      {/* Background Cartographic Canvas */}
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-40 z-0" 
      />

      {/* Decorative Vintage Compass Rose Background Accent */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[540px] md:w-[720px] h-[340px] sm:h-[540px] md:h-[720px] rounded-full border border-[#c8b38d]/30 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, rgba(237, 226, 206, 0.4) 60%, rgba(244, 237, 224, 0.8) 100%)'
        }}
      >
        <div className="w-full h-full border border-dashed border-[#c8b38d]/35 rounded-full animate-spin-slow" />
      </div>

      {/* Floating Historic Elements: Hand-lettered Excerpt Floating Badges */}
      <div className="absolute top-12 left-4 sm:left-12 max-w-[200px] hidden md:block text-left opacity-90 hover:opacity-100 transition-opacity">
        <div 
          onClick={() => onOpenArtifact('amor-patrio')}
          className="p-3 rounded-lg bg-[#fffdfa]/95 border border-[#c8b38d] shadow-md cursor-pointer group"
        >
          <div className="text-[10px] uppercase tracking-widest text-[#7a5513] font-semibold flex items-center gap-1">
            <Scroll className="w-3 h-3 text-[#966c1e]" />
            Barcelona, 1882
          </div>
          <p className="text-xs font-serif italic text-[#4a3828] mt-1 line-clamp-2">
            "Amor Patrio — Pen Name: Laong Laan"
          </p>
          <span className="text-[9px] text-[#825c14] font-medium group-hover:underline mt-1 block">
            Inspect Manuscript →
          </span>
        </div>
      </div>

      <div className="absolute top-20 right-4 sm:right-12 max-w-[210px] hidden md:block text-right opacity-90 hover:opacity-100 transition-opacity">
        <div 
          onClick={() => onOpenArtifact('noli-me-tangere')}
          className="p-3 rounded-lg bg-[#fffdfa]/95 border border-[#c8b38d] shadow-md cursor-pointer group"
        >
          <div className="text-[10px] uppercase tracking-widest text-[#7a5513] font-semibold flex items-center justify-end gap-1">
            Berlin, 1887
            <BookOpen className="w-3 h-3 text-[#966c1e]" />
          </div>
          <p className="text-xs font-serif italic text-[#4a3828] mt-1 line-clamp-2">
            "Noli Me Tangere — Berliner Buchdruckerei"
          </p>
          <span className="text-[9px] text-[#825c14] font-medium group-hover:underline mt-1 block">
            Inspect First Edition →
          </span>
        </div>
      </div>

      {/* Center Main Stage */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Curatorial Header Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eee4d2] border border-[#c5ad88] shadow-xs mb-6 text-xs text-[#6d460d] tracking-widest uppercase font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-[#825c14]" />
          <span>Interactive Digital History Museum & Archive</span>
        </div>

        {/* José Rizal historical portrait */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-[3px] border-[#c59b27] shadow-[0_8px_32px_rgba(74,48,24,0.25)] ring-4 ring-[#c59b27]/20 mx-auto bg-[#ede2cc]">
            <img
              src={`${import.meta.env.BASE_URL}images/jose-rizal.jpg`}
              alt="José Rizal — historical portrait"
              className="w-full h-full object-cover object-top"
              width={208}
              height={208}
              loading="eager"
            />
          </div>
          <p className="mt-3 text-center text-base text-[#5c4636] font-serif">
            Dr. José Protacio Rizal Mercado y Alonso Realonda · 1861–1896
          </p>
        </div>

        {/* Main Title: JOSE RIZAL */}
        <h1 className="font-cinzel text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-widest text-[#2a170a] drop-shadow-xs mb-3">
          JOSE RIZAL
        </h1>

        {/* Subtitle */}
        <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-[#7a5513] font-semibold tracking-wide max-w-2xl mb-6">
          Education, Travels, and the Propaganda Movement
        </h2>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center gap-3 w-48 mb-6">
          <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#bfa77e]" />
          <div className="w-2.5 h-2.5 rotate-45 border border-[#bfa77e] bg-[#c59b27]/30" />
          <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#bfa77e]" />
        </div>

        {/* Description as requested */}
        <p className="text-base sm:text-lg md:text-xl text-[#4a3828] font-serif leading-relaxed max-w-2xl mb-10 px-4">
          “{HERO_TAGLINE}”
        </p>

        {/* Primary Call To Action Button: BEGIN THE JOURNEY */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            id="begin-the-journey-button"
            onClick={handleStart}
            className="group relative px-8 py-4 rounded-lg bg-gradient-to-r from-[#c59b27] via-[#d6ab32] to-[#b88a2a] text-[#1a1108] font-serif font-bold text-base sm:text-lg tracking-wider uppercase shadow-lg hover:shadow-[#c59b27]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-[#f0df9f] flex items-center gap-3"
          >
            <span>BEGIN THE JOURNEY</span>
            <Compass className="w-5 h-5 text-[#24180d] group-hover:rotate-45 transition-transform duration-300" />
          </button>

          <button
            id="view-3d-relics-hero-button"
            onClick={() => {
              playMuseumChime(audioEnabled);
              if (onNavigateSection) {
                onNavigateSection('interactive-3d');
              } else {
                onOpenArtifact('noli-me-tangere');
              }
            }}
            className="px-6 py-4 rounded-lg bg-[#ede2cc] hover:bg-[#e4d6be] text-[#2c1b10] border border-[#bfa77e] text-sm font-serif font-bold uppercase tracking-wider transition-all shadow-md flex items-center gap-2 hover:scale-[1.02]"
          >
            <Box className="w-4 h-4 text-[#7a5513]" />
            <span>Interactive 3D Relics</span>
          </button>

          <button
            id="view-curated-exhibits-button"
            onClick={() => onNavigateSection?.('relics')}
            className="px-6 py-4 rounded-lg bg-[#f4ecdd] hover:bg-[#eadecb] text-[#3d2b1f] border border-[#cbb793] text-sm font-semibold uppercase tracking-wider transition-colors flex items-center gap-2"
          >
            <Award className="w-4 h-4 text-[#7a5513]" />
            <span>Artifacts</span>
          </button>
        </div>

        {/* Museum Curatorial Highlights Bar */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 w-full max-w-3xl pt-8 border-t border-[#cbb793]/40 text-center">
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#2a170a]">1872–1877</div>
            <div className="text-[11px] text-[#7a644e] uppercase tracking-wider font-medium">Ateneo de Manila</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#2a170a]">1877–1882</div>
            <div className="text-[11px] text-[#7a644e] uppercase tracking-wider font-medium">Univ. Santo Tomas</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#2a170a]">12 Cities</div>
            <div className="text-[11px] text-[#7a644e] uppercase tracking-wider font-medium">European Odyssey</div>
          </div>
          <div className="p-2">
            <div className="text-xl sm:text-2xl font-serif font-bold text-[#2a170a]">1889–1895</div>
            <div className="text-[11px] text-[#7a644e] uppercase tracking-wider font-medium">La Solidaridad</div>
          </div>
        </div>

        {/* Down Indicator */}
        <div 
          onClick={handleStart}
          className="mt-8 text-[#7a5513] hover:text-[#2c1b10] cursor-pointer animate-bounce transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};
