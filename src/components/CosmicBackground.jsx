import React, { useEffect, useRef } from 'react';

export default function CosmicBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = 0;
    let height = 0;
    let scrollPercent = 0;
    let scrollY = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let lastMouseX = -1000;
    let lastMouseY = -1000;

    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Canvas size sync
    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Scroll tracker
    const handleScroll = () => {
      scrollY = window.scrollY || window.pageYOffset || 0;
      const docH = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
      scrollPercent = docH > 0 ? Math.min(1, Math.max(0, scrollY / docH)) : 0;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // Humanized Warm Editorial Palette definition
    const PALETTE = {
      terracotta: '#C86D51',
      spicedClay: '#B65C40',
      mutedOchre: '#D99B4B',
      softClay: '#EADCD0',
      deepEspresso: '#261C1A',
      mutedUmber: '#6E625F',
      sand: '#E6DED5'
    };

    const trailColors = [
      PALETTE.terracotta,
      PALETTE.spicedClay,
      PALETTE.mutedOchre,
      PALETTE.softClay,
      PALETTE.deepEspresso
    ];

    // Particle storage
    const cursorParticles = [];
    const clickBursts = [];

    // Spawn Cursor Stardust
    const spawnStardust = (x, y, count = 4) => {
      if (prefersReducedMotion) return;
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.9 + 0.3;
        const color = trailColors[Math.floor(Math.random() * trailColors.length)];
        cursorParticles.push({
          x: x + (Math.random() - 0.5) * 12,
          y: y + (Math.random() - 0.5) * 12,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.2,
          size: Math.random() * 3 + 1,
          alpha: Math.random() * 0.55 + 0.3,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.08,
          color,
          life: 1.0,
          decay: Math.random() * 0.02 + 0.015,
          isStar: Math.random() < 0.3
        });
      }
      if (cursorParticles.length > 50) cursorParticles.splice(0, cursorParticles.length - 50);
    };

    // Spawn Click/Touch Burst Sparkles
    const spawnClickBurst = (x, y) => {
      if (prefersReducedMotion) return;
      const count = Math.floor(Math.random() * 10) + 10;
      const starSymbols = ['✦', '✧', '⋆', '✨'];
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.3;
        const speed = Math.random() * 2.2 + 1.0;
        const color = trailColors[Math.floor(Math.random() * trailColors.length)];
        const symbol = starSymbols[Math.floor(Math.random() * starSymbols.length)];
        clickBursts.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 0.4,
          size: Math.random() * 3 + 2,
          alpha: 0.95,
          color,
          symbol,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.1,
          life: 1.0,
          decay: Math.random() * 0.025 + 0.018
        });
      }
    };

    // Pointer Event Listeners
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      const distMoved = Math.hypot(mouseX - lastMouseX, mouseY - lastMouseY);
      if (distMoved > 8) {
        spawnStardust(mouseX, mouseY, Math.floor(Math.random() * 4) + 3);
        lastMouseX = mouseX;
        lastMouseY = mouseY;
      }
    };

    const handleClick = (e) => {
      spawnClickBurst(e.clientX, e.clientY);
    };

    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        mouseX = t.clientX;
        mouseY = t.clientY;
        spawnClickBurst(t.clientX, t.clientY);
      }
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const t = e.touches[0];
        mouseX = t.clientX;
        mouseY = t.clientY;
        spawnStardust(t.clientX, t.clientY, 3);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    // -------------------------------------------------------------
    // INITIALIZE BACKGROUND OBJECTS (STARS & STEM WATERMARKS)
    // -------------------------------------------------------------
    const starCount = isMobile ? 24 : 42;
    const stars = [];
    const starShapes = ['✦', '✧', '⋆', 'dot'];
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 1.6,
        radius: Math.random() * 1.8 + 0.8,
        color: trailColors[Math.floor(Math.random() * trailColors.length)],
        shape: starShapes[Math.floor(Math.random() * starShapes.length)],
        baseAlpha: Math.random() * 0.25 + 0.1,
        twinkleSpeed: Math.random() * 0.03 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
        parallaxFactor: Math.random() * 0.15 + 0.05
      });
    }

    // STEM Watermark Texts (Maths, Physics, CS)
    const stemTexts = [
      '∫ f(x) dx', 'E = mc²', 'a² + b² = c²', 'λ = h/p',
      '∇ × E = -∂B/∂t', 'lim_{x→∞}', 'cs.apexNode()', 'det(A) = |A|',
      '{ key: val }', 'iℏ ∂/∂t Ψ', '⟨ψ|ϕ⟩', '</>', '∑_{i=1}^n i'
    ];
    const stemSymbols = [];
    const stemCount = isMobile ? 8 : 16;
    for (let i = 0; i < stemCount; i++) {
      stemSymbols.push({
        text: stemTexts[i % stemTexts.length],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight * 1.6,
        vy: -Math.random() * 0.18 - 0.04,
        vx: (Math.random() - 0.5) * 0.1,
        fontSize: Math.floor(Math.random() * 6 + 13),
        color: Math.random() > 0.5 ? PALETTE.terracotta : (Math.random() > 0.5 ? PALETTE.mutedOchre : PALETTE.mutedUmber),
        alpha: Math.random() * 0.04 + 0.03, // Opacity: 0.04 - 0.08
        parallaxFactor: 0.12
      });
    }

    // STEM Discipline Illustrative Objects
    const academicObjects = [
      // Mathematics: Golden Ratio Spiral & Tessellation
      { type: 'goldenRatio', x: 0.18, y: 0.32, scale: 1.1, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },
      { type: 'geometry', x: 0.82, y: 0.25, scale: 0.95, rot: 0, alpha: 0.06, color: PALETTE.mutedOchre, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },

      // Physics: Atom Orbital & Light Refraction Prism
      { type: 'atom', x: 0.85, y: 0.95, scale: 1.1, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },
      { type: 'prism', x: 0.14, y: 1.35, scale: 1.0, rot: 0, alpha: 0.06, color: PALETTE.mutedOchre, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },

      // Chemistry: Benzene Ring & Chemical Flask
      { type: 'benzene', x: 0.88, y: 1.95, scale: 1.0, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },
      { type: 'chemFlask', x: 0.12, y: 2.25, scale: 1.0, rot: 0, alpha: 0.06, color: PALETTE.mutedOchre, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },

      // Biology: Translucent DNA & Cellular Membrane
      { type: 'dna', x: 0.86, y: 2.85, scale: 1.15, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },
      { type: 'cell', x: 0.15, y: 3.20, scale: 0.9, rot: 0, alpha: 0.06, color: PALETTE.mutedOchre, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },

      // Computer Science: Binary Matrix Node & Circuit PCB Trace Diagram
      { type: 'pcbTrace', x: 0.84, y: 3.85, scale: 1.0, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },
      { type: 'codeNode', x: 0.15, y: 4.15, scale: 0.95, rot: 0, alpha: 0.06, color: PALETTE.mutedOchre, nudgeX: 0, nudgeY: 0, sparkTimer: 0 },

      // Cap & Stars
      { type: 'gradCap', x: 0.82, y: 4.85, scale: 1.0, rot: 0, alpha: 0.06, color: PALETTE.terracotta, nudgeX: 0, nudgeY: 0, sparkTimer: 0 }
    ];

    // -------------------------------------------------------------
    // VECTOR DRAWING HELPERS FOR WARM STEM OBJECTS
    // -------------------------------------------------------------
    const drawGoldenRatio = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.beginPath();
      let a = 2;
      let b = 0.15;
      for (let i = 0; i < 80; i++) {
        const angle = 0.1 * i;
        const r = a * Math.exp(b * angle);
        const px = r * Math.cos(angle);
        const py = r * Math.sin(angle);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.stroke();

      ctx.strokeRect(-40, -25, 80, 50);
      ctx.strokeRect(-40, -25, 50, 50);
      ctx.restore();
    };

    const drawAtom = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.fillStyle = PALETTE.terracotta;
      ctx.beginPath();
      ctx.arc(0, 0, 4, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < 3; i++) {
        ctx.save();
        ctx.rotate((i * Math.PI) / 3);
        ctx.beginPath();
        ctx.ellipse(0, 0, 32, 11, 0, 0, Math.PI * 2);
        ctx.stroke();

        const eAngle = rot * 2 + i * 2.1;
        const ex = 32 * Math.cos(eAngle);
        const ey = 11 * Math.sin(eAngle);
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(ex, ey, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      ctx.restore();
    };

    const drawDNA = (ctx, x, y, scale, time, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      const height = 120;
      const width = 24;
      const points = 12;

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const py = -height / 2 + (i / points) * height;
        const phase = (i / points) * Math.PI * 2.5 + time * 1.5;
        const px1 = Math.sin(phase) * width;
        const px2 = Math.sin(phase + Math.PI) * width;

        if (i % 2 === 0) {
          ctx.moveTo(px1, py);
          ctx.lineTo(px2, py);
        }
      }
      ctx.stroke();

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const py = -height / 2 + (i / points) * height;
        const phase = (i / points) * Math.PI * 2.5 + time * 1.5;
        const px1 = Math.sin(phase) * width;
        if (i === 0) ctx.moveTo(px1, py);
        else ctx.lineTo(px1, py);
      }
      ctx.stroke();

      ctx.beginPath();
      for (let i = 0; i <= points; i++) {
        const py = -height / 2 + (i / points) * height;
        const phase = (i / points) * Math.PI * 2.5 + time * 1.5;
        const px2 = Math.sin(phase + Math.PI) * width;
        if (i === 0) ctx.moveTo(px2, py);
        else ctx.lineTo(px2, py);
      }
      ctx.stroke();
      ctx.restore();
    };

    const drawCell = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(-5, -5, 12, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = PALETTE.terracotta;
      ctx.beginPath();
      ctx.arc(-5, -5, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.strokeRect(10, 8, 8, 4);
      ctx.strokeRect(-16, 12, 6, 6);
      ctx.restore();
    };

    const drawChemFlask = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;

      ctx.beginPath();
      ctx.moveTo(-8, -25);
      ctx.lineTo(8, -25);
      ctx.moveTo(-5, -25);
      ctx.lineTo(-5, -10);
      ctx.lineTo(-24, 25);
      ctx.quadraticCurveTo(0, 30, 24, 25);
      ctx.lineTo(5, -10);
      ctx.lineTo(5, -25);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-16, 12);
      ctx.quadraticCurveTo(0, 18, 16, 12);
      ctx.stroke();

      ctx.fillStyle = PALETTE.terracotta;
      ctx.beginPath();
      ctx.arc(-4, 2, 2, 0, Math.PI * 2);
      ctx.arc(5, -4, 1.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    };

    const drawBenzene = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      const radius = 28;
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const a = (i * Math.PI) / 3;
        const px = radius * Math.cos(a);
        const py = radius * Math.sin(a);
        if (i === 0) ctx.moveTo(px, py);
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(0, 0, 16, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    };

    const drawPrism = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;

      ctx.strokeStyle = color;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.moveTo(0, -28);
      ctx.lineTo(26, 22);
      ctx.lineTo(-26, 22);
      ctx.closePath();
      ctx.stroke();

      ctx.strokeStyle = PALETTE.deepEspresso;
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.moveTo(-45, 5);
      ctx.lineTo(-8, -2);
      ctx.stroke();

      const rays = [PALETTE.terracotta, PALETTE.mutedOchre, PALETTE.spicedClay];
      rays.forEach((rColor, idx) => {
        ctx.strokeStyle = rColor;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(8, 2);
        ctx.lineTo(48, 12 + idx * 7);
        ctx.stroke();
      });

      ctx.restore();
    };

    const drawGeometry = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.beginPath();
      ctx.moveTo(-25, 20);
      ctx.lineTo(25, 20);
      ctx.lineTo(-25, -25);
      ctx.closePath();
      ctx.stroke();

      ctx.strokeRect(-25, 12, 8, 8);
      ctx.beginPath();
      ctx.arc(-25, 20, 32, -Math.PI / 2, 0);
      ctx.stroke();
      ctx.restore();
    };

    const drawPcbTrace = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.beginPath();
      ctx.moveTo(-30, -20);
      ctx.lineTo(-10, -20);
      ctx.lineTo(0, -10);
      ctx.lineTo(20, -10);

      ctx.moveTo(-20, 15);
      ctx.lineTo(0, 15);
      ctx.lineTo(15, 0);
      ctx.lineTo(30, 0);
      ctx.stroke();

      const nodes = [
        { x: -30, y: -20 }, { x: 20, y: -10 },
        { x: -20, y: 15 }, { x: 30, y: 0 }
      ];
      ctx.fillStyle = PALETTE.terracotta;
      nodes.forEach(n => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 3, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();
    };

    const drawCodeNode = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.font = "bold 18px 'Inter', monospace";
      ctx.fillText("{ apex.dev }", -40, 6);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.2;
      ctx.strokeRect(-48, -16, 96, 32);
      ctx.restore();
    };

    const drawGradCap = (ctx, x, y, scale, rot, alpha, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rot);
      ctx.scale(scale, scale);
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.3;

      ctx.beginPath();
      ctx.moveTo(0, -14);
      ctx.lineTo(26, -4);
      ctx.lineTo(0, 6);
      ctx.lineTo(-26, -4);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(-14, 0);
      ctx.lineTo(-14, 12);
      ctx.quadraticCurveTo(0, 18, 14, 12);
      ctx.lineTo(14, 0);
      ctx.stroke();

      ctx.strokeStyle = PALETTE.terracotta;
      ctx.beginPath();
      ctx.moveTo(22, -2);
      ctx.lineTo(25, 14);
      ctx.stroke();
      ctx.restore();
    };

    // Main animation & rendering loop
    let time = 0;
    let animId;

    const render = () => {
      time += 0.008;
      ctx.clearRect(0, 0, width, height);

      // -------------------------------------------------------------
      // LAYER 0: Warm Linen / Alabaster Base Gradient
      // -------------------------------------------------------------
      const bgGrad = ctx.createLinearGradient(0, 0, width, height);
      bgGrad.addColorStop(0, '#FBF9F5');
      bgGrad.addColorStop(0.5, '#F7F3EC');
      bgGrad.addColorStop(1, '#F2ECE4');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // LAYER 1: Animated Soft Terracotta & Ochre Radial Glow Orbs
      // -------------------------------------------------------------
      const blob1X = width * 0.2 + Math.sin(time * 0.4) * 60;
      const blob1Y = height * 0.25 + Math.cos(time * 0.3) * 45 - scrollY * 0.04;
      const g1 = ctx.createRadialGradient(blob1X, blob1Y, 10, blob1X, blob1Y, width * 0.4);
      g1.addColorStop(0, 'rgba(200, 109, 81, 0.07)');
      g1.addColorStop(1, 'rgba(251, 249, 245, 0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      const blob2X = width * 0.78 + Math.cos(time * 0.35) * 55;
      const blob2Y = height * 0.60 + Math.sin(time * 0.45) * 50 - scrollY * 0.05;
      const g2 = ctx.createRadialGradient(blob2X, blob2Y, 10, blob2X, blob2Y, width * 0.42);
      g2.addColorStop(0, 'rgba(217, 155, 75, 0.07)');
      g2.addColorStop(1, 'rgba(251, 249, 245, 0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      const blob3X = width * 0.45 + Math.sin(time * 0.25) * 45;
      const blob3Y = height * 0.88 + Math.cos(time * 0.2) * 35 - scrollY * 0.06;
      const g3 = ctx.createRadialGradient(blob3X, blob3Y, 10, blob3X, blob3Y, width * 0.35);
      g3.addColorStop(0, 'rgba(182, 92, 64, 0.05)');
      g3.addColorStop(1, 'rgba(251, 249, 245, 0)');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, width, height);

      // -------------------------------------------------------------
      // LAYER 2: Gentle Twinkling Celestial Stars
      // -------------------------------------------------------------
      stars.forEach(s => {
        const sy = (s.y - scrollY * s.parallaxFactor + height * 2) % (height * 1.5);
        const distToMouse = Math.hypot(s.x - mouseX, sy - mouseY);
        let currentAlpha = s.baseAlpha + Math.sin(time * 3.5 + s.twinkleOffset) * 0.1;

        if (distToMouse < 130) {
          currentAlpha += (1 - distToMouse / 130) * 0.4;
        }
        currentAlpha = Math.max(0.04, Math.min(0.8, currentAlpha));

        ctx.save();
        ctx.translate(s.x, sy);
        ctx.globalAlpha = currentAlpha;
        ctx.fillStyle = s.color;

        if (s.shape === 'dot') {
          ctx.beginPath();
          ctx.arc(0, 0, s.radius, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.font = `${Math.floor(s.radius * 7 + 6)}px 'Inter', sans-serif`;
          ctx.fillText(s.shape, -4, 4);
        }
        ctx.restore();
      });

      // -------------------------------------------------------------
      // LAYER 3: Floating Low-Opacity STEM Discipline Watermarks
      // -------------------------------------------------------------
      ctx.font = "600 14px 'Cinzel', serif";
      stemSymbols.forEach(eq => {
        if (!prefersReducedMotion) {
          eq.y += eq.vy;
          eq.x += eq.vx;
          if (eq.y < -30) eq.y = height * 1.5;
        }
        const ey = (eq.y - scrollY * eq.parallaxFactor + height * 2) % (height * 1.5);

        const distToMouse = Math.hypot(eq.x - mouseX, ey - mouseY);
        let alpha = eq.alpha;
        let drawX = eq.x;
        let drawY = ey;
        if (distToMouse < 120) {
          alpha += (1 - distToMouse / 120) * 0.15;
          drawX += (mouseX - eq.x) * 0.03;
          drawY += (mouseY - ey) * 0.03;
        }

        ctx.save();
        ctx.globalAlpha = Math.min(0.12, alpha); // Low opacity 0.04 to 0.08
        ctx.fillStyle = eq.color;
        ctx.font = `${eq.fontSize}px 'Cinzel', serif`;
        ctx.fillText(eq.text, drawX, drawY);
        ctx.restore();
      });

      // -------------------------------------------------------------
      // LAYER 4: STEM Vector Objects (Low Opacity Ambient Motifs)
      // -------------------------------------------------------------
      academicObjects.forEach(obj => {
        const objWorldY = obj.y * height;
        const screenY = objWorldY - scrollY * 0.45;
        const screenX = obj.x * width + obj.nudgeX;

        if (screenY < -150 || screenY > height + 150) return;

        const distToMouse = Math.hypot(screenX - mouseX, screenY - mouseY);
        let currentAlpha = obj.alpha;
        let currentScale = obj.scale;
        let currentRot = obj.rot + (prefersReducedMotion ? 0 : Math.sin(time + obj.x) * 0.1);

        if (distToMouse < 140) {
          const proxRatio = 1 - distToMouse / 140;
          currentAlpha += proxRatio * 0.1;
          currentScale += proxRatio * 0.06;
          currentRot += proxRatio * 0.1;

          obj.nudgeX = Math.cos(Math.atan2(mouseY - screenY, mouseX - screenX)) * -4 * proxRatio;
          obj.nudgeY = Math.sin(Math.atan2(mouseY - screenY, mouseX - screenX)) * -4 * proxRatio;

          obj.sparkTimer += 1;
          if (obj.sparkTimer % 12 === 0) {
            spawnStardust(screenX + (Math.random() - 0.5) * 30, screenY + (Math.random() - 0.5) * 30, 2);
          }
        } else {
          obj.nudgeX *= 0.92;
          obj.nudgeY *= 0.92;
        }

        currentAlpha = Math.min(0.15, Math.max(0.04, currentAlpha));

        switch (obj.type) {
          case 'goldenRatio':
            drawGoldenRatio(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'atom':
            drawAtom(ctx, screenX, screenY, currentScale, time * 0.8 + currentRot, currentAlpha, obj.color);
            break;
          case 'dna':
            drawDNA(ctx, screenX, screenY, currentScale, time, currentAlpha, obj.color);
            break;
          case 'cell':
            drawCell(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'chemFlask':
            drawChemFlask(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'benzene':
            drawBenzene(ctx, screenX, screenY, currentScale, time * 0.3 + currentRot, currentAlpha, obj.color);
            break;
          case 'prism':
            drawPrism(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'geometry':
            drawGeometry(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'pcbTrace':
            drawPcbTrace(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'codeNode':
            drawCodeNode(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          case 'gradCap':
            drawGradCap(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
          default:
            drawAtom(ctx, screenX, screenY, currentScale, currentRot, currentAlpha, obj.color);
            break;
        }
      });

      // -------------------------------------------------------------
      // LAYER 5: Cursor Stardust Particles
      // -------------------------------------------------------------
      for (let i = cursorParticles.length - 1; i >= 0; i--) {
        const p = cursorParticles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.life -= p.decay;

        if (p.life <= 0) {
          cursorParticles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.globalAlpha = p.life * p.alpha;
        ctx.fillStyle = p.color;

        if (p.isStar) {
          ctx.beginPath();
          const r = p.size * 1.5;
          ctx.moveTo(0, -r);
          ctx.quadraticCurveTo(0, 0, r, 0);
          ctx.quadraticCurveTo(0, 0, 0, r);
          ctx.quadraticCurveTo(0, 0, -r, 0);
          ctx.quadraticCurveTo(0, 0, 0, -r);
          ctx.fill();
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      }

      // -------------------------------------------------------------
      // LAYER 6: Click / Touch Sparkle Bursts
      // -------------------------------------------------------------
      for (let i = clickBursts.length - 1; i >= 0; i--) {
        const b = clickBursts[i];
        b.x += b.vx;
        b.y += b.vy;
        b.vx *= 0.94;
        b.vy *= 0.94;
        b.rotation += b.rotSpeed;
        b.life -= b.decay;

        if (b.life <= 0) {
          clickBursts.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.translate(b.x, b.y);
        ctx.rotate(b.rotation);
        ctx.globalAlpha = b.life * b.alpha;
        ctx.fillStyle = b.color;
        ctx.font = `${Math.floor(b.size * 5 + 8)}px 'Inter', sans-serif`;
        ctx.fillText(b.symbol, -5, 5);
        ctx.restore();
      }

      if (!prefersReducedMotion) {
        animId = requestAnimationFrame(render);
      }
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      id="bgCanvas"
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
