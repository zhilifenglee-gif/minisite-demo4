import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { Clock, Radio, User, Award, Users, MessageSquare, ChevronRight, FileText } from "lucide-react";

export default function Agenda() {
  const [hoveredSession, setHoveredSession] = useState<string | null>(null);
  const [selectedSession, setSelectedSession] = useState<string | null>("agenda-2"); // Default highlight main keynote

  // Mapping specific icons to agenda slots
  const getSessionIcon = (id: string) => {
    switch (id) {
      case "agenda-1":
        return <Radio className="w-5 h-5 text-emerald-500 animate-pulse" />;
      case "agenda-2":
        return <Award className="w-5 h-5 text-amber-500" />;
      case "agenda-3":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "agenda-4":
        return <Users className="w-5 h-5 text-purple-500" />;
      case "agenda-5":
        return <MessageSquare className="w-5 h-5 text-rose-500" />;
      default:
        return <Clock className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="agenda" className="py-24 bg-white relative scroll-mt-20">
      {/* Background visual graphics */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-blue-50/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4FD] border border-[#0078D4]/10 text-[#0078D4] text-xs font-semibold mb-3">
            <Clock className="w-3.5 h-3.5" />
            <span>AGENDA TIMELINE</span>
          </div>
          <h2 id="agenda-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            发布会议程
          </h2>
          <p id="agenda-subtitle" className="mt-4 max-w-xl mx-auto text-base text-slate-500">
            全生命周期高规格议题。汇聚全球闪存专家、AI芯片设计团队与先锋行业客户，共商万物智能时代的存力宏图。
          </p>
        </div>

        {/* Interactive Timeline Layout */}
        <div className="relative border-l-2 border-slate-100 ml-4 sm:ml-32 pl-6 sm:pl-10 space-y-8">
          
          {eventData.agenda.map((item, index) => {
            const isSelected = selectedSession === item.id;
            const isHovered = hoveredSession === item.id;
            
            return (
              <div
                id={`agenda-node-${item.id}`}
                key={item.id}
                className="relative group transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredSession(item.id)}
                onMouseLeave={() => setHoveredSession(null)}
                onClick={() => setSelectedSession(item.id)}
              >
                
                {/* Time Display Left Pillar (Desktop only) */}
                <div className="hidden sm:block absolute right-full mr-16 top-1 text-right w-24">
                  <span className="text-sm font-mono font-bold text-slate-400 group-hover:text-[#0078D4] transition-colors">
                    {item.time.split(" - ")[0]}
                  </span>
                  <span className="block text-[10px] text-slate-400 font-mono">
                    至 {item.time.split(" - ")[1]}
                  </span>
                </div>

                {/* Timeline Circle Node */}
                <div 
                  className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center border-2 bg-white transition-all duration-300 z-10 ${
                    isSelected 
                      ? "border-[#0078D4] shadow-md shadow-[#0078D4]/10 scale-110" 
                      : isHovered 
                        ? "border-[#0066CC]" 
                        : "border-slate-200"
                  }`}
                >
                  {getSessionIcon(item.id)}
                </div>

                {/* Agenda Details Card */}
                <div 
                  className={`p-6 rounded-xl border transition-all duration-300 ${
                    isSelected 
                      ? "bg-gradient-to-br from-white to-[#F0F7FF] border-[#0078D4]/30 shadow-lg shadow-[#0078D4]/5 scale-[1.01]" 
                      : "bg-white border-slate-100 hover:border-slate-200 shadow-sm"
                  }`}
                >
                  {/* Time Badge (Mobile only) */}
                  <div className="flex sm:hidden items-center gap-1.5 mb-2 text-[#0078D4] font-mono text-xs font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>

                  {/* Header title */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <h3 className={`text-lg font-bold transition-colors duration-200 ${
                        isSelected ? "text-[#0078D4]" : "text-slate-800 group-hover:text-[#0078D4]"
                      }`}>
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm font-medium text-slate-500 mt-1">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                    
                    {/* Expand Chevron Icon */}
                    <ChevronRight className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isSelected ? "rotate-90 text-[#0078D4]" : "group-hover:translate-x-0.5"
                    }`} />
                  </div>

                  {/* Body description (Fully visible when selected) */}
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      isSelected ? "max-h-40 opacity-100 mt-4 pt-4 border-t border-slate-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-slate-600 leading-relaxed bg-[#F8FAFC]/50 p-3 rounded-lg border border-slate-50">
                      {item.description}
                    </p>
                    
                    {/* Bottom visual tags to enrich description */}
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="text-[10px] bg-white text-slate-500 border border-slate-200 px-2.5 py-0.5 rounded-full font-mono">
                        #HuaweiSolutions
                      </span>
                      {item.id === "agenda-3" && (
                        <>
                          <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-0.5 rounded-full font-semibold">
                            🔥 全球首发
                          </span>
                          <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                            FusionCube A1000
                          </span>
                        </>
                      )}
                      {item.id === "agenda-2" && (
                        <span className="text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2.5 py-0.5 rounded-full font-semibold">
                          💡 核心趋势
                        </span>
                      )}
                    </div>
                  </div>

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom invitation quote box */}
        <div className="mt-16 text-center bg-slate-50 rounded-2xl p-6 border border-slate-100">
          <p className="text-sm text-slate-500 leading-relaxed italic">
            * 最终详细议程安排可能受不可抗力因素产生细微调整，请以当天现场发放的参会指南为准。
          </p>
        </div>

      </div>
    </section>
  );
}
