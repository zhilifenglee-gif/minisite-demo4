import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { Award, Eye, ThumbsUp, Layers, CheckCircle2 } from "lucide-react";

export default function PastReview() {
  const [hoveredPhoto, setHoveredPhoto] = useState<string | null>(null);

  return (
    <section id="past-review" className="py-24 bg-slate-50 relative scroll-mt-20">
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4FD] border border-[#0078D4]/10 text-[#0078D4] text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>GLOBAL FOOTPRINTS</span>
          </div>
          <h2 id="past-review-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            往届精彩回顾
          </h2>
          <p id="past-review-subtitle" className="mt-4 max-w-xl mx-auto text-base text-slate-500">
            赋能全球数据觉醒。华为不仅发布世界一流的存力单品，更与全球数万家核心政企构建了稳固的数字化底座。
          </p>
        </div>

        {/* Global Key Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {eventData.stats.map((stat, idx) => (
            <div
              id={`stat-card-${idx}`}
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-100 shadow-md flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 relative group"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[#0078D4] font-mono tracking-tight group-hover:scale-105 transition-transform duration-200">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-500 mt-2">
                {stat.label}
              </span>
              <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-blue-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Dynamic Gallery Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {eventData.pastReviews.map((photo) => {
            const isHovered = hoveredPhoto === photo.id;
            return (
              <div
                id={`past-photo-${photo.id}`}
                key={photo.id}
                className="group relative h-64 rounded-2xl overflow-hidden shadow-md border border-slate-200 cursor-pointer"
                onMouseEnter={() => setHoveredPhoto(photo.id)}
                onMouseLeave={() => setHoveredPhoto(null)}
              >
                {/* Background image */}
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />

                {/* Dark gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent"></div>

                {/* Top Category Badge */}
                <div className="absolute top-4 left-4 bg-[#0078D4] text-white text-[10px] font-bold tracking-widest font-mono uppercase px-2.5 py-1 rounded">
                  {photo.category}
                </div>

                {/* Bottom Content details */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white flex flex-col justify-end transition-transform duration-300">
                  <h4 className="text-sm sm:text-base font-bold leading-snug text-slate-100 group-hover:text-white mb-2">
                    {photo.title}
                  </h4>
                  
                  {/* Subtle stats showing simulated engagements */}
                  <div className={`flex items-center gap-4 text-xs text-slate-300 overflow-hidden transition-all duration-300 ${
                    isHovered ? "max-h-8 opacity-100 mt-1" : "max-h-0 opacity-0"
                  }`}>
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-blue-400" />
                      10,000+ 浏览
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3.5 h-3.5 text-emerald-400" />
                      98% 满意度
                    </span>
                  </div>
                </div>

                {/* Hover white dynamic border frame */}
                <div className={`absolute inset-4 border border-white/20 rounded-xl pointer-events-none transition-all duration-500 ${
                  isHovered ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}></div>

              </div>
            );
          })}
        </div>

        {/* Global trusted enterprise slide logos container */}
        <div id="partner-logos-block" className="mt-16 pt-12 border-t border-slate-100 text-center">
          <p className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-6">
            TRUSTED BY THE WORLD'S LEADING ENTERPRISES
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-75 transition-all">
            {["全球五百强银行", "顶尖电信运营商", "国企算力中心", "新能源龙头车企", "超大型公立医院"].map((partner, idx) => (
              <span id={`partner-name-${idx}`} key={idx} className="text-sm font-bold text-slate-600 font-sans tracking-wide">
                {partner}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
