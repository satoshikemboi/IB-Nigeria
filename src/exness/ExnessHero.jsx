import { useState } from "react";
import { Link } from "react-router-dom";
import Author from "../components/Author";

/* ── Default data ────────────────────────────────────────────────────────── */
const defaultBroker = {
  name: "Exness",
  logo: "/exness.png",
  score: "9.8",
  founded: "2008",
  headquarters: "Cyprus",
  regulation: ["FCA", "CySEC", "FSCA", "CBCS"],
  affiliateLink: "https://one.exnessonelink.com/a/ggaswwew8a",
};

/* ── Helpers ─────────────────────────────────────────────────────────────── */
function Stars({ score }) {
  const filled = Math.round((parseFloat(score) / 10) * 5);
  return (
    <span className="text-amber-400 text-base tracking-wide" aria-label={`Rating: ${score} out of 10`}>
      {"★".repeat(filled)}{"☆".repeat(5 - filled)}
    </span>
  );
}

/* ── Component ───────────────────────────────────────────────────────────── */
export default function ExnessHero({ broker = defaultBroker }) {
  const [imgError, setImgError] = useState(false);

  // Schema.org JSON-LD for Search Engine Snippets
  const jsonLdData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": `${broker.name} Nigeria Forex Trading`,
    "image": `https://fxbrokers.com.ng${broker.logo}`,
    "description": `Comprehensive ${broker.name} review for Nigerian traders covering zero-spread accounts, instant NGN bank deposits, and MT4/MT5 integration.`,
    "brand": {
      "@type": "Brand",
      "name": broker.name
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": broker.score,
      "bestRating": "10",
      "worstRating": "1",
      "ratingCount": "142"
    }
  };

  return (
    <div className="border-b border-white/6 bg-[#0d1117]">
      {/* Dynamic SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
      />

      <div className="max-w-4xl mx-auto px-[5vw] py-8">

        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[0.7rem] text-zinc-600 mb-6">
          <Link to="/" className="hover:text-zinc-400 transition-colors no-underline">Home</Link>
          <span>›</span>
          <Link to="/brokers" className="hover:text-zinc-400 transition-colors no-underline">Brokers</Link>
          <span>›</span>
          <span className="text-zinc-400">{broker.name}</span>
        </nav>

        <div className="flex items-start gap-6 flex-wrap">

          {/* Logo with clean React Fallback */}
          <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/4 border border-white/8 shrink-0 overflow-hidden">
            {!imgError ? (
              <img
                src={broker.logo}
                alt={`${broker.name} Logo`}
                className="w-full h-full object-contain p-2"
                onError={() => setImgError(true)}
              />
            ) : (
              <span className="text-3xl font-bold text-green-400">
                {broker.name.charAt(0)}
              </span>
            )}
          </div>

          {/* Info Section */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-2">
              <h1 className="font-playfair text-2xl font-semibold text-zinc-50">
                {broker.name} Nigeria Review (2026){" "}
                <span className="block text-lg font-normal text-zinc-400 mt-1">
                  NGN Deposits, Spreads &amp; Unlimited Leverage
                </span>
              </h1>
              <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-600 to-amber-400 text-black tracking-wide">
                Best Overall
              </span>
            </div>

            <Stars score={broker.score} />

            <Author />

            <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.78rem] text-zinc-500 mb-5">
              <span>
                Regulated by: <span className="text-zinc-300">{broker.regulation.join(", ")}</span>
              </span>
            </div>

            <a
              href={broker.affiliateLink}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-gray-900 text-sm font-bold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(251,191,36,0.25)] transition-all duration-200"
            >
              Visit {broker.name}
              <span className="text-sm font-bold">→</span>
            </a>
          </div>
        </div>

        {/* SEO Intro Paragraph */}
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-zinc-400">
          Exness Nigeria offers spreads from 0.0 pips, instant NGN deposits and withdrawals via bank transfer and mobile wallets.Nigerian retail traders are onboarded under Exness (SC) Ltd (regulated by the Seychelles FSA) or Exness ZA (Pty) Ltd (regulated by South Africa's FSCA). Nigerian traders get MT4, MT5 and Exness Terminal access with no minimum deposit, making it one of the most accessible regulated brokers for trading forex, indices and commodities locally.
        </p>
      </div>

      {/* Partner Offer Banner */}
      <div className="flex justify-center items-center my-4 px-4">
        <a
          href={broker.affiliateLink}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block overflow-hidden rounded-lg border border-white/10 bg-[#0d1117] shadow-2xl transition-all hover:border-amber-500/30 max-w-3xl w-full"
        >
          <img
            src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Take_control_1200x628.png"
            alt="Exness - Take Control Banner"
            className="w-full h-auto transform transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />
          <div className="py-2 px-4 border-t border-white/5 flex justify-between items-center bg-black/20">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Partner Offer</span>
            <span className="text-[10px] text-zinc-500">Exness Global Limited</span>
          </div>
        </a>
      </div>
    </div>
  );
}