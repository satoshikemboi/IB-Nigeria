import { useState } from "react";
import { Link } from "react-router-dom";

/* ── Broker data ──────────────────────────────────────────────────────────── */
const brokerData = {
  exness: {
    id: "exness", name: "Exness", logo: "/exness.png", badge: "Best Overall", score: 9.8,
    link: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd",
    reviewLink: "/brokers/exness",
    spreads: { eurusd:"0.0 pips", gbpusd:"0.1 pips", usdjpy:"0.1 pips", commission:"$3.50/lot", minDeposit:"$0", inactivityFee:"None" },
    regulation: { fca:true, cysec:true, asic:false, fsca:true, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"Instant", fee:"Free" },
    platforms: ["MT4","MT5","Exness Terminal"], leverage:"Up to 1:2000", minDeposit:"$0",
  },
  justmarkets: {
    id: "justmarkets", name: "JustMarkets", logo: "/justmarkets.png", badge: "Best for MT5", score: 9.6,
    link: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker",
    reviewLink: "/brokers/justmarkets",
    spreads: { eurusd:"0.0 pips", gbpusd:"0.2 pips", usdjpy:"0.2 pips", commission:"$3.00/lot", minDeposit:"$1", inactivityFee:"None" },
    regulation: { fca:false, cysec:true, asic:false, fsca:true, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"1–2 days", fee:"Free" },
    platforms: ["MT4","MT5"], leverage:"Up to 1:3000", minDeposit:"$1",
  },
  hfm: {
    id: "hfm", name: "HFM", logo: "/hfm.png", badge: "Best Bonuses", score: 9.3,
    link: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020",
    reviewLink: "/brokers/hfm",
    spreads: { eurusd:"0.0 pips", gbpusd:"0.3 pips", usdjpy:"0.2 pips", commission:"$6.00/lot", minDeposit:"$0", inactivityFee:"$5/month" },
    regulation: { fca:true, cysec:true, asic:false, fsca:true, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"1–3 days", fee:"Free" },
    platforms: ["MT4","MT5","HFM App"], leverage:"Up to 1:2000", minDeposit:"$0",
  },
  xm: {
    id: "xm", name: "XM Group", logo: "/xm.png", badge: "Best for Beginners", score: 8.9,
    link: "https://affs.click/MbQNk",
    reviewLink: "/brokers/xm",
    spreads: { eurusd:"0.6 pips", gbpusd:"0.8 pips", usdjpy:"0.7 pips", commission:"None", minDeposit:"$5", inactivityFee:"$15/month" },
    regulation: { fca:false, cysec:true, asic:true, fsca:false, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"2–5 days", fee:"Free" },
    platforms: ["MT4","MT5"], leverage:"Up to 1:1000", minDeposit:"$5",
  },
  fbs: {
    id: "fbs", name: "FBS", logo: "/fbs.png", badge: "Most Trusted", score: 9.1,
    link: "https://fbs.partners?ibl=876040&ibp=35444511",
    reviewLink: "/brokers/fbs",
    spreads: { eurusd:"0.0 pips", gbpusd:"0.5 pips", usdjpy:"0.4 pips", commission:"$6.00/lot", minDeposit:"$1", inactivityFee:"$1/month" },
    regulation: { fca:false, cysec:true, asic:true, fsca:true, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"2–3 days", fee:"Free" },
    platforms: ["MT4","MT5","FBS App"], leverage:"Up to 1:3000", minDeposit:"$1",
  },
  fxpro: {
    id: "fxpro", name: "FxPro", logo: "/fxpro.png", badge: "Best Spreads", score: 8.7,
    link: "https://direct-fxpro.com/en/partner/2xPncqjwh",
    reviewLink: "/brokers/fxpro",
    spreads: { eurusd:"0.0 pips", gbpusd:"0.4 pips", usdjpy:"0.3 pips", commission:"$3.50/lot", minDeposit:"$100", inactivityFee:"$15/month" },
    regulation: { fca:true, cysec:true, asic:false, fsca:true, segregated:true, negBalance:true, tier:"Tier 1" },
    ngn: { bankTransfer:true, bankSpeed:"Instant", opay:true, palmpay:true, crypto:true, withdrawalSpeed:"2–3 days", fee:"Free" },
    platforms: ["MT4","MT5","cTrader","FxPro Edge"], leverage:"Up to 1:200", minDeposit:"$100",
  },
};

/* ── Preset matchups ──────────────────────────────────────────────────────── */
const matchups = [
  { id:"matchup1", a:"exness",      b:"justmarkets", label:"Most Popular",   default: true  },
  { id:"matchup2", a:"hfm",         b:"xm",          label:"Bonus Hunters",  default: false },
  { id:"matchup3", a:"fbs",         b:"fxpro",       label:"Pro Traders",    default: false },
];

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function Check({ val }) {
  if (val === true)  return <span className="text-green-400 text-base font-bold">✓</span>;
  if (val === false) return <span className="text-zinc-700 text-base">✕</span>;
  return <span className="text-zinc-200 text-sm font-medium">{val}</span>;
}

function Row({ label, aVal, bVal }) {
  return (
    <tr className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
      <td className="px-4 py-3 text-[0.78rem] text-zinc-500 w-1/3">{label}</td>
      <td className="px-4 py-3 text-center w-1/3"><Check val={aVal} /></td>
      <td className="px-4 py-3 text-center w-1/3"><Check val={bVal} /></td>
    </tr>
  );
}

function TableHead({ A, B }) {
  return (
    <thead>
      <tr className="border-b border-white/[0.04]">
        <th className="text-left px-4 py-2.5 text-[0.65rem] text-zinc-600 uppercase tracking-widest font-semibold w-1/3" />
        <th className="px-4 py-2.5 text-[0.65rem] text-green-400 uppercase tracking-widest font-semibold text-center w-1/3">{A.name}</th>
        <th className="px-4 py-2.5 text-[0.65rem] text-blue-400 uppercase tracking-widest font-semibold text-center w-1/3">{B.name}</th>
      </tr>
    </thead>
  );
}

function SectionBlock({ title, A, B, rows }) {
  return (
    <div className="rounded-xl border border-white/[0.06] overflow-hidden">
      <div className="px-5 py-3.5 bg-white/[0.02] border-b border-white/[0.06]">
        <h3 className="font-playfair text-base font-semibold text-zinc-50">{title}</h3>
      </div>
      <table className="w-full text-sm">
        <TableHead A={A} B={B} />
        <tbody>
          {rows.map((r, i) => <Row key={i} label={r.label} aVal={r.a} bVal={r.b} />)}
        </tbody>
      </table>
    </div>
  );
}

/* ── Logo ─────────────────────────────────────────────────────────────────── */
function BrokerLogo({ broker, size = "sm" }) {
  const dim = size === "lg" ? "w-64 h-64" : "w-9 h-9";
  return (
    <div className={`${dim} shrink-0 flex items-center justify-center overflow-hidden bg-white/[0.06] border border-white/[0.08]`}>
      <img
        src={broker.logo} alt={broker.name}
        className="w-full h-full object-contain p-1"
        onError={e => {
          e.target.style.display = "none";
          e.target.parentElement.innerHTML = `<span style="font-size:${size==="lg"?"1.3rem":"0.85rem"};font-weight:700;color:#4ade80">${broker.name.charAt(0)}</span>`;
        }}
      />
    </div>
  );
}

/* ── Comparison panel ─────────────────────────────────────────────────────── */
function ComparisonPanel({ matchup }) {
  const A = brokerData[matchup.a];
  const B = brokerData[matchup.b];

  return (
    <div className="flex flex-col gap-6 mt-8">

      {/* Broker header cards */}
      <div className="grid grid-cols-2 gap-4">
        {[A, B].map((broker, i) => (
          <div key={broker.id} className={`flex flex-col items-center gap-3 p-5 rounded-lg border ${i === 0 ? "border-green-500/25 bg-green-500/[0.03]" : "border-blue-500/25 bg-blue-500/[0.03]"}`}>
            <div className="">
                 <BrokerLogo broker={broker} size="lg" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-zinc-100">{broker.name}</div>
              <div className="text-[0.6rem] text-zinc-600 mt-0.5">{broker.badge}</div>
              <div className={`font-playfair text-2xl font-semibold mt-1 ${i === 0 ? "text-green-400" : "text-blue-400"}`}>
                {broker.score}<span className="text-xs text-zinc-600">/10</span>
              </div>
            </div>
            <a
              href={broker.link}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className={`w-full text-center text-md font-semibold py-2.5 rounded-sm text-white no-underline hover:-translate-y-0.5 transition-all duration-200 ${i === 0 ? "bg-gradient-to-br from-green-600 to-green-700" : "bg-gradient-to-br from-blue-600 to-blue-700"}`}
            >
              Visit Site
            </a>
          </div>
        ))}
      </div>

      {/* Overview */}
      <SectionBlock title="Overview" A={A} B={B} rows={[
        { label:"Overall score",   a:`${A.score}/10`,          b:`${B.score}/10`          },
        { label:"Min. deposit",    a:A.minDeposit,             b:B.minDeposit             },
        { label:"Max leverage",    a:A.leverage,               b:B.leverage               },
        { label:"Platforms",       a:A.platforms.join(", "),   b:B.platforms.join(", ")   },
      ]} />

      {/* Spreads & Fees */}
      <SectionBlock title="Spreads & Fees" A={A} B={B} rows={[
        { label:"EUR/USD spread",    a:A.spreads.eurusd,        b:B.spreads.eurusd        },
        { label:"GBP/USD spread",    a:A.spreads.gbpusd,        b:B.spreads.gbpusd        },
        { label:"USD/JPY spread",    a:A.spreads.usdjpy,        b:B.spreads.usdjpy        },
        { label:"Commission",        a:A.spreads.commission,    b:B.spreads.commission    },
        { label:"Inactivity fee",    a:A.spreads.inactivityFee, b:B.spreads.inactivityFee },
      ]} />

      {/* Regulation */}
      <SectionBlock title="Regulation & Safety" A={A} B={B} rows={[
        { label:"FCA (UK)",               a:A.regulation.fca,      b:B.regulation.fca      },
        { label:"CySEC (Cyprus)",         a:A.regulation.cysec,    b:B.regulation.cysec    },
        { label:"ASIC (Australia)",       a:A.regulation.asic,     b:B.regulation.asic     },
        { label:"FSCA (South Africa)",    a:A.regulation.fsca,     b:B.regulation.fsca     },
        { label:"Segregated funds",       a:A.regulation.segregated, b:B.regulation.segregated },
        { label:"Negative balance prot.", a:A.regulation.negBalance, b:B.regulation.negBalance },
        { label:"Regulatory tier",        a:A.regulation.tier,     b:B.regulation.tier     },
      ]} />

      {/* NGN Deposits */}
      <SectionBlock title="NGN Deposits & Withdrawals" A={A} B={B} rows={[
        { label:"Bank transfer",        a:A.ngn.bankTransfer,     b:B.ngn.bankTransfer     },
        { label:"Bank deposit speed",   a:A.ngn.bankSpeed,        b:B.ngn.bankSpeed        },
        { label:"Opay",                 a:A.ngn.opay,             b:B.ngn.opay             },
        { label:"Palmpay",              a:A.ngn.palmpay,          b:B.ngn.palmpay          },
        { label:"Crypto",               a:A.ngn.crypto,           b:B.ngn.crypto           },
        { label:"Withdrawal speed",     a:A.ngn.withdrawalSpeed,  b:B.ngn.withdrawalSpeed  },
        { label:"Deposit/withdrawal fee", a:A.ngn.fee,            b:B.ngn.fee              },
      ]} />

      {/* Full review links */}
      <div className="grid grid-cols-2 gap-3">
        {[A, B].map((broker, i) => (
          <Link
            key={broker.id}
            to={broker.reviewLink}
            className={`flex items-center justify-center gap-1.5 py-3 rounded-xl border text-sm font-medium no-underline transition-all duration-200 hover:-translate-y-0.5 ${
              i === 0
                ? "border-green-500/25 text-green-400 hover:bg-green-500/[0.05]"
                : "border-blue-500/25 text-blue-400 hover:bg-blue-500/[0.05]"
            }`}
          >
            Full {broker.name} review ↗
          </Link>
        ))}
      </div>

    </div>
  );
}

/* ── Matchup card ─────────────────────────────────────────────────────────── */
function MatchupCard({ matchup, isActive, onClick }) {
  const A = brokerData[matchup.a];
  const B = brokerData[matchup.b];

  return (
    <button
      onClick={onClick}
      className={`w-full text-left flex flex-col gap-4 p-5 rounded-lg border transition-all duration-200 cursor-pointer ${
        isActive
          ? "border-green-500/40 bg-green-500/[0.05]"
          : "border-white/[0.06] bg-white/[0.02] hover:border-white/[0.14] hover:bg-white/[0.04]"
      }`}
    >
      {/* Label */}
      <div className="flex items-center justify-between">
        <span className={`text-[0.65rem] font-semibold uppercase tracking-widest ${isActive ? "text-green-400" : "text-zinc-600"}`}>
          {matchup.label}
        </span>
        {isActive && (
          <span className="text-[0.6rem] font-bold text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded-full">
            Active
          </span>
        )}
      </div>

      {/* Broker pair */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 flex-1">
          <BrokerLogo broker={A} />
          <div>
            <div className="text-sm font-semibold text-zinc-100">{A.name}</div>
            <div className="text-[0.6rem] text-zinc-600">{A.score}/10</div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <span className="text-[0.65rem] font-bold text-zinc-600 border border-zinc-700 px-2 py-0.5 rounded-full">VS</span>
        </div>

        <div className="flex items-center gap-2 flex-1 justify-end text-right">
          <div>
            <div className="text-sm font-semibold text-zinc-100">{B.name}</div>
            <div className="text-[0.6rem] text-zinc-600">{B.score}/10</div>
          </div>
          <BrokerLogo broker={B} />
        </div>
      </div>

      {/* Arrow */}
      <div className={`text-xs text-center transition-colors ${isActive ? "text-green-400" : "text-zinc-600"}`}>
        {isActive ? "▲ Comparing now" : "Click to compare ↓"}
      </div>
    </button>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function Compare() {
  const [activeMatchup, setActiveMatchup] = useState("matchup1");

  const current = matchups.find(m => m.id === activeMatchup);

  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Header ── */}
      <div className="border-b border-white/[0.06] bg-[#0d1117]">
        <div className="max-w-4xl mx-auto px-[5vw] py-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/[0.06] px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Side-by-side broker comparison
          </div>
          <h1 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-zinc-50 leading-tight mb-3">
            Compare Brokers
          </h1>
          <p className="text-base text-zinc-400 font-light max-w-xl leading-relaxed">
            Click a matchup below to compare two brokers side-by-side across spreads,
            regulation, and NGN deposit methods.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-[5vw] py-10">

        {/* ── 3 matchup boxes ── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {matchups.map(m => (
            <MatchupCard
              key={m.id}
              matchup={m}
              isActive={activeMatchup === m.id}
              onClick={() => setActiveMatchup(m.id)}
            />
          ))}
        </div>

        {/* ── Comparison panel ── */}
        <ComparisonPanel matchup={current} />

      </div>
    </div>
  );
}