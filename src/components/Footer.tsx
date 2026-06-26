import React from "react";
import { Globe, Shield, FileText, HelpCircle, HeartHandshake, Laptop } from "lucide-react";

export default function Footer() {
  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-400 border-t border-slate-800 relative z-10 font-sans">
      
      {/* Upper footer links and directories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Column 1: Brand pitch */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-white tracking-tight uppercase">
                HUAWEI <span className="text-red-500 font-light">|</span> 华为数据存储
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              华为数据存储致力于构建全闪存、全智能、高安全、绿色低碳的数据基础设施。携手全球伙伴，赋能各行业释放非凡数字生命力。
            </p>
          </div>

          {/* Column 2: Documents */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#0078D4]" />
              <span>产品与解决方案文档</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="https://support.huawei.com/enterprise/zh/category/enterprise-storage-pid-1482622499113" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  OceanStor Dorado 产品白皮书
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/category/distributed-storage-pid-250852425" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  OceanStor Pacific 架构设计指南
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/category/hyper-converged-infrastructure-pid-22444315" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  FusionCube 智算超融合彩页
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  AI数据湖性能评测白皮书
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Tech support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-[#0078D4]" />
              <span>技术支持与社区</span>
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="https://support.huawei.com/enterprise/zh/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  华为企业技术支持中心
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  华为存储在线智能客服 (iKnow)
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  华为存储公开社区论坛
                </a>
              </li>
              <li>
                <a href="https://support.huawei.com/enterprise/zh/index.html" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  华为开发者计划与SDK下载
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200 mb-4 flex items-center gap-1.5">
              <HeartHandshake className="w-4 h-4 text-[#0078D4]" />
              <span>了解更多活动</span>
            </h4>
            <p className="text-xs text-slate-500 mb-3 leading-relaxed">
              关注华为最新发布，订阅行业洞察以及参会邀约，时刻站在数智变革前沿。
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="请输入您的邮箱"
                className="bg-slate-800 border border-slate-700 text-white text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:border-[#0078D4] w-full"
              />
              <button
                onClick={() => alert("订阅成功！感谢您对华为数据存储的关注。")}
                className="bg-[#0078D4] hover:bg-[#0066CC] text-white text-xs px-3 py-1.5 rounded-lg font-semibold transition-colors shrink-0"
              >
                订阅
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Under copyright bar */}
      <div className="border-t border-slate-800 bg-slate-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Left copyright copy */}
          <div className="text-xs text-slate-600">
            <span>©2026 华为技术有限公司 版权所有</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-slate-500">
            <a href="https://www.huawei.com/cn/legal" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Shield className="w-3.5 h-3.5" />
              <span>使用条款</span>
            </a>
            <a href="https://www.huawei.com/cn/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>隐私保护</span>
            </a>
            <a href="https://www.huawei.com/cn/legal/cookie-policy" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition-colors flex items-center gap-1">
              <Laptop className="w-3.5 h-3.5" />
              <span>Cookie政策声明</span>
            </a>
          </div>

          {/* Right Social icon simulations */}
          <div className="flex gap-4">
            {["微信公众号", "华为官方微博", "LinkedIn"].map((platform, idx) => (
              <span
                id={`social-link-${idx}`}
                key={idx}
                className="text-[10px] bg-slate-800/80 hover:bg-slate-800 text-slate-500 hover:text-white px-2.5 py-1 rounded-md border border-slate-800 transition-colors cursor-pointer"
                onClick={() => alert(`欢迎关注华为数据存储官方${platform}，最新动态将在此同步推送！`)}
              >
                {platform}
              </span>
            ))}
          </div>

        </div>
      </div>

    </footer>
  );
}
