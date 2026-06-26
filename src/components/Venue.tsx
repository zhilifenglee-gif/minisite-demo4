import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { MapPin, Navigation, Compass, Bus, Train, Info, ShieldAlert, CheckCircle } from "lucide-react";

export default function Venue() {
  const [activeTab, setActiveTab] = useState<"highlights" | "transit">("highlights");
  const [selectedBooth, setSelectedBooth] = useState<string | null>("booth-a");

  // Simulated Exhibition booths for interactive floorplan exploration
  const booths = [
    { id: "booth-a", name: "AI数据平台展区", location: "Hall 1 - A01", status: "重点展台", desc: "实测大模型推理加载指标，真机部署体验。" },
    { id: "booth-b", name: "高端全闪存Dorado体验区", location: "Hall 1 - B08", status: "满负荷吞吐", desc: "现场挑战百万IOPS极速延迟，可视化性能图谱。" },
    { id: "booth-c", name: "FusionCube超融合工作站", location: "Hall 1 - C12", status: "新品上市", desc: "面向中小型智算边缘的一站式交付实机。" },
  ];

  return (
    <section id="venue" className="py-24 bg-white relative scroll-mt-20">
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#E8F4FD]/40 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F4FD] border border-[#0078D4]/10 text-[#0078D4] text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>VENUE & EXHIBITION</span>
          </div>
          <h2 id="venue-title" className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            展会信息
          </h2>
          <p id="venue-subtitle" className="mt-4 max-w-xl mx-auto text-base text-slate-500">
            中国顶尖科技地标。在 10 万平米的未来馆里，华为设置了三大沉浸式交互展台，支持真机带电实测。
          </p>
        </div>

        {/* Major Tags Grid for immediate highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {eventData.venue.tags.map((tag, idx) => (
            <div 
              id={`venue-tag-${idx}`}
              key={idx}
              className="p-5 rounded-2xl bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] border border-slate-100 flex items-center justify-center gap-3 shadow-sm hover:shadow-md hover:border-[#0078D4]/20 transition-all text-slate-800 font-semibold text-lg"
            >
              <div className="w-3 h-3 rounded-full bg-[#0078D4] animate-pulse"></div>
              <span>{tag}</span>
            </div>
          ))}
        </div>

        {/* Master Details Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Floorplan Simulator */}
          <div className="lg:col-span-7 bg-slate-950 rounded-3xl p-6 border border-slate-800 shadow-2xl relative overflow-hidden text-white min-h-[460px] flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0078D4]/10 rounded-full filter blur-3xl pointer-events-none"></div>

            {/* Simulated Grid Floorplan Area */}
            <div>
              <div className="flex justify-between items-center mb-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0078D4] animate-pulse"></span>
                  <span className="text-xs font-bold font-mono text-slate-300 uppercase">Interactive Floorplan (Hall 1)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-500">ZOOM: 100% | ACTIVE</span>
              </div>

              {/* Graphical representation of booths */}
              <div className="grid grid-cols-12 gap-4 h-48 bg-[#070F1E] rounded-xl border border-slate-900 p-4 relative">
                
                {/* Visual architectural grids */}
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40"></div>

                {/* Booth representations as interactive nodes */}
                {booths.map((b) => {
                  const isSelected = selectedBooth === b.id;
                  return (
                    <button
                      key={b.id}
                      onClick={() => setSelectedBooth(b.id)}
                      className={`col-span-4 rounded-xl p-3 border transition-all relative flex flex-col justify-between text-left ${
                        isSelected 
                          ? "bg-[#0078D4]/20 border-[#0078D4] shadow-lg shadow-[#0078D4]/30 scale-102 z-10 text-white" 
                          : "bg-slate-900/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900 text-slate-400"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="text-[10px] font-mono font-bold bg-slate-850 px-1.5 py-0.5 rounded text-slate-300">
                          {b.location}
                        </span>
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>}
                      </div>
                      <span className="text-xs font-bold mt-2 truncate text-slate-100">{b.name}</span>
                    </button>
                  );
                })}

                {/* Static Keynote Stage representation */}
                <div className="col-span-12 bg-gradient-to-r from-rose-950/40 via-red-950/40 to-amber-950/40 border border-red-900/30 rounded-xl p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></div>
                    <span className="text-xs font-bold text-red-100">华为新春主发布大厅 (Keynote Hall)</span>
                  </div>
                  <span className="text-[10px] font-mono text-red-400 bg-red-950/50 px-2 py-0.5 rounded">2000座席满额</span>
                </div>

              </div>
            </div>

            {/* Selected Booth dynamic info card */}
            {selectedBooth && (
              <div className="mt-6 bg-slate-900/60 border border-slate-800 p-4 rounded-xl">
                {(() => {
                  const b = booths.find(item => item.id === selectedBooth);
                  if (!b) return null;
                  return (
                    <>
                      <div className="flex justify-between items-center mb-1">
                        <h4 className="text-sm font-bold text-[#0078D4]">{b.name}</h4>
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded">
                          {b.status}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {b.desc}
                      </p>
                    </>
                  );
                })()}
              </div>
            )}

            {/* Navigation action guide */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-slate-400">
              <Info className="w-4 h-4 text-[#0078D4]" />
              <span>提示: 点击平面图展位，可自主探索每个专业技术展区的特色和实机演示项目。</span>
            </div>

          </div>

          {/* Right Column: Address and Tabs (Highlights / Transit Info) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Address Header Card */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {eventData.venue.name}
              </h3>
              <p className="text-sm text-slate-500 flex items-start gap-2 leading-relaxed">
                <MapPin className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
                <span>
                  {eventData.venue.address}
                </span>
              </p>
              
              <div className="mt-4 flex gap-2">
                <a
                  href={`https://uri.amap.com/marker?position=113.811,22.706&name=${encodeURIComponent(eventData.venue.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-white bg-[#0078D4] hover:bg-[#0066CC] px-4 py-2 rounded-lg font-semibold shadow transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>高德地图导航</span>
                </a>
                <span className="text-xs text-slate-400 self-center">
                  * 距宝安国际机场约30分钟车程
                </span>
              </div>
            </div>

            {/* Tabs toggle */}
            <div className="flex border-b border-slate-100">
              <button
                id="venue-tab-highlights"
                onClick={() => setActiveTab("highlights")}
                className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all ${
                  activeTab === "highlights" 
                    ? "border-[#0078D4] text-[#0078D4]" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                三大展区亮点
              </button>
              <button
                id="venue-tab-transit"
                onClick={() => setActiveTab("transit")}
                className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all ${
                  activeTab === "transit" 
                    ? "border-[#0078D4] text-[#0078D4]" 
                    : "border-transparent text-slate-500 hover:text-slate-800"
                }`}
              >
                交通指引及贴士
              </button>
            </div>

            {/* Tab Contents: Highlights */}
            {activeTab === "highlights" && (
              <div id="venue-content-highlights" className="space-y-4">
                {eventData.venue.highlights.map((highlight, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Tab Contents: Transit Guide */}
            {activeTab === "transit" && (
              <div id="venue-content-transit" className="space-y-4">
                <div className="flex gap-3 items-start">
                  <Train className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">地铁出行</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      深圳地铁 20 号线、12 号线直达，于“国展站”或“国展北站”下车后步行即可直抵展馆南、北登录大厅。
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <Bus className="w-5 h-5 text-[#0078D4] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800">自驾与停车指引</h4>
                    <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                      导航“深圳国际会展中心地下停车场”，现场配备过万个新能源充电车位，参会嘉宾可在签到台扫码领取免费停车券。
                    </p>
                  </div>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 flex gap-2 items-start mt-2">
                  <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-[11px] text-amber-800 leading-normal">
                    温馨提示：新春及周末国展中心周边客流量较多，建议绿色出行。主会场于 13:30 准时开放入场。
                  </p>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
