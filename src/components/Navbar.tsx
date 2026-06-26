import React, { useState, useEffect } from "react";
import { eventData } from "../data/eventData";
import { Menu, X, Database } from "lucide-react";

interface NavbarProps {
  onRegisterClick: () => void;
}

export default function Navbar({ onRegisterClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      // Determine which section is currently active
      const sections = eventData.navItems.map(item => item.href.replace("#", ""));
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="nav-header" className="sticky top-0 z-50 w-full bg-white/85 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo and Branding */}
          <a id="brand-logo" href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-tr from-rose-600 via-red-500 to-amber-500 rounded-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              {/* Custom abstract emblem resembling a storage matrix and Huawei petal dynamic */}
              <Database className="w-5.5 h-5.5 text-white" />
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
                HUAWEI <span className="text-red-600 font-light">|</span> <span className="font-medium text-slate-800">华为数据存储</span>
              </span>
              <span className="text-[10px] tracking-widest text-slate-400 font-mono uppercase">
                Enterprise Storage
              </span>
            </div>
          </a>

          {/* Desktop Navigation Menu */}
          <nav id="desktop-menu" className="hidden lg:flex items-center gap-1">
            {eventData.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  id={`nav-link-${sectionId}`}
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-[#0078D4] bg-[#E8F4FD]/50 font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center">
            <button
              id="nav-btn-register"
              onClick={onRegisterClick}
              className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#0078D4] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0052A3] rounded-lg shadow-md shadow-[#0078D4]/20 hover:shadow-lg hover:shadow-[#0078D4]/30 hover:-translate-y-0.5 transition-all duration-200"
            >
              立即报名
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div id="mobile-menu-panel" className="lg:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-2 shadow-inner">
          {eventData.navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                id={`mobile-nav-link-${sectionId}`}
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive
                    ? "text-[#0078D4] bg-[#E8F4FD]/50 font-semibold"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 px-4">
            <button
              id="mobile-nav-btn-register"
              onClick={() => {
                setIsOpen(false);
                onRegisterClick();
              }}
              className="w-full py-3 text-center text-base font-semibold text-white bg-[#0078D4] hover:bg-[#0066CC] rounded-lg shadow-md shadow-[#0078D4]/20 active:scale-98 transition-all"
            >
              立即报名
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
