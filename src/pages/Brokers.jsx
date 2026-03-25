import { useState } from "react";
import { Link } from "react-router-dom";

const brokers = [
  { 
    id: 1, 
    name: "Exness", 
    logo: "/exness.png", 
    tag: "Best Overall", 
    path: "/brokers/exness",
    description: "Instant withdrawals and NGN accounts with spreads from 0.0 pips."
  },
  { 
    id: 2, 
    name: "JustMarkets", 
    logo: "/justmarkets.png", 
    tag: "Best for MT5", 
    path: "/brokers/justmarkets",
    description: "High leverage up to 1:3000 and excellent local bank transfer support."
  },
  { 
    id: 3, 
    name: "HFM", 
    logo: "/hfm.png", 
    tag: "Best Bonuses", 
    path: "/brokers/hfm",
    description: "Physical presence in Lagos and a wide range of account types."
  },
  { 
    id: 4, 
    name: "FBS", 
    logo: "/fbs.png", 
    tag: "Most Trusted", 
    path: "/brokers/fbs",
    description: "Great mobile trading app and 100% deposit bonus offers."
  },
  { 
    id: 5, 
    name: "XM Group", 
    logo: "/xm.png", 
    tag: "Best for Beginners", 
    path: "/brokers/xm",
    description: "World-class education, local seminars, and a $30 No-Deposit bonus."
  },
  { 
    id: 6, 
    name: "FxPro", 
    logo: "/fxpro.png", 
    tag: "Best Spreads", 
    path: "/brokers/fxpro",
    description: "Institutional execution speeds and access to the cTrader platform."
  },
];

const categories = ["All", "Best Overall", "Best for MT5", "Best Bonuses", "Most Trusted", "Best for Beginners", "Best Spreads"];

/* ── Broker card ──────────────────────────────────────────────────────────── */
function BrokerCard({ broker }) {
  return (
    <a
      href={broker.path}
      className="group flex flex-col items-center justify-center gap-4 p-6 rounded-2xl border border-white/6 bg-white/2 hover:border-green-500/30 hover:bg-green-500/4 transition-all duration-200 no-underline"
    >
      {/* Trophy icon */}
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500/8 border border-green-500/20 group-hover:bg-green-500/[0.14] transition-all duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11 17.938A8.001 8.001 0 0 1 12 2a8 8 0 0 1 1 15.938V20h3v2H8v-2h3v-2.062zM5 4H3a1 1 0 0 0-1 1v3a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2V6h1V4zm14 0h-1v2h1v3a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4V5a1 1 0 0 0-1-1z"/>
        </svg>
      </div>

      {/* Logo Area */}
      <div className="w-20 h-10 flex items-center justify-center relative">
        <img
          src={broker.logo}
          alt={broker.name}
          className="max-w-full max-h-full object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        <span className="hidden w-full h-full items-center justify-center text-lg font-bold text-green-400">
          {broker.name}
        </span>
      </div>

      {/* Info */}
      <div className="text-center">
        <p className="text-sm font-semibold text-zinc-100 group-hover:text-green-400 transition-colors duration-200">
          {broker.name}
        </p>
        <p className="text-[0.65rem] text-zinc-600 mt-0.5 uppercase tracking-wider font-bold">
          {broker.tag}
        </p>
      </div>
    </a>
  );
}

/* ── Brokers page ─────────────────────────────────────────────────────────── */
export default function Brokers() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? brokers
    : brokers.filter((b) => b.tag === activeCategory);

  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Page header ── */}
      <div className="border-b border-white/6 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-[5vw] py-12">

          <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/6 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Expert Reviewed · Updated March 2026
          </div>

          <h1 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-zinc-50 leading-tight mb-3">
            Broker Reviews
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed max-w-3xl">
            <span className="text-green-400 font-bold">fxbrokers.ng</span> provides unbiased forex <Link to="/brokers" className="underline">broker reviews</Link> and ratings to help Nigerian
            traders find the best broker for their needs. Our team tests and assesses brokers
            on over 50 variables including NGN deposit support, spreads, regulation, and
            withdrawal speed.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5vw] py-10">

        {/* ── Section title ── */}
        <div className="mb-8">
          <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-1">
            Featured Award Winners
          </h2>
          <div className="w-10 h-0.5 bg-green-500 rounded-full" />
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "text-green-400 bg-green-500/10 border-green-500/30"
                  : "text-zinc-500 bg-transparent border-white/6 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Broker grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {filtered.map((broker) => (
            <BrokerCard key={broker.id} broker={broker} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600 text-sm">
            No brokers found for this category.
          </div>
        )}

      </div>
      <div className="max-w-6xl mx-auto px-[5vw] py-12 border-t border-white/6">
  <div className="flex items-center gap-3 mb-8">
    <div className="w-1 h-6 bg-green-500 rounded-full" />
    <h2 className="text-xl font-playfair font-semibold text-zinc-50">Direct Sign Up Links</h2>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {[
      { name: "Exness Nigeria", url: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd", highlight: "Instant Withdrawals" },
      { name: "JustMarkets Nigeria", url: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker", highlight: "1:3000 Leverage" },
      { name: "HFM Nigeria", url: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020", highlight: "Local Lagos Office" },
      { name: "FBS Nigeria", url: "https://fbs.partners?ibl=876040&ibp=35444511", highlight: "100% Deposit Bonus" },
      { name: "XM Nigeria", url: "https://affs.click/MbQNk", highlight: "$30 No-Deposit Bonus" },
      { name: "FxPro Nigeria", url: "https://direct-fxpro.com/en/partner/2xPncqjwh", highlight: "Raw Spreads" },
    ].map((item, i) => (
      <a 
        key={i}
        href={item.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group flex flex-col p-4 rounded-sm border border-white/4 bg-white/2 hover:bg-white/4 hover:border-green-500/20 transition-all no-underline"
      >
        <div className="flex justify-between items-center mb-1">
          <span className="text-sm font-semibold text-zinc-200 underline group-hover:text-green-400">{item.name}</span>
          <span className="text-[10px] text-green-500/80 group-hover:translate-x-1 transition-transform">↗</span>
        </div>
      </a>
    ))}
  </div>
</div>
    </div>
  );
}