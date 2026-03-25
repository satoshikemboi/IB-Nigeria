import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for form submission (e.g., Formspree or custom API)
    console.log("Form Submitted:", formData);
    alert("Message sent! Our team will get back to you within 24 hours.");
  };

  return (
    <div className="min-h-screen bg-[#080c0e] pt-32 pb-20 selection:bg-green-500/30">
      <div className="max-w-6xl mx-auto px-[5vw]">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-zinc-50 mb-6 leading-tight">
            How can we <span className="text-green-400 italic">help you?</span>
          </h1>
          <p className="text-lg text-zinc-400 leading-relaxed">
            Have a question about a broker, found a discrepancy in our data, or want to discuss a partnership? We're here to provide the clarity you need.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-green-500 mb-6">Direct Channels</h3>
              <ul className="space-y-6">
                <li className="group">
                  <p className="text-[10px] uppercase text-zinc-500 mb-1 tracking-wider font-mono">Editorial Office</p>
                  <a href="mailto:contact@fxbrokers.ng" className="text-zinc-200 hover:text-green-400 transition-colors font-medium">
                    contact@fxbrokers.ng
                  </a>
                </li>
                <li className="group">
                  <p className="text-[10px] uppercase text-zinc-500 mb-1 tracking-wider font-mono">Telegram Community</p>
                  <a href="https://t.me/fxbrokersng" className="text-zinc-200 hover:text-green-400 transition-colors font-medium">
                    @fxbrokersng_hub
                  </a>
                </li>
                <li className="group">
                  <p className="text-[10px] uppercase text-zinc-500 mb-1 tracking-wider font-mono">Response Time</p>
                  <p className="text-zinc-200 font-medium italic">Usually within 24 hours</p>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/2">
              <h4 className="text-sm font-semibold text-zinc-50 mb-2">Report a Broker Scam</h4>
              <p className="text-xs text-zinc-500 leading-relaxed mb-4">
                If you've been defrauded by a broker, please include your MT4/MT5 account number and screenshots of withdrawal denials.
              </p>
              <button className="text-[10px] font-bold uppercase tracking-widest text-green-500 hover:text-green-400 transition-colors">
                Start Report →
              </button>
            </div>
          </div>

          {/* Right: Modern Form */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
                    placeholder="Chidi Azikiwe"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all"
                    placeholder="chidi@example.com"
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Reason for Inquiry</label>
                <select
                  id="subject"
                  className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-4 text-zinc-100 focus:outline-none focus:border-green-500/50 transition-all appearance-none cursor-pointer"
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option>General Inquiry</option>
                  <option>Broker Review Discrepancy</option>
                  <option>Scam Report</option>
                  <option>Partnership/Affiliate Inquiry</option>
                  <option>Technical Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 ml-1">Your Message</label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-4 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/20 transition-all resize-none"
                  placeholder="How can we assist your trading journey today?"
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-green-500 hover:bg-green-400 text-zinc-900 font-bold px-10 py-4 rounded-xl transition-all active:scale-[0.98] shadow-[0_0_20px_rgba(34,197,94,0.2)]"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}