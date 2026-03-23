import { Link } from "react-router-dom";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const stats = [
  { value: "120+", label: "Brokers reviewed"    },
  { value: "50k+", label: "Monthly traders"     },
  { value: "50+",  label: "Testing criteria"    },
  { value: "100%", label: "Independent"         },
];

const values = [
  {
    icon: "🔍",
    title: "Rigorous Testing",
    desc: "Every broker we review is hands-on tested with real accounts. We open accounts, make deposits, execute trades, and withdraw funds — just like you would.",
  },
  {
    icon: "🇳🇬",
    title: "Built for Nigeria",
    desc: "We test specifically for NGN deposit support, Naira withdrawal speed, local payment methods, and how brokers treat Nigerian clients.",
  },
  {
    icon: "⚖️",
    title: "Unbiased Rankings",
    desc: "Our rankings are never paid for. Brokers cannot buy a higher position. Affiliate commissions we earn do not influence scores or editorial content.",
  },
  {
    icon: "🔄",
    title: "Always Updated",
    desc: "Forex markets change fast. We revisit every broker review regularly to ensure spreads, fees, and regulatory status reflect current conditions.",
  },
];

const methodology = [
  { step: "01", title: "Account Opening",       desc: "We open live accounts and document every step of the onboarding process, including KYC verification time." },
  { step: "02", title: "NGN Deposit Test",       desc: "We fund accounts via Nigerian bank transfer, Opay, and Palmpay and record exact deposit times and any hidden fees." },
  { step: "03", title: "Live Trading",           desc: "We place real trades on major pairs including USD/NGN, EUR/USD and GBP/USD, checking spreads, slippage, and execution speed." },
  { step: "04", title: "Withdrawal Test",        desc: "We withdraw funds back to a Nigerian bank account and record the exact time from request to funds received." },
  { step: "05", title: "Regulation Check",       desc: "We verify every regulatory license directly with the relevant authority — FCA, CySEC, ASIC, FSCA — not just the broker's claims." },
  { step: "06", title: "Score & Publish",        desc: "We compile results across 50+ criteria, assign a score out of 10, and publish our findings with full transparency." },
];

/* ── Section title ────────────────────────────────────────────────────────── */
function SectionTitle({ children }) {
  return (
    <div className="mb-8">
      <h2 className="font-playfair text-[clamp(1.5rem,3vw,2.2rem)] font-semibold text-zinc-50 mb-2">
        {children}
      </h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full" />
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function About() {
  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Hero ── */}
      <div className="relative border-b border-white/6 bg-[#0d1117] overflow-hidden">

        {/* Grid bg */}
        <div
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,197,94,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.04) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        {/* Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(22,163,74,0.07) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative max-w-4xl mx-auto px-[5vw] py-16">
          <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/6 px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            Nigeria's Independent Forex Authority
          </div>

          <h1 className="font-playfair text-[clamp(2rem,5vw,3.4rem)] font-semibold text-zinc-50 leading-tight mb-5">
            We help Nigerian traders find<br />
            <em className=" italic font-normal text-green-400">
              brokers they can actually trust
            </em>
          </h1>

          <p className="text-base leading-7 text-zinc-400 font-light max-w-xl mb-8">
            fxbrokers.ng was built because Nigerian traders deserve the same quality of
            independent broker research that traders in the UK and US have access to —
            tested specifically for NGN deposits, Naira withdrawals, and local payment methods.
          </p>

          <div className="flex gap-3 flex-wrap">
            <Link
              to="/brokers"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
            >
              View broker reviews
            </Link>
            <Link
              to="/guides"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/10 text-zinc-400 text-sm rounded-lg no-underline hover:border-white/25 hover:text-white transition-all duration-200"
            >
              Read our guides
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-[5vw] py-14 flex flex-col gap-16">

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((st, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center gap-1 py-6 rounded-xl border border-white/6 bg-white/2 text-center"
            >
              <span className="font-playfair text-3xl font-semibold text-green-400 leading-none">
                {st.value}
              </span>
              <span className="text-[0.72rem] text-zinc-500 tracking-wide">{st.label}</span>
            </div>
          ))}
        </div>

        {/* ── Mission ── */}
        <section>
          <SectionTitle>Our Mission</SectionTitle>
          <div className="rounded-xl border border-green-500/[0.14] bg-green-500/3 p-6 text-[0.95rem] text-zinc-400 leading-relaxed">
            <p className="mb-4">
              The Nigerian forex market is growing fast — but the information available to Nigerian
              traders hasn't kept up. Most broker review sites are built for Western audiences and
              test for things that don't matter to traders in Lagos, Abuja, or Port Harcourt.
            </p>
            <p className="mb-4">
              At fxbrokers.ng, we test every broker the way a Nigerian trader would use it.
              We open accounts, fund them with Naira, trade, and withdraw — documenting every step.
              We check which brokers actually support Opay and Palmpay, which ones have competitive
              NGN conversion rates, and which ones process Naira withdrawals fastest.
            </p>
            <p>
              We are entirely independent. No broker pays to be ranked higher on our site. The
              affiliate commissions we earn help fund our research — but they never influence our
              scores or editorial judgment.
            </p>
          </div>
        </section>

        {/* ── Values ── */}
        <section>
          <SectionTitle>What We Stand For</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="flex flex-col gap-3 p-5 rounded-xl border border-white/6 bg-white/2 hover:border-green-500/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-green-500/8 border border-green-500/20">
                  {v.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 mb-1">{v.title}</h3>
                  <p className="text-[0.82rem] text-zinc-500 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Methodology ── */}
        <section>
          <SectionTitle>How We Test Brokers</SectionTitle>
          <div className="flex flex-col gap-3">
            {methodology.map((m, i) => (
              <div
                key={i}
                className="flex items-start gap-5 p-5 rounded-xl border border-white/6 bg-white/2 hover:border-green-500/20 transition-all duration-200 group"
              >
                <span className="font-playfair text-2xl font-semibold text-green-500/30 group-hover:text-green-500/60 transition-colors shrink-0 leading-none mt-0.5">
                  {m.step}
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-zinc-100 mb-1">{m.title}</h3>
                  <p className="text-[0.82rem] text-zinc-500 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Disclosure ── */}
        <section>
          <SectionTitle>Affiliate Disclosure</SectionTitle>
          <div className="rounded-xl border border-amber-500/[0.14] bg-amber-500/3 p-6 text-[0.88rem] text-zinc-400 leading-relaxed">
            <p className="mb-3">
              fxbrokers.ng earns revenue through affiliate partnerships with some of the brokers
              we review. This means we may receive a commission when a reader opens a trading account
              through a link on our site — at no extra cost to the reader.
            </p>
            <p>
              <span className="text-amber-400 font-semibold">Important: </span>
              Affiliate relationships never influence our broker scores, rankings, or editorial
              content. Brokers cannot pay to improve their rating or appear higher in our rankings.
              Our reviews reflect our genuine, independent assessment based on hands-on testing.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center gap-4 py-10 border-t border-white/6 text-center">
          <h2 className="font-playfair text-xl font-semibold text-zinc-50">
            Ready to find your broker?
          </h2>
          <p className="text-zinc-500 text-sm max-w-sm">
            Browse our independent reviews of the top forex brokers for Nigerian traders.
          </p>
          <Link
            to="/brokers"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-linear-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
          >
            Browse broker reviews
          </Link>
        </div>

      </div>
    </div>
  );
}