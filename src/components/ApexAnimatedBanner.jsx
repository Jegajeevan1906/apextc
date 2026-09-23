import React, { useEffect, useRef, useState } from 'react';

export default function ApexAnimatedBanner() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const dustParticlesRef = useRef([]);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Attempt sound playback
    video.muted = false;
    video.play().catch(() => {
      // If browser blocks unmuted autoplay, start muted and unmute on first user interaction
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
    });

    // Auto unmute on first page click/touch
    const enableSound = () => {
      if (video) {
        video.muted = false;
        setIsMuted(false);
        video.play().catch(() => {});
      }
      window.removeEventListener('click', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };

    window.addEventListener('click', enableSound);
    window.addEventListener('touchstart', enableSound);

    return () => {
      window.removeEventListener('click', enableSound);
      window.removeEventListener('touchstart', enableSound);
    };
  }, []);

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

    const dustColors = ['#F26B5E', '#F6C945', '#F28C38', '#A8D5BA', '#C9B6E4'];
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

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <div className="rounded-3xl p-2 sm:p-4 relative overflow-hidden group w-full border border-[#F8B878] shadow-xs bg-[#FFD6B8]">
      {/* Internal Container for 1.mp4 Video Banner */}
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-[#593B57]/10 border border-[#F8B878]">
        <video
          ref={videoRef}
          src="/1.mp4"
          autoPlay
          loop
          playsInline
          className="w-full h-full object-cover block"
        />

        {/* Interactive Stardust Canvas Overlay */}
        <canvas
          ref={canvasRef}
          onMouseMove={handleMouseMove}
          className="absolute inset-0 w-full h-full cursor-pointer block z-10 pointer-events-auto"
        />

        {/* Floating Sound Toggle Button */}
        <button
          onClick={toggleSound}
          className="absolute bottom-3 right-3 z-20 bg-[#261C1A]/70 hover:bg-[#261C1A]/90 text-[#FFF0D5] p-2.5 rounded-full backdrop-blur-md transition-all transform hover:scale-105 shadow-md flex items-center justify-center border border-[#F8B878]/30"
          title={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
        >
          {isMuted ? (
            <svg className="w-5 h-5 fill-current text-[#F26B5E]" viewBox="0 0 24 24">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-current text-[#F6C945]" viewBox="0 0 24 24">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}


