import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VideoSection from "./components/VideoSection";
import Agenda from "./components/Agenda";
import Speakers from "./components/Speakers";
import Venue from "./components/Venue";
import PastReview from "./components/PastReview";
import Footer from "./components/Footer";
import RegistrationModal from "./components/RegistrationModal";
import { CheckCircle2, Award, ArrowUp, Calendar, ExternalLink } from "lucide-react";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredCount, setRegisteredCount] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load local storage registered state count for visual dynamic immersion
  useEffect(() => {
    const storedCount = localStorage.getItem("huawei_registered_local_count");
    if (storedCount) {
      setRegisteredCount(parseInt(storedCount, 10));
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle successful registration callback
  const handleRegistrationSuccess = (formData: any) => {
    const newCount = registeredCount + 1;
    setRegisteredCount(newCount);
    localStorage.setItem("huawei_registered_local_count", newCount.toString());

    // Show a beautiful corporate toast notice at the corner
    setToastMessage(`🎉 贵宾席预约成功！席位号 ${formData.id} 已分配给 ${formData.name}`);
    setTimeout(() => {
      setToastMessage(null);
    }, 6000);
  };

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="app-root-container" className="min-h-screen bg-white text-slate-800 antialiased selection:bg-[#0078D4]/20 selection:text-[#0078D4] flex flex-col font-sans">
      
      {/* 1. Header Navigation */}
      <Navbar onRegisterClick={() => setIsModalOpen(true)} />

      {/* Floating dynamic toast notification */}
      {toastMessage && (
        <div 
          id="corporate-registration-toast" 
          className="fixed bottom-6 right-6 z-50 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-2xl flex items-start gap-3 text-white max-w-sm animate-fade-in"
        >
          <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-bold font-mono text-[#00B4D8] block uppercase">座席分配通知</span>
            <p className="text-xs text-slate-300 mt-1 leading-normal">
              {toastMessage}
            </p>
          </div>
        </div>
      )}

      {/* 2. Hero Header Section */}
      <Hero onRegisterClick={() => setIsModalOpen(true)} registeredCount={registeredCount} />

      {/* 3. Interactive Video Showcase */}
      <VideoSection />

      {/* 4. Agenda Timeline Section */}
      <Agenda />

      {/* 5. Keynote Speakers Section */}
      <Speakers />

      {/* 6. Exhibition Venue Section */}
      <Venue />

      {/* 7. Historical Milestones & Past Reviews */}
      <PastReview />

      {/* Action Banner Panel to convert undecided visitors */}
      <section id="footer-cta-banner" className="py-20 bg-gradient-to-r from-[#0052A3] via-[#0078D4] to-[#00B4D8] text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full tech-grid opacity-15 pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            释放数据奥秘，共创智能跃迁
          </h2>
          <p className="text-base text-blue-100 max-w-xl mx-auto mb-8 leading-relaxed">
            与全球数万家核心政企客户并肩前行，抢占 AI 大模型时代的存力制高点。座席名额极其有限，立即报名保留入场资格。
          </p>
          <button
            id="cta-bottom-btn"
            onClick={() => setIsModalOpen(true)}
            className="px-10 py-4 rounded-xl bg-white text-[#0078D4] hover:text-[#0052A3] hover:scale-103 font-bold text-base shadow-lg hover:shadow-xl transition-all cursor-pointer"
          >
            立即报名参会
          </button>
        </div>
      </section>

      {/* 8. Registration popup Modal container */}
      <RegistrationModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSuccess={handleRegistrationSuccess}
      />

      {/* 9. Corporate Footer */}
      <Footer />

      {/* Smooth Scroll-To-Top float button */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white text-[#0078D4] hover:text-white hover:bg-[#0078D4] shadow-lg border border-slate-100 transition-all cursor-pointer animate-fade-in"
          aria-label="Scroll back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
