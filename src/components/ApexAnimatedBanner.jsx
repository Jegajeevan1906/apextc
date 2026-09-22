import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX, RotateCcw } from 'lucide-react';

export default function ApexAnimatedBanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const dustParticlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const renderDust = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const particles = dustParticlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= p.decay;
        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }
        ctx.save();
        ctx.globalAlpha = p.life;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animId = requestAnimationFrame(renderDust);
    };

    renderDust();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  const handleMouseMove = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const dustColors = ['#B85C38', '#C59B4A', '#91452F', '#8A9A78', '#EBC7AD'];
    for (let i = 0; i < 3; i++) {
      dustParticlesRef.current.push({
        x,
        y,
        vx: (Math.random() - 0.5) * 1.8,
        vy: (Math.random() - 0.5) * 1.8 - 0.5,
        size: Math.random() * 3 + 1,
        life: 1.0,
        decay: Math.random() * 0.03 + 0.015,
        color: dustColors[Math.floor(Math.random() * dustColors.length)]
      });
    }
  };

  const handleReplay = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  return (
    <div className="rounded-3xl p-2 sm:p-4 relative overflow-hidden group w-full border border-[#E8D8BD] shadow-xs bg-[#FBF6ED]">
      {/* Internal Container for 1.mp4 Video Banner */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#3B302A]/10 border border-[#E8D8BD]">
        <video
          ref={videoRef}
          src="/1.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover block"
        />

        {/* Interactive Stardust Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="absolute inset-0 w-full h-full cursor-pointer block z-10 pointer-events-auto"
        />

        {/* Control Overlay Glass Buttons */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
          <button
            onClick={toggleSound}
            type="button"
            className="text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-xs hover:scale-105 transition-all cursor-pointer bg-[#F7F0E3]/95 text-[#493447] border border-[#E8D8BD]"
          >
            {!isMuted ? (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#B85C38]" />
                <span>Mute</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#3B302A]" />
                <span>Unmute</span>
              </>
            )}
          </button>

          <button
            onClick={handleReplay}
            type="button"
            className="text-xs px-3.5 py-1.5 rounded-full flex items-center gap-1.5 font-bold shadow-xs hover:scale-105 transition-all cursor-pointer bg-[#F7F0E3]/95 text-[#493447] border border-[#E8D8BD]"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#C59B4A]" />
            <span>Replay</span>
          </button>
        </div>
      </div>
    </div>
  );
}


