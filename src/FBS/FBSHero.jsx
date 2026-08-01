import { Link } from "react-router-dom";
import Author from "../components/Author";

/* ── Default data (used if no `broker` prop is passed) ──────────────────── */
const defaultBroker = {
  name: "FBS",
  logo: "/fbs.png",
  score: "9.1",
  founded: "2009",
  headquarters: "Belize",
  regulation: ["IFSC", "CySEC", "FSCA", "ASIC"],
  affiliateLink: "https://fbs.partners?ibl=876040&ibp=35444511",
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
export default function FBSHero({ broker = defaultBroker }) {
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
                {broker.name} Nigeria
              </h1>
              <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white tracking-wide">
                Most Trusted
              </span>
            </div>

            <Stars score={broker.score} />

            <Author />

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.78rem] text-zinc-500 mb-5">
              <span>Regulated by: <span className="text-zinc-300">{broker.regulation.join(", ")}</span></span>
            </div>

            <a href={broker.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white text-md font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
            >
              Create {broker.name} Account
              <span className="text-md font-bold">→</span>
            </a>
          </div>
        </div>

        <script
          src="https://fbs.partners/banner/01c5297609adcf5c73615f166ce93fc463bf5c09f9f5b54b89439d820280bd0d/7976/script.js?ibp=35444511"
          id="01c5297609adcf5c73615f166ce93fc463bf5c09f9f5b54b89439d820280bd0d"
          async
        ></script>

        {/* SEO intro paragraph */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          FBS Nigeria is built for traders starting small, with a $1 minimum deposit, NGN deposits and withdrawals, and leverage up to 1:3000 on Cent and Micro accounts. Regulated by CySEC and ASIC alongside FSCA and IFSC, FBS pairs MT4 and MT5 trading with a 100% deposit bonus and a dedicated CopyTrade app for Nigerian traders.
        </p>
      </div>
    </div>
  );
}