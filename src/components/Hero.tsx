import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import { Calendar, MapPin, ArrowRight, ChevronDown, Award, Users } from "lucide-react";

interface HeroProps {
  onRegisterClick: () => void;
  registeredCount: number;
}

export default function Hero({ onRegisterClick, registeredCount }: HeroProps) {
  // Countdown state: Targeted at June 27, 2026 14:00:00
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-27T14:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F4F9FD] to-[#EBF4FC] tech-grid"
    >
      {/* Absolute Ambient Glowing Orbs */}
      <div className="absolute top-1/4 left-1/10 w-[500px] h-[500px] rounded-full glow-spot-1 filter blur-[90px] opacity-70 pointer-events-none animate-float-slow"></div>
      <div className="absolute bottom-1/5 right-1/10 w-[600px] h-[600px] rounded-full glow-spot-2 filter blur-[110px] opacity-80 pointer-events-none" style={{ animationDelay: "2s" }}></div>
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full glow-spot-3 filter blur-[80px] opacity-60 pointer-events-none" style={{ animationDelay: "4s" }}></div>

      {/* Decorative Floating Tech Hex/Grid Graphic Element */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-[#0078D4]/10 rounded-full flex items-center justify-center pointer-events-none animate-spin-slow opacity-30">
        <div className="w-56 h-56 border border-[#0078D4]/10 rounded-full border-dashed"></div>
        <div className="w-36 h-36 border border-[#0078D4]/5 rounded-full"></div>
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10 flex flex-col items-center">
        
        {/* Top Tag: Dynamic / Fresh Badge */}
        <div id="hero-badge" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-[#E2E8F0] shadow-sm mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-[#0078D4] tracking-wider uppercase font-mono">
            HUAWEI STORAGE SPRING EVENT 2026
          </span>
        </div>

        {/* Brand Event Title */}
        <h2 id="hero-event-name" className="text-lg sm:text-xl font-bold text-[#0078D4] tracking-widest uppercase mb-3 font-sans">
          {eventData.title}
        </h2>

        {/* Dynamic Theme & Slogan */}
        <h1 id="hero-slogan" className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 tracking-tight leading-none mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-[#0052A3] to-[#0078D4]">
            {eventData.theme.split("，")[0]}
          </span>
          <br className="hidden sm:inline" />
          <span className="text-2xl sm:text-4xl md:text-5xl font-semibold text-slate-600 block mt-3">
            {eventData.theme.split("，")[1]}
          </span>
        </h1>

        {/* Description & Value Proposition */}
        <p id="hero-description" className="max-w-2xl text-base sm:text-lg text-slate-600 mb-8 leading-relaxed">
          拥抱大模型与算力时代的全新变局。华为将发布全新一代
          <strong className="text-slate-800 font-semibold"> AI数据平台 </strong>与
          <strong className="text-slate-800 font-semibold"> FusionCube A1000 </strong>，
          携手行业领袖开启企业级智能数据新纪元。
        </p>

        {/* Time and Location Card */}
        <div id="hero-info-card" className="flex flex-col sm:flex-row items-center gap-6 px-8 py-4 rounded-xl bg-white/70 backdrop-blur-md border border-slate-100 shadow-lg mb-10 w-full max-w-xl">
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <Calendar className="w-5.5 h-5.5 text-[#0078D4]" />
            <span className="text-sm sm:text-base font-medium text-slate-800">
              {eventData.date} | 14:00
            </span>
          </div>
          <div className="hidden sm:block h-6 w-px bg-slate-200"></div>
          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <MapPin className="w-5.5 h-5.5 text-[#0078D4]" />
            <span className="text-sm sm:text-base font-medium text-slate-800">
              {eventData.location}
            </span>
          </div>
        </div>

        {/* Countdown Timer Block */}
        <div id="hero-countdown-block" className="flex flex-col items-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 font-mono mb-3">
            距离“数据觉醒”发布会倒计时
          </span>
          <div className="flex gap-2 sm:gap-4">
            {[
              { label: "天", val: timeLeft.days },
              { label: "时", val: timeLeft.hours },
              { label: "分", val: timeLeft.minutes },
              { label: "秒", val: timeLeft.seconds },
            ].map((unit, idx) => (
              <div
                id={`countdown-${unit.label}`}
                key={idx}
                className="flex flex-col items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-white shadow-md border border-slate-50 relative group"
              >
                <span className="text-xl sm:text-2xl font-bold text-[#0078D4] font-mono">
                  {unit.val < 10 ? `0${unit.val}` : unit.val}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 mt-1">
                  {unit.label}
                </span>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-[#0078D4]/10 group-hover:bg-[#0078D4]/30 rounded-b-xl transition-all"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Actions Button Group */}
        <div id="hero-actions" className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md">
          <button
            id="hero-btn-register"
            onClick={onRegisterClick}
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-white bg-[#0078D4] hover:bg-[#0066CC] rounded-xl shadow-lg shadow-[#0078D4]/25 hover:shadow-xl hover:shadow-[#0078D4]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 group"
          >
            立即报名参会
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <a
            id="hero-btn-learn-more"
            href="#agenda"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 hover:text-[#0078D4] rounded-xl shadow-md border border-slate-200 hover:border-[#0078D4]/30 flex items-center justify-center gap-2 transition-all"
          >
            了解会议议程
          </a>
        </div>

        {/* Live Attendance dynamic ticker */}
        <div id="attendance-ticker" className="mt-8 flex items-center gap-2 text-xs sm:text-sm text-slate-500 bg-white/40 px-4 py-1.5 rounded-full border border-slate-100">
          <Users className="w-4.5 h-4.5 text-[#0078D4]" />
          <span>已有</span>
          <span className="font-bold text-[#0078D4] font-mono">
            {(12842 + registeredCount).toLocaleString()}
          </span>
          <span>位企业级高管与IT领袖报名成功</span>
        </div>

      </div>

      {/* Bounce indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-70 animate-bounce cursor-pointer">
        <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">滑动探索</span>
        <ChevronDown className="w-4 h-4 text-slate-400" />
      </div>
    </section>
  );
}
