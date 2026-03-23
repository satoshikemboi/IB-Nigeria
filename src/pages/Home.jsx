import { useEffect } from "react";
import { Link } from "react-router-dom";

/* ── Keyframes + fonts (only things Tailwind can't do at runtime) ─────────── */
const KEYFRAMES = `
html, body {
    max-width: 100%;
    overflow-x: hidden;
    position: relative;
  }
    
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse-dot {
    0%, 100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.5); }
    50%       { box-shadow: 0 0 0 6px rgba(34,197,94,0); }
  }

  .font-playfair { font-family: 'Playfair Display', serif; }
  .font-dm       { font-family: 'DM Sans', sans-serif; }

  .animate-ticker     { animation: ticker 44s linear infinite; }
  .animate-fade-up    { animation: fadeUp 0.75s ease both; }
  .animate-fade-up-d1 { animation: fadeUp 0.75s ease 0.15s both; }
  .animate-fade-up-d2 { animation: fadeUp 0.75s ease 0.30s both; }

  .pulse-dot { animation: pulse-dot 2s ease-in-out infinite; }

  .broker-row { animation: fadeUp 0.55s ease both; opacity: 0; animation-fill-mode: forwards; }
  .broker-row:nth-child(1) { animation-delay: 0.35s; }
  .broker-row:nth-child(2) { animation-delay: 0.46s; }
  .broker-row:nth-child(3) { animation-delay: 0.57s; }
  .broker-row:nth-child(4) { animation-delay: 0.68s; }
  .broker-row:nth-child(5) { animation-delay: 0.79s; }
  .broker-row:nth-child(6) { animation-delay: 0.90s; }

  .hero-bg {
    background: radial-gradient(ellipse 110% 80% at 65% 50%, #071a0f 0%, #080c0e 65%);
  }
  .hero-grid {
    background-image:
      linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px);
    background-size: 48px 48px;
  }
  .hero-glow {
    background: radial-gradient(circle, rgba(22,163,74,0.08) 0%, transparent 70%);
    filter: blur(40px);
  }
  .card-shadow {
    box-shadow: 0 32px 64px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(34,197,94,0.06);
  }

`;

/* ── Data ─────────────────────────────────────────────────────────────────── */
const brokers = [
  { rank: 1, name: "Exness",      logo: "/exness.png",      score: "9.8", spread: "0.0 pips", reg: "ASIC · CySEC", badge: "Best Overall", link: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd"       ,action:"Visit Site" },
  { rank: 2, name: "JustMarkets", logo: "/justmarkets.png", score: "9.6", spread: "0.1 pips", reg: "FCA · ASIC",   badge: null,           link: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker"   ,action:"Visit Site"},
  { rank: 3, name: "HFM",         logo: "/hfm.png",         score: "9.3", spread: "0.6 pips", reg: "CySEC · IFSC", badge: null,           link: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020"           ,action:"Visit Site"},
  { rank: 4, name: "FBS",         logo: "/fbs.png",         score: "9.1", spread: "0.8 pips", reg: "FCA · FINMA",  badge: null,           link: "https://fbs.partners?ibl=876040&ibp=35444511"                              ,action:"Visit Site"},
  { rank: 5, name: "XM Group",    logo: "/xm.png",          score: "8.9", spread: "1.2 pips", reg: "NFA · FCA",    badge: null,           link: "https://affs.click/MbQNk"                                                  ,action:"Visit Site"},
  { rank: 6, name: "FxPro",       logo: "/fxpro.png",       score: "8.7", spread: "1.3 pips", reg: "FCA · CySEC",  badge: null,           link: "https://direct-fxpro.com/en/partner/2xPncqjwh"                             ,action:"Visit Site"},
];

const tickers = [
  { pair: "EUR/USD", price: "1.0842", change: "+0.04%", up: true  },
  { pair: "GBP/USD", price: "1.2634", change: "+0.11%", up: true  },
  { pair: "USD/JPY", price: "149.32", change: "-0.07%", up: false },
  { pair: "USD/NGN", price: "1,590",  change: "+0.31%", up: true  },
  { pair: "AUD/USD", price: "0.6521", change: "+0.02%", up: true  },
  { pair: "EUR/NGN", price: "1,723",  change: "+0.18%", up: true  },
  { pair: "XAU/USD", price: "2318.4", change: "+0.21%", up: true  },
  { pair: "GBP/NGN", price: "2,010",  change: "-0.09%", up: false },
];

const stats = [
  { value: "120+", label: "Brokers reviewed" },
  { value: "50k+", label: "Monthly traders"  },
  { value: "100%", label: "Independent"      },
];

const trust = [
  "FCA Regulated", "ASIC Approved", "CySEC Licensed",
  "No Paid Rankings", "NGN Friendly",
];

/* ── Stars ────────────────────────────────────────────────────────────────── */
function Stars({ score }) {
  const filled = Math.round((parseFloat(score) / 10) * 5);
  return (
    <span className="text-amber-400 text-xs tracking-wide">
      {"★".repeat(filled)}{"☆".repeat(5 - filled)}
    </span>
  );
}

/* ── Ticker ───────────────────────────────────────────────────────────────── */
function Ticker() {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "100%",
        height: "36px",
        background: "#0d1117",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div
        className="animate-ticker"
        style={{
          display: "flex",
          gap: "2.5rem",
          whiteSpace: "nowrap",
          willChange: "transform",
          position: "absolute",
          left: 0,
        }}
      >
        {[...tickers, ...tickers].map((t, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem" }}>
            <span style={{ color: "#71717a", fontWeight: 500 }}>{t.pair}</span>
            <span style={{ color: "#d4d4d8", fontWeight: 500 }}>{t.price}</span>
            <span style={{ fontWeight: 500, color: t.up ? "#4ade80" : "#f87171" }}>{t.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Home ─────────────────────────────────────────────────────────────────── */
export default function Home() {
  useEffect(() => {
    if (!document.getElementById("fxb-kf")) {
      const tag = document.createElement("style");
      tag.id = "fxb-kf";
      tag.textContent = KEYFRAMES;
      document.head.appendChild(tag);
    }
  }, []);

  return (
    <div className="font-dm bg-[#080c0e] text-zinc-300 min-h-screen w-full overflow-x-hidden">

      {/* ── Live ticker ── */}
       <Ticker /> 

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">

        {/* Background layers */}
        <div className="absolute inset-0 z-0 hero-bg" />
        <div className="absolute inset-0 z-1 hero-grid pointer-events-none" />
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(700px,100vw)] h-100 rounded-full z-1 hero-glow pointer-events-none" />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-3 py-12 flex items-center gap-16 flex-wrap">

          {/* ── LEFT: headline + CTA ── */}
          <div className="flex-1 basis-96 animate-fade-up">

            {/* Trust pill */}
            <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/6 px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
              Nigeria's #1 Independent Forex Resource
            </div>

            {/* Headline */}
            <h1 className="font-playfair text-[clamp(2.1rem,4.2vw,3.6rem)] font-semibold leading-[1.18] tracking-tight text-zinc-50 mb-5">
              Find the{" "}
              <em className="italic font-normal text-green-400">
                best forex broker
              </em>
              <br />for Nigerian traders
            </h1>

            {/* Subheadline */}
            <p className="text-base leading-7 text-zinc-400 font-light max-w-115 mb-8">
              We test and rank brokers on NGN deposits, Naira withdrawals,
              low spreads, and regulation — everything that matters to
              traders in Nigeria.
            </p>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mb-9">
              <a
                href="/compare"
                className="inline-flex items-center gap-2 px-7 py-2 md:py-3.5 bg-linear-to-br from-green-600 to-green-700 text-white text-[0.95rem] font-medium rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(22,163,74,0.4)] no-underline"
              >
                Compare brokers ↗
              </a>
              <a
                href="/brokers"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent text-zinc-400 text-[0.95rem] border border-white/10 rounded-md transition-all duration-200 hover:border-white/30 hover:text-white no-underline"
              >
                View all rankings
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-9 flex-wrap pt-7 border-t border-white/[0.07] animate-fade-up-d2">
              {stats.map((st, i) => (
                <div key={i} className="flex flex-col gap-0.5">
                  <span className="font-playfair text-[1.75rem] font-semibold text-green-400 leading-none">
                    {st.value}
                  </span>
                  <span className="text-[0.72rem] text-zinc-500 tracking-wide">
                    {st.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: rankings card ── */}
          <div className="w-full md:flex-1 animate-fade-up-d1">
            <div className="bg-[rgba(13,18,15,0.92)] border border-green-500/[0.14] rounded-2xl px-2 md:p-6 py-6 backdrop-blur-xl w-full max-w-full md:max-w-[640px] card-shadow">

              {/* Card header */}
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="text-[0.92rem] font-medium text-zinc-100 mb-0.5">
                    🏆 Top Forex Brokers in{" "}
                    <span className="font-bold text-green-400">Nigeria</span>
                  </div>
                  <div className="text-[0.68rem] text-zinc-600">
                    Updated March 2026 · NGN deposits accepted
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[0.63rem] font-semibold tracking-widest text-green-400 border border-green-500/30 bg-green-500/[0.07] px-2.5 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 pulse-dot" />
                  LIVE
                </span>
              </div>

              {/* Col labels */}
              <div className="flex items-center gap-2 text-[0.62rem] text-zinc-600 uppercase tracking-widest pb-2 border-b border-white/5 mb-2 pl-1">
                <span className="w-5 shrink-0">#</span>
                <span className="flex-1">Broker</span>
                <span className="w-14 text-right">Score</span>
                <span className="w-18 text-right">Spread</span>
              </div>

              {/* Broker rows */}
              <div className="flex flex-col gap-2 overflow-x-hidden">
                {brokers.map((b) => (
                  <div
                    key={b.rank}
                    className="broker-row relative flex items-center gap-2.5 px-3 py-3 bg-white/2.5 border border-white/6 rounded-xl no-underline transition-all duration-200 hover:border-green-500/30 hover:bg-green-500/4 group"
                  >
                    {/* Best badge */}
                    {b.badge && (
                      <span className="absolute -top-2.5 right-3 text-[0.58rem] font-bold bg-linear-to-r from-amber-600 to-amber-400 text-black px-2 py-0.5 rounded-full tracking-wide">
                        {b.badge}
                      </span>
                    )}

                    {/* Rank */}
                    <span className={`w-2 md:w-4 shrink-0 text-center text-[0.78rem] font-semibold ${b.rank === 1 ? "text-amber-400" : "text-zinc-600"}`}>
                      {b.rank}
                    </span>

                    {/* Logo */}
                    <div className="w-11 h-11 rounded-lg shrink-0 flex items-center justify-center overflow-hidden bg-white/6 border border-white/8">
                      <img
                        src={b.logo}
                        alt={b.name}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerHTML = `<span style="font-size:0.82rem;font-weight:700;color:#4ade80">${b.name.charAt(0)}</span>`;
                        }}
                      />
                    </div>

                    {/* Name + reg + stars */}
                    <div className="flex-1 min-w-0">
                      <div className="text-[0.83rem] font-medium text-zinc-200 truncate mb-0.5 group-hover:text-green-400 transition-colors">
                        {b.name}
                      </div>
                      <div className="text-[0.62rem] text-zinc-600 mb-0.5">{b.reg}</div>
                      <Stars score={b.score} />
                    </div>

                    {/* Score */}
                    <div className="w-14 text-right shrink-0">
                      <span className="text-[0.92rem] font-semibold text-green-400">{b.score}</span>
                      <span className="text-[0.62rem] text-zinc-600">/10</span>
                    </div>

                    {/* Spread */}
                    <div className="md:w-18 text-right text-[0.73rem] text-zinc-400 shrink-0">
                      {b.spread}
                    </div>

                    {/* Action button */}
                    <a
                     href={b.link}
                     target="_blank"
                     rel="noopener noreferrer sponsored"
                     className="w-24 shrink-0 inline-flex items-center justify-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 no-underline group"
                     >
                      {b.action}
                        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                          ↗
                        </span>
                    </a>
                  </div>
                ))}
              </div>

              {/* Card footer */}
              <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/5">
                <span className="text-[0.65rem] text-zinc-600">
                  Scores based on 50+ tested criteria
                </span>
                <a
                  href="/brokers"
                  className="text-[0.75rem] text-green-400 font-medium no-underline hover:underline"
                >
                  Full rankings →
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="flex justify-center flex-wrap gap-x-9 gap-y-2 px-[5vw] py-4 bg-[#0d1117] border-t border-white/5">
        {trust.map((t, i) => (
          <span key={i} className="flex items-center gap-1.5 text-[0.73rem] text-zinc-500">
            <span className="text-green-400 font-bold">✓</span>
            {t}
          </span>
        ))}
      </div>

    </div>
  );
}