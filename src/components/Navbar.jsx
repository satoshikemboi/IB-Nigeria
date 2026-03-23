import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "Brokers",   to: "/brokers"   },
  { label: "Guides",    to: "/guides"    },
  { label: "Compare",   to: "/compare"   },
  { label: "NGN Rates", to: "/ngn-rates" },
  { label: "About",     to: "/about"     },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a0f0c]/95 border-b border-white/6 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between gap-4">

        {/* ── Logo ── */}
        <Link to="/" className="flex items-center gap-2 no-underline group">
          {/* Nigerian flag accent */}
          <span className="flex pr-1">
            <span className="block w-3 h-6 bg-green-600" />
            <span className="block w-3 h-6 bg-white" />
            <span className="block w-3 h-6 bg-green-600" />
          </span>
          <span className="font-serif text-[1.18rem] font-semibold tracking-tight text-zinc-50 group-hover:text-green-400 transition-colors">
            fx<span className="text-green-400">brokers</span>
            <span className="text-zinc-500">.ng</span>
          </span>
        </Link>

        {/* ── Desktop links ── */}
        <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
          {links.map(({ label, to }) => {
            const active = pathname === to;
            return (
              <li key={to}>
                <Link
                  to={to}
                  className={`
                    relative px-3.5 py-2 rounded-md text-md font-medium transition-all duration-200 no-underline
                    ${active
                      ? "text-green-400 bg-green-500/10"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5"
                    }
                  `}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-3.5 h-0.5 bg-green-400 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ── Desktop right side ── */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* NGN chip */}
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-green-500/8 border border-green-500/20 text-[0.68rem] font-medium text-green-400 tracking-wide">
            🇳🇬 NGN
          </span>

          <Link
            to="/compare"
            className="px-4 py-2 text-[0.85rem] font-semibold text-white bg-linear-to-br from-green-600 to-green-700 rounded-md hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(22,163,74,0.4)] transition-all duration-200 no-underline"
          >
            Compare Brokers
          </Link>
        </div>

        {/* ── Mobile hamburger ── */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-white/6 transition-colors"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-5 bg-zinc-400 rounded-full transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-400 rounded-full transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-400 rounded-full transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* ── Mobile menu ── */}
<div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-dvh opacity-100" : "max-h-0 opacity-0"}`}>
  {/* Added pr-4 to balance the pl-4 and w-full to contain it */}
  <div className="border-t border-white/6 px-4 py-4 flex flex-col gap-1 w-full box-border">

    {links.map(({ label, to }) => {
      const active = pathname === to;
      return (
        <Link
          key={to}
          to={to}
          onClick={() => setOpen(false)}
          className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-all duration-150 no-underline w-full box-border ${
            active
              ? "text-green-400 bg-green-500/10 border border-green-500/20"
              : "text-zinc-400 hover:text-zinc-100 hover:bg-white/5 border border-transparent"
          }`}
        >
          {label}
          {active
            ? <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            : <span className="text-zinc-600 text-xs">→</span>
          }
        </Link>
      );
    })}

    {/* Divider */}
    <div className="my-2 border-t border-white/6 w-full" />

    {/* NGN info row */}
    <div className="flex items-center justify-between px-4 py-2 text-[0.7rem] text-zinc-500 w-full box-border">
      <span>Currency</span>
      <span className="inline-flex items-center gap-1.5 text-green-400 font-medium">
        🇳🇬 NGN
      </span>
    </div>

    {/* CTA */}
    <div className="px-2"> {/* Added a small wrapper for the button padding */}
      <Link
        to="/compare"
        onClick={() => setOpen(false)}
        className="mt-1 flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-white bg-green-600 rounded-lg no-underline"
      >
        Compare Nigerian Brokers
      </Link>
    </div>
  </div>
</div>
    </nav>
  );
}
