import { Link } from "react-router-dom";
import Author from "../components/Author";

/* ── Default data (used if no `broker` prop is passed) ──────────────────── */
const defaultBroker = {
  name: "JustMarkets",
  logo: "/justmarkets.png",
  score: "9.6",
  founded: "2012",
  headquarters: "Cyprus",
  regulation: ["CySEC", "FSA", "FSCA", "FSC"],
  affiliateLink: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker",
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function Stars({ score }) {
  const filled = Math.round((parseFloat(score) / 10) * 5);
  return (
    <span className="text-amber-400 text-base tracking-wide">
      {"★".repeat(filled)}{"☆".repeat(5 - filled)}
    </span>
  );
}

/* ── Component ────────────────────────────────────────────────────────────── */
export default function JustMarketsHero({ broker = defaultBroker }) {
  return (
    <div className="border-b border-white/6 bg-[#0d1117]">
      <div className="max-w-4xl mx-auto px-[5vw] py-8">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[0.7rem] text-zinc-600 mb-6">
          <Link to="/" className="hover:text-zinc-400 transition-colors no-underline">Home</Link>
          <span>›</span>
          <Link to="/brokers" className="hover:text-zinc-400 transition-colors no-underline">Brokers</Link>
          <span>›</span>
          <span className="text-zinc-400">{broker.name}</span>
        </div>

        <div className="flex items-start gap-6 flex-wrap">

          {/* Logo */}
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-white/4 border border-white/8 shrink-0 overflow-hidden">
            <img
              src={broker.logo}
              alt={broker.name}
              className="w-full h-full object-contain p-2"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span style="font-size:1.8rem;font-weight:700;color:#4ade80">${broker.name.charAt(0)}</span>`;
              }}
            />
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="font-playfair text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-zinc-50">
                {broker.name} Review
              </h1>
              <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white tracking-wide">
                Best for MT5
              </span>
            </div>

            <Stars score={broker.score} />

            <Author />

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.78rem] text-zinc-500 mb-5">
              <span>Regulated by: <span className="text-zinc-300">{broker.regulation.join(", ")}</span></span>
            </div>

            <a
              href={broker.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
            >
              Visit {broker.name}
              <span className="text-sm font-bold">→</span>
            </a>
          </div>
        </div>

        {/* SEO intro paragraph */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          JustMarkets Nigeria pairs a fully-featured MT5 trading environment with oversight from four regulators, including CySEC and FSCA, backed by over a decade of operating history since 2012. Nigerian traders get dedicated MT5 tools alongside multi-jurisdiction regulation, making JustMarkets a solid pick for forex, indices and commodities trading.
        </p>
      </div>

      {/* Partner offer banner */}
      <div className="mt-3 md:mt-8 md:px-4 flex justify-center">
        <a
          href="https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker?promo=5040"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block w-full max-w-5xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-300 hover:border-blue-500/30"
        >
          <img
            src="https://justmarkets.com/uploads/promo_materials/jm-banner-global-trusted-broker-en-1200x628.png"
            alt="JustMarkets - Global Trusted Broker"
            width="1200"
            height="628"
            className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="py-2 px-4 border-t border-white/5 flex justify-between items-center bg-black/20">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Partner Offer</span>
            <span className="text-[10px] text-zinc-500">JustMarkets Ltd</span>
          </div>
        </a>
      </div>
    </div>
  );
}