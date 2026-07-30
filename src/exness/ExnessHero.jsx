import { Link } from "react-router-dom";
import Author from "../components/Author";

/* ── Default data (used if no `broker` prop is passed) ──────────────────── */
const defaultBroker = {
  name: "Exness",
  logo: "/exness.png",
  score: "9.8",
  founded: "2008",
  headquarters: "Cyprus",
  regulation: ["FCA", "CySEC", "FSCA", "CBCS"],
  affiliateLink: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd",
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
export default function ExnessHero({ broker = defaultBroker }) {
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
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/4 border border-white/8 shrink-0 overflow-hidden">
            <img
              src={broker.logo}
              alt={broker.name}
              className="w-full h-full object-contain"
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
                {broker.name} Nigeria
              </h1>
              <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-amber-600 to-amber-400 text-black tracking-wide">
                Best Overall
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-400 text-gray-800 text-md font-bold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
            >
              Visit {broker.name}
              <span className="text-md font-bold">→</span>
            </a>
          </div>
        </div>

        {/* SEO intro paragraph */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Exness Nigeria offers spreads from 0.0 pips, instant NGN deposits and withdrawals via bank transfer and mobile wallets, and coverage from four regulators including the FCA and CySEC. Nigerian traders get MT4, MT5 and Exness Terminal access with no minimum deposit, making it one of the most accessible regulated brokers for trading forex, indices and commodities locally.
        </p>
      </div>

      {/* Partner offer banner */}
      <div className="flex justify-center items-center my-4 px-4">
        <a
          href="https://one.exnessonelink.com/intl/en/a/1sh0vxrgqd"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl transition-all hover:border-yellow-500/30"
        >
          <img
            src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Take_control_1200x628.png"
            alt="Exness - Take Control"
            className="w-full h-auto max-w-3xl transform transition-transform duration-500 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="py-2 px-4 border-t border-white/5 flex justify-between items-center bg-black/20">
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold">Partner Offer</span>
            <span className="text-[10px] text-zinc-500">Exness Global Limited</span>
          </div>
        </a>
      </div>
    </div>
  );
}