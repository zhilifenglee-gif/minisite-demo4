import React, { useState } from "react";
import { eventData } from "../data/eventData";
import { X, Check, Mail, Phone, User, Building, Briefcase, ChevronDown, Award, Calendar, MapPin, Sparkles } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (formData: any) => void;
}

export default function RegistrationModal({ isOpen, onClose, onSuccess }: RegistrationModalProps) {
  // Form fields state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [interestedProduct, setInterestedProduct] = useState(eventData.interestedProducts[0]);

  // Form errors state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Submission success state
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<{
    id: string;
    seat: string;
    name: string;
  } | null>(null);

  if (!isOpen) return null;

  // Basic validation rules
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "请输入姓名";
    if (!company.trim()) newErrors.company = "请输入公司名称";
    if (!position.trim()) newErrors.position = "请输入职位名称";
    
    // Email regex check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "请输入公司邮箱";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "请输入格式正确的公司邮箱";
    }

    // Phone regex check (China main number)
    const phoneRegex = /^1[3-9]\d{9}$/;
    if (!phone.trim()) {
      newErrors.phone = "请输入手机号码";
    } else if (!phoneRegex.test(phone)) {
      newErrors.phone = "请输入11位中国大陆手机号码";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate generating a unique high-class seat assignment
    const randomId = "HW-" + Math.floor(100000 + Math.random() * 900000);
    const alphabet = ["A", "B", "C", "D", "E"];
    const section = alphabet[Math.floor(Math.random() * alphabet.length)];
    const row = Math.floor(Math.random() * 15) + 1;
    const seatNum = Math.floor(Math.random() * 30) + 1;
    const seatLabel = `学术报告厅 - ${section}区${row}排${seatNum}座`;

    const ticketInfo = {
      id: randomId,
      seat: seatLabel,
      name: name,
    };

    setGeneratedTicket(ticketInfo);
    setIsSubmitted(true);
    
    // Callback to parent container to update registered users counter
    onSuccess(ticketInfo);
  };

  // Reset modal states on close
  const handleClose = () => {
    onClose();
    // Keep ticket state for next open if they want, or reset gracefully
    setTimeout(() => {
      setIsSubmitted(false);
      setGeneratedTicket(null);
      // reset fields
      setName("");
      setCompany("");
      setPosition("");
      setEmail("");
      setPhone("");
      setErrors({});
    }, 300);
  };

  return (
    <div id="registration-overlay" className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Dark blur glass backdrop */}
      <div 
        id="modal-backdrop"
        onClick={handleClose} 
        className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300"
      ></div>

      {/* Modal Main Frame */}
      <div 
        id="registration-card"
        className="relative bg-white rounded-3xl w-full max-w-lg overflow-hidden shadow-2xl border border-slate-100 z-10 animate-fade-in flex flex-col"
        style={{ maxHeight: "90vh" }}
      >
        {/* Top visual accent line */}
        <div className="h-2 w-full bg-gradient-to-r from-[#0078D4] via-[#00B4D8] to-rose-500"></div>

        {/* Modal Close Action */}
        <button
          id="btn-close-modal"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors z-20"
          aria-label="Close form"
        >
          <X className="w-5.5 h-5.5" />
        </button>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          
          {!isSubmitted ? (
            /* Registration Form */
            <form id="register-form" onSubmit={handleSubmit} className="space-y-5">
              
              {/* Form Title */}
              <div>
                <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center gap-2">
                  <span>立即报名参会</span>
                  <Sparkles className="w-5 h-5 text-amber-500 animate-pulse" />
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  请填写以下真实企业信息。经华为组委会审核通过后，电子入场券及参会二维码将直接发送至您的手机及邮箱。
                </p>
              </div>

              {/* Form Elements */}
              <div className="space-y-4">
                
                {/* Name */}
                <div id="field-group-name">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>姓名 *</span>
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="请输入姓名"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all ${
                      errors.name ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-[#0078D4]"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-rose-500 mt-1">{errors.name}</p>}
                </div>

                {/* Company Name */}
                <div id="field-group-company">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Building className="w-3.5 h-3.5 text-slate-400" />
                    <span>公司名称 *</span>
                  </label>
                  <input
                    id="input-company"
                    type="text"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder="请输入公司全称"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all ${
                      errors.company ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-[#0078D4]"
                    }`}
                  />
                  {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
                </div>

                {/* Position */}
                <div id="field-group-position">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                    <span>职位 *</span>
                  </label>
                  <input
                    id="input-position"
                    type="text"
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                    placeholder="例如: 首席信息官 CIO / IT总监 / 架构师"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all ${
                      errors.position ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-[#0078D4]"
                    }`}
                  />
                  {errors.position && <p className="text-xs text-rose-500 mt-1">{errors.position}</p>}
                </div>

                {/* Company Email */}
                <div id="field-group-email">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Mail className="w-3.5 h-3.5 text-slate-400" />
                    <span>公司邮箱 *</span>
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="请输入您的工作企业邮箱"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all ${
                      errors.email ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-[#0078D4]"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-rose-500 mt-1">{errors.email}</p>}
                </div>

                {/* Phone Number */}
                <div id="field-group-phone">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-slate-400" />
                    <span>手机号码 *</span>
                  </label>
                  <input
                    id="input-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="请输入11位手机号码"
                    className={`w-full px-4 py-2.5 rounded-xl border bg-slate-50/50 text-slate-900 text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all ${
                      errors.phone ? "border-rose-500 focus:border-rose-500" : "border-slate-200 focus:border-[#0078D4]"
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-rose-500 mt-1">{errors.phone}</p>}
                </div>

                {/* Interested Product (Dropdown) */}
                <div id="field-group-product">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    感兴趣的华为存储产品
                  </label>
                  <div className="relative">
                    <select
                      id="select-interested-product"
                      value={interestedProduct}
                      onChange={(e) => setInterestedProduct(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-slate-50/50 text-slate-900 text-sm appearance-none focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0078D4]/20 transition-all"
                    >
                      {eventData.interestedProducts.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3.5 top-3.5 w-4.5 h-4.5 text-slate-400 pointer-events-none" />
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="pt-2">
                <button
                  id="btn-submit-registration"
                  type="submit"
                  className="w-full py-3 text-base font-semibold text-white bg-gradient-to-r from-[#0078D4] to-[#0066CC] hover:from-[#0066CC] hover:to-[#0052A3] rounded-xl shadow-lg shadow-[#0078D4]/25 hover:shadow-xl hover:shadow-[#0078D4]/35 active:scale-99 transition-all cursor-pointer"
                >
                  确认立即报名
                </button>
                <p className="text-[10px] text-slate-400 mt-2 text-center leading-normal">
                  华为承诺严格保护您的个人隐私与数据安全。点击提交即代表您同意我们的《隐私政策》及接收相关的活动提醒通知。
                </p>
              </div>

            </form>
          ) : (
            /* Registration Success Admission Ticket Display */
            <div id="registration-ticket-area" className="flex flex-col items-center py-4">
              
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 border border-emerald-200 animate-scale-up">
                <Check className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight text-center">
                恭喜您！报名成功
              </h3>
              
              <p className="text-sm text-slate-500 text-center mt-1 mb-6 max-w-xs">
                组委会已收到您的参会申请，并自动为您预留贵宾专属座席。
              </p>

              {/* Huawei Digital VIP Pass Card */}
              <div 
                id="digital-vip-pass" 
                className="w-full bg-gradient-to-br from-slate-900 via-[#0B1E36] to-slate-950 rounded-2xl p-5 border border-slate-800 shadow-xl relative text-white text-left font-sans overflow-hidden"
              >
                {/* Shiny glass overlay glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#0078D4]/20 rounded-full filter blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#00B4D8]/10 rounded-full filter blur-2xl pointer-events-none"></div>

                {/* Ticket header */}
                <div className="flex justify-between items-center border-b border-slate-800 pb-3 mb-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold font-mono tracking-widest text-[#00B4D8]">HUAWEI ENTERPRISE VIP</span>
                    <span className="text-xs font-bold tracking-tight mt-0.5 text-slate-200">数据存储新春发布会</span>
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-[#0078D4] text-white px-2 py-0.5 rounded">
                    已确认
                  </span>
                </div>

                {/* Ticket Body details */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">姓名</span>
                      <span className="text-sm font-semibold">{generatedTicket?.name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-slate-400 block uppercase">席位编号</span>
                      <span className="text-xs font-mono font-semibold text-amber-400">{generatedTicket?.id}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block uppercase">专属座席</span>
                    <span className="text-xs font-semibold text-slate-100 flex items-center gap-1.5 mt-0.5">
                      <Award className="w-4 h-4 text-amber-400 shrink-0" />
                      {generatedTicket?.seat}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 border-t border-slate-800/60 pt-3">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">时间</span>
                      <span className="text-[11px] font-semibold text-slate-200">6月27日 14:00</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 block">地点</span>
                      <span className="text-[11px] font-semibold text-slate-200 truncate block">深圳国际会展中心</span>
                    </div>
                  </div>
                </div>

                {/* Mock Ticket QR Code and cutting teeth design */}
                <div className="flex items-center gap-4 border-t border-dashed border-slate-800 pt-4 mt-4">
                  {/* Mock vector QR Code using pure layout */}
                  <div className="w-14 h-14 bg-white p-1 rounded-lg flex flex-wrap gap-[2px] items-center justify-center shrink-0">
                    {/* Visual QR grids */}
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                    <div className="w-3.5 h-3.5 bg-slate-900 border border-white"></div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">手机电子通行证</span>
                    <p className="text-[10px] text-slate-300 leading-normal mt-0.5">
                      现场凭此QR码于自助签到终端处轻触扫码，即可领取纸质贵宾卡、同传耳机。
                    </p>
                  </div>
                </div>

              </div>

              {/* Action handles */}
              <div className="mt-8 flex gap-3 w-full">
                <button
                  id="btn-download-ticket"
                  onClick={() => alert(`入场电子凭证（卡号: ${generatedTicket?.id}）已下载至本地相册！\n同时参会指引已向您的邮箱及手机下发，请注意查收。`)}
                  className="flex-1 py-2.5 text-xs font-bold text-white bg-[#0078D4] hover:bg-[#0066CC] rounded-xl transition-all shadow cursor-pointer text-center"
                >
                  保存凭证至手机
                </button>
                <button
                  id="btn-close-success"
                  onClick={handleClose}
                  className="flex-1 py-2.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-all text-center cursor-pointer"
                >
                  完成
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
}
