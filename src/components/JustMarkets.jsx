import { Link } from "react-router-dom";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const broker = {
  name: "JustMarkets",
  logo: "/justmarkets.png",
  score: "9.6",
  founded: "2012",
  headquarters: "Cyprus",
  regulation: ["CySEC", "FSA", "FSCA", "FSC"],
  affiliateLink: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker",
};

const pros = [
  "NGN deposits and withdrawals supported",
  "Low minimum deposit from $1",
  "Tight spreads from 0.0 pips on Pro accounts",
  "Regulated by CySEC and multiple authorities",
  "Supports MT4 and MT5 platforms",
  "Generous welcome bonus for new traders",
  "24/7 customer support in multiple languages",
];

const cons = [
  "Not available to EU residents under CySEC entity",
  "Withdrawal processing can take up to 2 days",
  "Limited product range compared to larger brokers",
];

const fees = [
  { label: "EUR/USD Spread",  value: "0.0 pips",  note: "Pro account"      },
  { label: "EUR/USD Spread",  value: "0.3 pips",  note: "Standard account" },
  { label: "Commission",      value: "$3.00/lot",  note: "Pro account"      },
  { label: "Commission",      value: "None",       note: "Standard account" },
  { label: "Deposit Fee",     value: "Free",       note: "All methods"      },
  { label: "Withdrawal Fee",  value: "Free",       note: "All methods"      },
  { label: "Inactivity Fee",  value: "None",       note: "No charge"        },
];

const accounts = [
  {
    name: "Standard",
    minDeposit: "$1",
    spread: "From 0.3 pips",
    commission: "None",
    leverage: "Up to 1:3000",
    bestFor: "Beginners & casual traders",
  },
  {
    name: "Standard Cent",
    minDeposit: "$1",
    spread: "From 0.3 pips",
    commission: "None",
    leverage: "Up to 1:3000",
    bestFor: "New traders practicing with micro lots",
  },
  {
    name: "Pro",
    minDeposit: "$200",
    spread: "From 0.0 pips",
    commission: "$3.00/lot",
    leverage: "Up to 1:3000",
    bestFor: "Active & professional traders",
  },
  {
    name: "Raw Spread",
    minDeposit: "$100",
    spread: "From 0.0 pips",
    commission: "$3.00/lot",
    leverage: "Up to 1:3000",
    bestFor: "Scalpers & high-frequency traders",
  },
];

const depositMethods = [
  { method: "Nigerian Bank Transfer", deposit: "Instant",   withdrawal: "1–2 days", fee: "Free" },
  { method: "Opay / Palmpay",         deposit: "Instant",   withdrawal: "Instant",  fee: "Free" },
  { method: "Bitcoin (BTC)",          deposit: "~10 min",   withdrawal: "~10 min",  fee: "Free" },
  { method: "USDT (TRC20)",           deposit: "~1 min",    withdrawal: "~1 min",   fee: "Free" },
  { method: "Visa / Mastercard",      deposit: "Instant",   withdrawal: "1–5 days", fee: "Free" },
  { method: "Skrill",                 deposit: "Instant",   withdrawal: "Instant",  fee: "Free" },
  { method: "Neteller",               deposit: "Instant",   withdrawal: "Instant",  fee: "Free" },
];

const regulators = [
  { body: "CySEC", country: "Cyprus",       flag: "🇨🇾", license: "397/21",    tier: "Tier 1" },
  { body: "FSCA",  country: "South Africa", flag: "🇿🇦", license: "50455",     tier: "Tier 2" },
  { body: "FSA",   country: "Seychelles",   flag: "🇸🇨", license: "SD088",     tier: "Tier 3" },
  { body: "FSC",   country: "Mauritius",    flag: "🇲🇺", license: "GB22026814",tier: "Tier 3" },
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
export default function JustMarkets() {
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
            <span className="text-zinc-400">JustMarkets</span>
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
                  e.target.parentElement.innerHTML = `<span style="font-size:1.8rem;font-weight:700;color:#4ade80">J</span>`;
                }}
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 flex-wrap mb-2">
                <h1 className="font-playfair text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-zinc-50">
                  JustMarkets Review
                </h1>
                <span className="text-[0.62rem] font-bold px-2.5 py-0.5 rounded-full bg-linear-to-r from-green-700 to-green-500 text-white tracking-wide">
                  Best for MT5
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
                Visit JustMarkets
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 md:mt-8 md:px-4 flex justify-center">
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
  </a>
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
                    <td className="px-5 py-3.5 font-semibold text-green-400">{f.value}</td>
                    <td className="px-5 py-3.5 text-zinc-600 text-xs">{f.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
            ✓ Nigerian bank transfers and mobile wallets (Opay, Palmpay) are fully supported.
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
            JustMarkets is regulated by CySEC (Cyprus), one of the most respected financial regulators
            in Europe. Client funds are kept in segregated accounts with top-tier banks, and the broker
            offers negative balance protection on all account types — ensuring Nigerian traders cannot
            lose more than their deposited capital.
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <div className="flex flex-col items-center gap-4 py-10 border-t border-white/6 text-center">
          <p className="text-zinc-500 text-sm max-w-sm">
            Ready to start trading with JustMarkets? Open an account with as little as $1.
          </p>
          <a
            href={broker.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
          >
            Open JustMarkets Account
          </a>
          <p className="text-[0.65rem] text-zinc-700">
            Affiliate disclosure: We may earn a commission if you open an account via our link. This does not affect our ratings.
          </p>
        </div>

      </div>
      <div className="flex justify-center items-center md:my-12 px-2">
  <a 
    href="https://one.justmarkets.link/a/17thm0lpq8/?promo=4005"
    target="_blank"
    rel="noopener noreferrer sponsored"
    className="group relative block w-full max-w-3xl overflow-hidden border border-white/10 bg-white/2 transition-all hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
  >
    {/* Banner Image */}
    <img 
      src="https://justmarkets.com/uploads/promo_materials/jm-1200x628-leverage-3000-en.png" 
      alt="JustMarkets - 1:3000 Leverage"
      width="1200"
      height="628"
      className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
      loading="lazy"
    />

    {/* Subtle Glassmorphism Overlay Label */}
    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
      <p className="text-[9px] uppercase tracking-widest text-zinc-400 font-bold">
        JustMarkets Official Partner
      </p>
    </div>
  </a>
</div>
    </div>
  );
}