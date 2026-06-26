import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { Award, Linkedin, MessageSquare, ShieldCheck, Mail } from "lucide-react";

export default function Speakers() {
  const [activeSpeaker, setActiveSpeaker] = useState<string | null>(null);

  return (
    <section id="speakers" className="py-24 bg-slate-50 relative scroll-mt-20">
      {/* Decorative background visual lines */}
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4FD] border border-[#0078D4]/10 text-[#0078D4] text-xs font-semibold mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>KEYNOTE SPEAKERS</span>
          </div>
          <h2 id="speakers-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            重磅嘉宾
          </h2>
          <p id="speakers-subtitle" className="mt-4 max-w-xl mx-auto text-base text-slate-500">
            行业泰斗与科研一线领军者齐聚。深度解读“数据生命周期”、“数据底座重组”以及大模型落地痛点解决方案。
          </p>
        </div>

        {/* Speakers Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eventData.speakers.map((speaker) => {
            const isActive = activeSpeaker === speaker.id;
            return (
              <div
                id={`speaker-card-${speaker.id}`}
                key={speaker.id}
                className="group relative bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                onMouseEnter={() => setActiveSpeaker(speaker.id)}
                onMouseLeave={() => setActiveSpeaker(null)}
              >
                
                {/* Decorative background banner bar */}
                <div className="h-2.5 w-full bg-gradient-to-r from-[#0078D4] via-[#00B4D8] to-amber-400"></div>

                <div className="p-6 flex flex-col items-center text-center flex-grow">
                  
                  {/* Portrait Avatar Container */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-slate-50 shadow-inner group-hover:border-[#0078D4]/20 transition-colors duration-300">
                      <img
                        src={speaker.avatarUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {/* Badge for verified credentials */}
                    <div className="absolute bottom-1 right-1 bg-[#0078D4] text-white p-1 rounded-full shadow-md">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Speaker Meta Information */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0078D4] transition-colors duration-200">
                    {speaker.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-[#0078D4] tracking-wider uppercase font-mono mt-1 mb-2">
                    {speaker.company}
                  </p>
                  
                  <div className="px-3 py-1 rounded bg-[#F8FAFC] text-xs font-medium text-slate-600 border border-slate-100">
                    {speaker.title}
                  </div>

                  {/* Description text */}
                  <p className="text-sm text-slate-500 mt-4 leading-relaxed line-clamp-4">
                    {speaker.description}
                  </p>

                </div>

                {/* Speaker Card Footer with decorative actions */}
                <div className="px-6 py-4 border-t border-slate-50 bg-slate-50/50 flex justify-center gap-4 text-slate-400">
                  <div className="text-xs font-mono flex items-center gap-1 text-slate-400 hover:text-[#0078D4] transition-colors cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0078D4]" />
                    <span>咨询提问</span>
                  </div>
                  <span className="text-slate-200">|</span>
                  <div className="text-xs font-mono flex items-center gap-1 text-slate-400 hover:text-emerald-500 transition-colors cursor-pointer">
                    <Mail className="w-3.5 h-3.5 text-emerald-500" />
                    <span>联络对接</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Dynamic Panel discussion preview card */}
        <div id="panel-discussion-banner" className="mt-16 bg-gradient-to-r from-slate-900 via-[#0C1E36] to-slate-950 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle decoration elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-bold text-cyan-400 tracking-widest font-mono uppercase bg-cyan-950/50 px-3 py-1 rounded-full border border-cyan-800/30">
              ROUNDTABLE DISCUSSION
            </span>
            <h3 className="text-xl sm:text-2xl font-bold mt-3 mb-2">
              圆桌对话：智算浪潮中企业如何构建高性价比存力底座？
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              除了单体闪存卡性能外，多云协作、高能效绿电指标、长生命周期存储介质可靠性均是未来企业破局关键。
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="#agenda"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 rounded-lg text-sm font-semibold shadow-md transition-all"
            >
              了解圆桌详情
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
