import { Link } from "react-router-dom";
import SEO from "./SEO";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const broker = {
  name: "FBS",
  logo: "/fbs.png",
  score: "9.1",
  founded: "2009",
  headquarters: "Belize",
  regulation: ["IFSC", "CySEC", "FSCA", "ASIC"],
  affiliateLink: "https://fbs.partners?ibl=876040&ibp=35444511",
};

const pros = [
  "Ultra-low minimum deposit from $1",
  "NGN deposits and withdrawals supported",
  "Up to 1:3000 leverage on Cent accounts",
  "100% deposit bonus for new traders",
  "Supports MT4 and MT5 platforms",
  "Fast order execution with no re-quotes",
  "24/7 multilingual customer support including African languages",
  "Dedicated copy trading app (FBS CopyTrade)",
];

const cons = [
  "IFSC regulation is lower tier than FCA or ASIC",
  "Inactivity fee after 90 days",
  "Limited instruments compared to larger brokers",
  "Withdrawal to Nigerian banks can take 2–3 days",
];

const fees = [
  { label: "EUR/USD Spread",  value: "0.0 pips",  note: "ECN account",        warn: false },
  { label: "EUR/USD Spread",  value: "1.0 pips",  note: "Standard account",   warn: false },
  { label: "EUR/USD Spread",  value: "3.0 pips",  note: "Cent account",       warn: false },
  { label: "Commission",      value: "$6.00/lot",  note: "ECN account",        warn: false },
  { label: "Commission",      value: "None",       note: "Standard & Cent",    warn: false },
  { label: "Deposit Fee",     value: "Free",       note: "All methods",        warn: false },
  { label: "Withdrawal Fee",  value: "Free",       note: "All methods",        warn: false },
  { label: "Inactivity Fee",  value: "$1/month",   note: "After 90 days idle", warn: true  },
];

const accounts = [
  {
    name: "Cent",
    minDeposit: "$1",
    spread: "From 3.0 pips",
    commission: "None",
    leverage: "Up to 1:1000",
    bestFor: "Absolute beginners trading with micro amounts",
  },
  {
    name: "Micro",
    minDeposit: "$5",
    spread: "From 3.0 pips",
    commission: "None",
    leverage: "Up to 1:3000",
    bestFor: "New traders wanting ultra-high leverage",
  },
  {
    name: "Standard",
    minDeposit: "$100",
    spread: "From 0.5 pips",
    commission: "None",
    leverage: "Up to 1:3000",
    bestFor: "Regular retail traders",
  },
  {
    name: "Zero Spread",
    minDeposit: "$500",
    spread: "From 0.0 pips",
    commission: "$20/lot",
    leverage: "Up to 1:3000",
    bestFor: "Scalpers who need ultra-tight spreads",
  },
  {
    name: "ECN",
    minDeposit: "$1,000",
    spread: "From 0.0 pips",
    commission: "$6.00/lot",
    leverage: "Up to 1:500",
    bestFor: "Professional & high-volume traders",
  },
  {
    name: "Crypto",
    minDeposit: "$1",
    spread: "Market spread",
    commission: "None",
    leverage: "Up to 1:5",
    bestFor: "Traders focused on cryptocurrency CFDs",
  },
];

const depositMethods = [
  { method: "Nigerian Bank Transfer", deposit: "Instant",  withdrawal: "2–3 days", fee: "Free" },
  { method: "Opay / Palmpay",         deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Bitcoin (BTC)",          deposit: "~10 min",  withdrawal: "~10 min",  fee: "Free" },
  { method: "USDT (TRC20)",           deposit: "~1 min",   withdrawal: "~1 min",   fee: "Free" },
  { method: "Visa / Mastercard",      deposit: "Instant",  withdrawal: "1–5 days", fee: "Free" },
  { method: "Skrill",                 deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Neteller",               deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Perfect Money",          deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
];

const regulators = [
  { body: "CySEC", country: "Cyprus",       flag: "🇨🇾", license: "331/17",    tier: "Tier 1" },
  { body: "ASIC",  country: "Australia",    flag: "🇦🇺", license: "426359",    tier: "Tier 1" },
  { body: "FSCA",  country: "South Africa", flag: "🇿🇦", license: "50885",     tier: "Tier 2" },
  { body: "IFSC",  country: "Belize",       flag: "🇧🇿", license: "000102/6",  tier: "Tier 3" },
];

const tierColor = {
  "Tier 1": "text-green-400 bg-green-500/[0.08] border-green-500/20",
  "Tier 2": "text-amber-400 bg-amber-500/[0.08] border-amber-500/20",
  "Tier 3": "text-zinc-400 bg-zinc-500/[0.08] border-zinc-500/20",
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

function SectionTitle({ children }) {
  return (
    <div className="mb-6">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-2">{children}</h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full" />
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function FBS() {
  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Hero / Overview ── */}
      <div className="border-b border-white/6 bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-[5vw] py-12">

          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-[0.7rem] text-zinc-600 mb-6">
            <Link to="/" className="hover:text-zinc-400 transition-colors no-underline">Home</Link>
            <span>›</span>
            <Link to="/brokers" className="hover:text-zinc-400 transition-colors no-underline">Brokers</Link>
            <span>›</span>
            <span className="text-zinc-400">FBS</span>
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
                  e.target.parentElement.innerHTML = `<span style="font-size:1.8rem;font-weight:700;color:#4ade80">F</span>`;
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-playfair text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-zinc-50">
                  FBS Review
                </h1>
                <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white tracking-wide">
                  Most Trusted
                </span>
              </div>

              <Stars score={broker.score} />

              <div className="flex items-center gap-1.5 mt-1 mb-4">
                <span className="text-2xl font-bold text-green-400">{broker.score}</span>
                <span className="text-zinc-600 text-sm">/10</span>
                <span className="text-zinc-600 text-xs ml-1">— Overall score</span>
              </div>

              <div className="flex flex-wrap gap-x-6 gap-y-1 text-[0.78rem] text-zinc-500 mb-5">
                <span>Founded: <span className="text-zinc-300">{broker.founded}</span></span>
                <span>HQ: <span className="text-zinc-300">{broker.headquarters}</span></span>
                <span>Regulated by: <span className="text-zinc-300">{broker.regulation.join(", ")}</span></span>
              </div>

              <a
                href={broker.affiliateLink}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
              >
                Visit FBS 
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-[5vw] py-12 flex flex-col gap-14">

        {/* ── Pros & Cons ── */}
        <section>
          <SectionTitle>Pros &amp; Cons</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-xl border border-green-500/[0.14] bg-green-500/3 p-5">
              <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-4">Pros</p>
              <ul className="flex flex-col gap-3">
                {pros.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-green-400 mt-0.5 shrink-0">✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-red-500/[0.14] bg-red-500/3 p-5">
              <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-4">Cons</p>
              <ul className="flex flex-col gap-3">
                {cons.map((c, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-zinc-300">
                    <span className="text-red-400 mt-0.5 shrink-0">✕</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Fees & Spreads ── */}
        <section>
          <SectionTitle>Fees &amp; Spreads</SectionTitle>
          <div className="rounded-xl border border-white/6 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/6 bg-white/2">
                  <th className="text-left px-5 py-3 text-[0.7rem] text-zinc-600 uppercase tracking-widest font-semibold">Fee type</th>
                  <th className="text-left px-5 py-3 text-[0.7rem] text-zinc-600 uppercase tracking-widest font-semibold">Amount</th>
                  <th className="text-left px-5 py-3 text-[0.7rem] text-zinc-600 uppercase tracking-widest font-semibold">Note</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((f, i) => (
                  <tr key={i} className={`border-b border-white/4 ${i % 2 === 0 ? "bg-transparent" : "bg-white/1.5"}`}>
                    <td className="px-5 py-3.5 text-zinc-300">{f.label}</td>
                    <td className={`px-5 py-3.5 font-semibold ${f.warn ? "text-red-400" : "text-green-400"}`}>
                      {f.value}
                    </td>
                    <td className="px-5 py-3.5 text-zinc-600 text-xs">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.7rem] text-zinc-600 mt-3">
            ⚠️ FBS charges a $1/month inactivity fee after 90 days of no trading activity.
          </p>
        </section>

        {/* ── Account Types ── */}
        <section>
          <SectionTitle>Account Types</SectionTitle>
          <div className="flex flex-col gap-3">
            {accounts.map((acc, i) => (
              <div key={i} className="rounded-xl border border-white/6 bg-white/2 hover:border-green-500/20 transition-all duration-200 p-5">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-4">
                  <div>
                    <h3 className="text-sm font-semibold text-zinc-100">{acc.name}</h3>
                    <p className="text-[0.72rem] text-zinc-600 mt-0.5">{acc.bestFor}</p>
                  </div>
                  <span className="text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border text-green-400 bg-green-500/8 border-green-500/20">
                    Min. {acc.minDeposit}
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Spread",     value: acc.spread     },
                    { label: "Commission", value: acc.commission  },
                    { label: "Leverage",   value: acc.leverage   },
                  ].map((item) => (
                    <div key={item.label} className="flex flex-col gap-0.5">
                      <span className="text-[0.62rem] text-zinc-600 uppercase tracking-widest">{item.label}</span>
                      <span className="text-xs font-medium text-zinc-200">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Deposits & Withdrawals ── */}
        <section>
          <SectionTitle>Deposits &amp; Withdrawals</SectionTitle>
          <div className="rounded-xl border border-white/6 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/6 bg-white/2">
                  {["Method", "Deposit time", "Withdrawal time", "Fee"].map((h) => (
                    <th key={h} className="text-left px-5 py-3 text-[0.7rem] text-zinc-600 uppercase tracking-widest font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {depositMethods.map((d, i) => (
                  <tr key={i} className={`border-b border-white/4 ${i % 2 === 0 ? "bg-transparent" : "bg-white/1.5"}`}>
                    <td className="px-5 py-3.5 text-zinc-300 font-medium">{d.method}</td>
                    <td className="px-5 py-3.5 text-green-400 text-xs font-medium">{d.deposit}</td>
                    <td className="px-5 py-3.5 text-green-400 text-xs font-medium">{d.withdrawal}</td>
                    <td className="px-5 py-3.5 text-zinc-400 text-xs">{d.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[0.7rem] text-zinc-600 mt-3">
            ✓ Nigerian bank transfers and mobile wallets (Opay, Palmpay) fully supported.
          </p>
        </section>

        {/* ── Regulation & Safety ── */}
        <section>
          <SectionTitle>Regulation &amp; Safety</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {regulators.map((r, i) => (
              <div key={i} className="flex items-center justify-between gap-4 px-5 py-4 rounded-xl border border-white/6 bg-white/2">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.flag}</span>
                  <div>
                    <p className="text-sm font-semibold text-zinc-100">{r.body}</p>
                    <p className="text-[0.68rem] text-zinc-600">{r.country} · #{r.license}</p>
                  </div>
                </div>
                <span className={`text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border ${tierColor[r.tier]}`}>
                  {r.tier}
                </span>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-green-500/[0.14] bg-green-500/3 p-5 text-sm text-zinc-400 leading-relaxed">
            FBS holds licenses from CySEC (Cyprus) and ASIC (Australia), two of the world's most
            respected financial regulators. All client funds are held in segregated accounts separate
            from company funds, and negative balance protection is offered across all retail accounts —
            ensuring Nigerian traders are protected from adverse market moves beyond their deposit.
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <div className="flex flex-col items-center gap-4 py-10 border-t border-white/6 text-center">
          <p className="text-zinc-500 text-sm max-w-sm">
            Ready to trade with FBS? Start with as little as $1 and claim your 100% deposit bonus.
          </p>
          <a
            href={broker.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
          >
            Open FBS Account 
          </a>
          <p className="text-[0.65rem] text-zinc-700">
            Affiliate disclosure: We may earn a commission if you open an account via our link. This does not affect our ratings.
          </p>
        </div>

      </div>
    </div>
  );
}