import { useState } from "react";
import { Link } from "react-router-dom";

const brokers = [
  {
    id: 1,
    name: "Exness",
    logo: "/exness.png",
    tag: "Best Overall",
    path: "/brokers/exness",
    description: "Instant withdrawals and NGN accounts with spreads from 0.0 pips.",
    signupUrl: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd",
  },
  {
    id: 2,
    name: "JustMarkets",
    logo: "/justmarkets.png",
    tag: "Best for MT5",
    path: "/brokers/justmarkets",
    description: "High leverage up to 1:3000 and excellent local bank transfer support.",
    signupUrl: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker",
  },
  {
    id: 3,
    name: "HFM",
    logo: "/hfm.png",
    tag: "Best Bonuses",
    path: "/brokers/hfm",
    description: "Physical presence in Lagos and a wide range of account types.",
    signupUrl: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020",
  },
  {
    id: 4,
    name: "FBS",
    logo: "/fbs.png",
    tag: "Most Trusted",
    path: "/brokers/fbs",
    description: "Great mobile trading app and 100% deposit bonus offers.",
    signupUrl: "https://fbs.partners?ibl=876040&ibp=35444511",
  },
  {
    id: 5,
    name: "XM Group",
    logo: "/xm.png",
    tag: "Best for Beginners",
    path: "/brokers/xm",
    description: "World-class education, local seminars, and a $30 No-Deposit bonus.",
    signupUrl: "https://affs.click/MbQNk",
  },
  {
    id: 6,
    name: "FxPro",
    logo: "/fxpro.png",
    tag: "Best Spreads",
    path: "/brokers/fxpro",
    description: "Institutional execution speeds and access to the cTrader platform.",
    signupUrl: "https://direct-fxpro.com/en/partner/2xPncqjwh",
  },
];

const categories = ["All", "Best Overall", "Best for MT5", "Best Bonuses", "Most Trusted", "Best for Beginners", "Best Spreads"];

/* ── Broker list item ─────────────────────────────────────────────────────── */
function BrokerListItem({ broker, rank }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-5 rounded-xl border border-white/6 bg-white/2 hover:border-green-500/25 hover:bg-green-500/4 transition-all duration-200">

      {/* Rank + Logo + Name/Tag/Description */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <span className="shrink-0 w-7 h-7 flex items-center justify-center rounded-full bg-white/4 border border-white/8 text-[0.7rem] font-bold text-zinc-500">
          {rank}
        </span>

        <div className="w-12 h-12 rounded-xl bg-white/4 border border-white/8 flex items-center justify-center overflow-hidden shrink-0">
          <img
            src={broker.logo}
            alt={broker.name}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-green-400">${broker.name.charAt(0)}</span>`;
            }}
          />
        </div>

        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-sm font-semibold text-zinc-100">{broker.name}</p>
            <span className="text-[0.5rem] font-semibold px-2 text-green-400 tracking-wide whitespace-nowrap">
              {broker.tag}
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-1 leading-relaxed">{broker.description}</p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-2 shrink-0">
        <Link
          to={broker.path}
          className="flex-1 sm:flex-none text-center px-4 py-2 rounded-lg border border-white/10 text-xs font-semibold text-zinc-300 no-underline hover:border-green-500/30 hover:text-green-400 transition-colors duration-200 whitespace-nowrap"
        >
          Read Review
        </Link>
        <a
          href={broker.signupUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="flex-1 sm:flex-none text-center px-4 py-2 rounded-lg bg-amber-400 text-gray-900 text-xs font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(245,158,11,0.35)] transition-all duration-200 whitespace-nowrap"
        >
          Visit Site
        </a>
      </div>
    </div>
  );
}

/* ── Broker comparison row ────────────────────────────────────────────────── */
function BrokerRow({ broker, isLast }) {
  return (
    <tr className={`${isLast ? "" : "border-b border-white/4"} hover:bg-white/2 transition-colors duration-150`}>
      <td className="px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center overflow-hidden shrink-0">
            <img
              src={broker.logo}
              alt={broker.name}
              className="max-w-full max-h-full object-contain p-1.5"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML = `<span class="text-xs font-bold text-green-400">${broker.name.charAt(0)}</span>`;
              }}
            />
          </div>
          <div>
            <p className="text-sm font-semibold text-zinc-100">{broker.name}</p>
            <p className="text-[0.6rem] text-green-400 uppercase tracking-wider font-bold mt-0.5">{broker.tag}</p>
          </div>
        </div>
      </td>

      <td className="px-5 py-4 text-xs text-zinc-400 leading-relaxed max-w-xs hidden sm:table-cell">
        {broker.description}
      </td>

      <td className="px-5 py-4">
        <div className="flex items-center justify-end gap-2 flex-nowrap">
          <Link
            to={broker.path}
            className="whitespace-nowrap px-3 py-2 rounded-lg border border-white/10 text-xs font-semibold text-zinc-300 no-underline hover:border-green-500/30 hover:text-green-400 transition-colors duration-200"
          >
            Read Review
          </Link>
          <a
            href={broker.signupUrl}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="whitespace-nowrap px-3 py-2 rounded-lg bg-amber-400 text-gray-900 text-xs font-bold no-underline hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(245,158,11,0.35)] transition-all duration-200"
          >
            Open Account
          </a>
        </div>
      </td>
    </tr>
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
        <div className="max-w-6xl mx-auto px-[5vw] py-4">

          <h1 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-zinc-50 leading-tight mb-3">
            Broker Reviews
          </h1>

          <p className="text-md text-zinc-300 leading-relaxed max-w-3xl">
            <span className="text-green-400 font-bold">fxbrokers.ng</span> provides unbiased forex reviews and ratings to help Nigerian
            traders find the best broker for their needs. Our team tests and assesses brokers
            on over 50 variables including NGN deposit support, spreads, regulation, and
            withdrawal speed.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5vw] py-8">

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
              className={`px-3 py-1 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? "text-green-400 bg-green-500/10 border-green-500/30"
                  : "text-zinc-500 bg-transparent border-white/6 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Broker list ── */}
        <div className="flex flex-col gap-3">
          {filtered.map((broker, i) => (
            <BrokerListItem key={broker.id} broker={broker} rank={i + 1} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-zinc-600 text-sm">
            No brokers found for this category.
          </div>
        )}

      </div>
    </div>
  );
}