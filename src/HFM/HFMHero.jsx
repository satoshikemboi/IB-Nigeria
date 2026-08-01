import { Link } from "react-router-dom";
import Author from "../components/Author";

/* ── Default data (used if no `broker` prop is passed) ──────────────────── */
const defaultBroker = {
  name: "HFM",
  logo: "/hfm.png",
  score: "9.3",
  founded: "2010",
  headquarters: "Cyprus",
  regulation: ["CySEC", "FCA", "FSCA", "DFSA", "FSA"],
  affiliateLink: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020",
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
export default function HFMHero({ broker = defaultBroker }) {
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
                {broker.name} Review
              </h1>
              <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white tracking-wide">
                Best Bonuses
              </span>
            </div>

            <Stars score={broker.score} />

            <Author />

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.78rem] text-zinc-500 mb-4">
              <span>Regulated by: <span className="text-zinc-300">{broker.regulation.join(", ")}</span></span>
            </div>

            <a
              href={broker.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white text-sm font-bold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
            >
              Visit {broker.name}
              <span className="text-md font-bold">→</span>
            </a>
          </div>
        </div>

        {/* SEO intro paragraph */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          HFM Nigeria (formerly HotForex) gives traders access to over 1,000 instruments, NGN deposits and withdrawals via local bank transfer, and licensing from five regulators including the FCA, CySEC and DFSA. With no minimum deposit on Cent and Micro accounts, MT4, MT5 and the HFM mobile app, plus regular deposit bonuses, HFM combines broad market access with dedicated support for African traders.
        </p>
      </div>

      {/* Partner offer banner */}
      <div className="w-full flex justify-center my-8 px-4">
        <div className="relative overflow-hidden rounded-sm border border-white/10 hover:border-green-500/30 transition-all duration-300 shadow-2xl">
          <a
            href="https://banner-api.hfm.com/link/0bdeda68?regulator=HFKE&refid=30515020"
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="block"
          >
            <img
              src="https://banner-api.hfm.com/banner/0bdeda68?regulator=HFKE&refid=30515020"
              alt="Trade with HFM"
              className="max-w-full h-auto block"
              width="728"
              height="90"
            />
          </a>
        </div>
      </div>
    </div>
  );
}