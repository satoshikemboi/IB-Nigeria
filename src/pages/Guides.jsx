import { useState } from "react";
import { Link } from "react-router-dom";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const guides = [
  {
    id: 1,
    tag: "Sign Up",
    title: "How to create an exness account in Nigeria: A step-by-step guide",
  },
  {
    id: 2,
    tag: "Sign Up",
    title: "How to verify Exness account in Nigeria",
  },
  {
    id: 3,
    tag: "Sign Up",
    title: "The best forex brokers in Nigeria for 2026: A comprehensive review",
  },
  {
    id: 4,
    tag: "Sign Up",
    title: "Best CFD Brokers in Nigeria: Top Picks for 2026",
  },
  {
    id: 5,
    tag: "Brokers",
    title: "JustMarkets Nigeria",
  },
  {
    id: 6,
    tag: "Brokers",
    title: "Exness Nigeria",
  },
];

const tags = ["All","Sign Up","Brokers", "Deposits", "Withdrawals", "NGN Rates"];

const tagStyles = {
  Deposits:    "text-green-400 bg-green-500/[0.08] border-green-500/20",
  Withdrawals: "text-blue-400 bg-blue-500/[0.08] border-blue-500/20",
  "NGN Rates": "text-amber-400 bg-amber-500/[0.08] border-amber-500/20",
};

/* ── Guide row ────────────────────────────────────────────────────────────── */
function GuideRow({ guide, index }) {
    return (
      <Link
        to={`/guides/${guide.id}`}
        className="group flex items-center justify-between gap-4 py-4 border-b border-white/4 hover:bg-white/2 transition-all px-2"
      >
        <div className="flex items-center gap-5 min-w-0">
          {/* The Number - using the index prop */}
          <span className="text-xs font-mono text-zinc-600 shrink-0 tracking-tighter">
            {(index + 1).toString().padStart(2, '0')}
          </span>
  
          {/* The Title */}
          <h3 className="text-md font-medium leading-snug text-zinc-100 truncate group-hover:text-green-400 transition-colors">
            {guide.title}
          </h3>
        </div>
  
        {/* The Arrow */}
        <span className="text-md shrink-0 text-green-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
          ↗
        </span>
      </Link>
    );
  }

/* ── Guides page ──────────────────────────────────────────────────────────── */
export default function Guides() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? guides
    : guides.filter((g) => g.tag === activeTag);

  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Page header ── */}
      <div className="border-b border-white/6 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-[5vw] py-8">

          <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/6 px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Nigerian Trader Guides
          </div>

          <h1 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-zinc-50 leading-tight mb-3">
            Guides
          </h1>

          <p className="text-lg text-zinc-300 leading-relaxed text-pretty max-w-4xl">
            We bring transparency to the forex market through rigorous data analysis and
            hands-on testing. Our mission is to provide the industry's most accurate, unbiased
            reviews and expert guides, helping you choose the right broker with total confidence.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-[5vw] py-10">

        {/* ── Filter tabs ── */}
        <div className="flex items-center gap-2 mb-8 flex-wrap">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeTag === tag
                  ? "text-green-400 bg-green-500/10 border-green-500/30"
                  : "text-zinc-500 bg-transparent border-white/6 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {tag}
              <span className="ml-1.5 text-[0.6rem] opacity-60">
                {tag === "All" ? guides.length : guides.filter((g) => g.tag === tag).length}
              </span>
            </button>
          ))}
        </div>

        {/* ── Guide list ── */}
<div className="flex flex-col">
  {filtered.map((guide, index) => (
    <GuideRow 
      key={guide.id} 
      guide={guide} 
      index={index} // This sends the 0, 1, 2... to the row
    />
  ))}

  {filtered.length === 0 && (
    <div className="text-center py-16 text-zinc-600 text-sm">
      No guides found for this category.
    </div>
  )}
</div>

      </div>
    </div>
  );
}