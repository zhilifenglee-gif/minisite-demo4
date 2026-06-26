import React, { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw, Volume2, VolumeX, Monitor, Cpu, Database, Network } from "lucide-react";

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = 24; // Simulated seconds
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // Toggle Play State
  const handlePlayToggle = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      startTimeRef.current = Date.now() - currentTime * 1000;
    } else {
      setIsPlaying(false);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    }
  };

  // Reset/Restart Player
  const handleReset = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }
    drawTeaserFrame();
  };

  // Teaser placeholder drawing
  const drawTeaserFrame = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Clear and draw professional blueprint tech layout
    ctx.fillStyle = "#0A1424";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Subtle Grid background
    ctx.strokeStyle = "rgba(0, 120, 212, 0.15)";
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let j = 0; j < canvas.height; j += 40) {
      ctx.beginPath();
      ctx.moveTo(0, j);
      ctx.lineTo(canvas.width, j);
      ctx.stroke();
    }

    // Drawing concentric radial digital lights
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      50,
      canvas.width / 2,
      canvas.height / 2,
      300
    );
    gradient.addColorStop(0, "rgba(0, 120, 212, 0.25)");
    gradient.addColorStop(0.5, "rgba(0, 180, 216, 0.05)");
    gradient.addColorStop(1, "rgba(10, 20, 36, 1)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Dynamic graphic lines and hex decoration
    ctx.strokeStyle = "rgba(0, 180, 216, 0.4)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 120, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(0, 120, 212, 0.2)";
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, 160, 0, Math.PI * 2);
    ctx.stroke();

    // Text details
    ctx.shadowColor = "#0078D4";
    ctx.shadowBlur = 10;
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 28px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("数据觉醒 · 存力跃迁", canvas.width / 2, canvas.height / 2 - 20);

    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.font = "14px 'JetBrains Mono', monospace";
    ctx.fillText("HUAWEI RE-SPRING KEYNOTE TEASER", canvas.width / 2, canvas.height / 2 + 20);

    ctx.fillStyle = "#0078D4";
    ctx.font = "bold 11px 'Inter', sans-serif";
    ctx.fillText("PROMPT FOR INTUITIVE SYSTEM PLAYBACK", canvas.width / 2, canvas.height / 2 + 55);
  };

  // Live Canvas Render Loop when playing
  useEffect(() => {
    if (!isPlaying) {
      drawTeaserFrame();
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frameCount = 0;

    const render = () => {
      frameCount++;
      const elapsed = (Date.now() - (startTimeRef.current ?? Date.now())) / 1000;
      setCurrentTime(Math.min(elapsed, duration));

      if (elapsed >= duration) {
        setIsPlaying(false);
        setCurrentTime(duration);
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
        return;
      }

      // Background fill
      ctx.fillStyle = "#030A16";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tech grid
      ctx.strokeStyle = "rgba(0, 120, 212, 0.1)";
      ctx.lineWidth = 1;
      const gridSize = 40;
      const offsetX = (frameCount * 0.5) % gridSize;
      for (let i = -gridSize; i < canvas.width + gridSize; i += gridSize) {
        ctx.beginPath();
        ctx.moveTo(i + offsetX, 0);
        ctx.lineTo(i + offsetX, canvas.height);
        ctx.stroke();
      }

      // Live performance dashboard metrics based on timeline
      const phase = Math.floor(elapsed / 6); // 4 phases of 6 seconds
      
      // Theme glow base
      const glowGrad = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        20,
        canvas.width / 2,
        canvas.height / 2,
        350
      );
      glowGrad.addColorStop(0, "rgba(0, 120, 212, 0.15)");
      glowGrad.addColorStop(1, "rgba(3, 10, 22, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw beautiful dynamic data waves (oscilloscope)
      ctx.strokeStyle = "rgba(0, 180, 216, 0.5)";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      for (let x = 0; x < canvas.width; x += 5) {
        const formula = Math.sin(x * 0.015 + frameCount * 0.08) * Math.cos(x * 0.005 - frameCount * 0.03);
        const y = canvas.height / 2 + 60 + formula * 35;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Equalizer bars
      const barsCount = 30;
      const barWidth = 8;
      const gap = 6;
      const startX = (canvas.width - (barsCount * (barWidth + gap))) / 2;
      ctx.fillStyle = "rgba(0, 120, 212, 0.6)";
      for (let idx = 0; idx < barsCount; idx++) {
        const heightMultiplier = Math.sin(idx * 0.4 + frameCount * 0.15) * 0.5 + 0.5;
        const h = 10 + heightMultiplier * 50;
        ctx.fillRect(startX + idx * (barWidth + gap), canvas.height - 40 - h, barWidth, h);
      }

      // Title HUD Overlay
      ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
      ctx.font = "12px 'JetBrains Mono', monospace";
      ctx.textAlign = "left";
      ctx.fillText(`SYSTEM_STATUS: ACTIVE  |  CLOCK: ${new Date().toLocaleTimeString()}`, 30, 40);
      
      ctx.textAlign = "right";
      ctx.fillText(`STREAM_FPS: 60Hz  |  BUFFERING: OK`, canvas.width - 30, 40);

      // Center Showcase based on elapsed time (Simulated key slides)
      ctx.textAlign = "center";
      ctx.shadowColor = "#0078D4";
      ctx.shadowBlur = 15;

      if (phase === 0) {
        // Slide 1: Welcome / Awakening Theme
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 32px 'Inter', sans-serif";
        ctx.fillText("STAGE 1: 全新一代 AI 存储底座", canvas.width / 2, canvas.height / 2 - 60);
        
        ctx.shadowBlur = 0;
        ctx.fillStyle = "#00B4D8";
        ctx.font = "16px 'Inter', sans-serif";
        ctx.fillText("打破算力孤岛 · 让企业数据全面觉醒", canvas.width / 2, canvas.height / 2 - 20);

        // Subtext box
        ctx.fillStyle = "rgba(255, 255, 255, 0.1)";
        ctx.fillRect(canvas.width / 2 - 200, canvas.height / 2, 400, 36);
        ctx.fillStyle = "#E8F4FD";
        ctx.font = "13px 'JetBrains Mono', monospace";
        ctx.fillText(`LOADED: OceanStor Dorado All-Flash Storage Node`, canvas.width / 2, canvas.height / 2 + 23);
      } 
      else if (phase === 1) {
        // Slide 2: Dorado specs
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 32px 'Inter', sans-serif";
        ctx.fillText("STAGE 2: OceanStor Dorado 全闪存", canvas.width / 2, canvas.height / 2 - 60);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#22C55E";
        ctx.font = "bold 18px 'JetBrains Mono', monospace";
        ctx.fillText("IOPS: 3,200,000+  |  LATENCY: 0.05ms", canvas.width / 2, canvas.height / 2 - 20);

        // Graphics indicators
        const arcProgress = (elapsed % 6) / 6;
        ctx.strokeStyle = "rgba(34, 197, 94, 0.3)";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 + 20, 30, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = "#22C55E";
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2 + 20, 30, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * arcProgress);
        ctx.stroke();
      } 
      else if (phase === 2) {
        // Slide 3: FusionCube A1000
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 32px 'Inter', sans-serif";
        ctx.fillText("STAGE 3: FusionCube A1000", canvas.width / 2, canvas.height / 2 - 60);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#00B4D8";
        ctx.font = "16px 'Inter', sans-serif";
        ctx.fillText("开箱即用的一站式 AI 超融合基础设施", canvas.width / 2, canvas.height / 2 - 20);

        ctx.fillStyle = "rgba(0, 180, 216, 0.15)";
        ctx.fillRect(canvas.width / 2 - 150, canvas.height / 2 + 10, 300, 30);
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "12px 'JetBrains Mono', monospace";
        ctx.fillText("TRAINING SPEEDUP: +400%  |  ENERGY SAVING: 30%", canvas.width / 2, canvas.height / 2 + 29);
      } 
      else {
        // Slide 4: Invite
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "bold 34px 'Inter', sans-serif";
        ctx.fillText("数据觉醒 · 期待您的莅临", canvas.width / 2, canvas.height / 2 - 60);

        ctx.shadowBlur = 0;
        ctx.fillStyle = "#E2E8F0";
        ctx.font = "14px 'Inter', sans-serif";
        ctx.fillText("2026年6月27日 14:00 | 深圳国际会展中心", canvas.width / 2, canvas.height / 2 - 20);

        ctx.fillStyle = "#0078D4";
        ctx.font = "bold 13px 'Inter', sans-serif";
        ctx.fillText("扫描右侧二维码或点击“立即报名”抢占名额", canvas.width / 2, canvas.height / 2 + 15);
      }

      ctx.shadowBlur = 0;

      // Outer safety bounds overlay
      ctx.strokeStyle = "rgba(0, 120, 212, 0.4)";
      ctx.lineWidth = 1;
      ctx.strokeRect(15, 15, canvas.width - 30, canvas.height - 30);

      animationFrameRef.current = requestAnimationFrame(render);
    };

    drawTeaserFrame();
    animationFrameRef.current = requestAnimationFrame(render);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying]);

  // Handle Canvas Initial Resizing
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 850;
      canvas.height = 480;
      drawTeaserFrame();
    }
  }, []);

  return (
    <section id="video" className="py-20 bg-slate-50 relative border-y border-slate-100 overflow-hidden">
      {/* Decorative vector matrix blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E8F4FD]/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Title */}
        <div className="mb-12">
          <h2 id="video-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            发布会精彩先睹为快
          </h2>
          <p id="video-subtitle" className="max-w-xl mx-auto text-base text-slate-500">
            点击下方自主播放器，沉浸式预览下一代 AI 全闪存存储芯片、整机柜节能指标及尖端超融合科技。
          </p>
        </div>

        {/* Video Player Box with Shadow/Border */}
        <div className="relative max-w-4xl mx-auto bg-slate-900 rounded-2xl p-2 shadow-2xl border border-slate-200 shadow-[#0078D4]/5 transition-all">
          
          {/* Main Visual Screen */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-slate-950">
            <canvas
              ref={canvasRef}
              className="w-full h-full block cursor-pointer"
              onClick={handlePlayToggle}
              id="teaser-player-canvas"
            />

            {/* Simulated Overlay Play Button when paused */}
            {!isPlaying && currentTime === 0 && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-slate-950/40 backdrop-blur-[1px] hover:bg-slate-950/20 transition-all cursor-pointer"
                onClick={handlePlayToggle}
                id="video-play-layer"
              >
                <button 
                  className="w-20 h-20 rounded-full bg-white text-[#0078D4] hover:text-[#0066CC] flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-all relative group"
                  aria-label="Play Launch Presentation"
                >
                  <span className="absolute inset-0 rounded-full bg-[#0078D4]/20 animate-ping group-hover:bg-[#0078D4]/30"></span>
                  <Play className="w-9 h-9 fill-current ml-1" />
                </button>
              </div>
            )}
          </div>

          {/* Interactive Player Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-3 px-3 py-2 bg-slate-950 rounded-xl text-white">
            <div className="flex items-center gap-3">
              <button
                id="player-toggle-play"
                onClick={handlePlayToggle}
                className="p-2.5 rounded-lg bg-[#0078D4] hover:bg-[#0066CC] active:scale-95 transition-all text-white"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current" />}
              </button>

              <button
                id="player-reset"
                onClick={handleReset}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 active:scale-95 transition-all text-slate-300"
                aria-label="Restart Video"
              >
                <RotateCcw className="w-5 h-5" />
              </button>

              {/* Progress Bar */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-slate-400">
                  00:{currentTime < 10 ? `0${Math.floor(currentTime)}` : Math.floor(currentTime)}
                </span>
                <div className="w-24 sm:w-48 h-1.5 rounded-full bg-slate-800 overflow-hidden relative">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#0078D4] transition-all duration-100"
                    style={{ width: `${(currentTime / duration) * 100}%` }}
                  ></div>
                </div>
                <span className="text-xs font-mono text-slate-400">00:{duration}</span>
              </div>
            </div>

            {/* Specs badging & Audio control */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-400 font-mono bg-slate-900 px-3 py-1 rounded border border-slate-800">
                <Monitor className="w-3.5 h-3.5 text-[#0078D4]" />
                <span>4K HUD STREAM</span>
              </div>

              <button
                id="player-toggle-mute"
                onClick={() => setIsMuted(!isMuted)}
                className="p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-5 h-5 text-rose-400" /> : <Volume2 className="w-5 h-5 text-emerald-400" />}
              </button>
            </div>
          </div>
        </div>

        {/* Lower Caption */}
        <p id="video-footer-caption" className="mt-6 text-sm sm:text-base font-medium text-[#0078D4] tracking-wide animate-pulse">
          ⚡ 点击观看，抢先感受数据觉醒的时代脉动
        </p>

      </div>
    </section>
  );
}
