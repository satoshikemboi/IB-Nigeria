import ExnessHero from "./ExnessHero";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const broker = {
  name: "Exness",
  logo: "/exness.png",
  score: "9.8",
  founded: "2008",
  headquarters: "Cyprus",
  regulation: ["FCA", "CySEC", "FSCA", "CBCS"],
  affiliateLink: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd",
};

const pros = [
  "Instant NGN withdrawals via bank transfer",
  "Extremely low spreads from 0.0 pips on Raw accounts",
  "Regulated by FCA, CySEC and FSCA",
  "No minimum deposit on Standard accounts",
  "Supports MT4, MT5 and Exness Terminal",
  "24/7 multilingual customer support",
];

const cons = [
  "Limited educational resources for beginners",
  "Swap-free accounts have conditions",
];

const fees = [
  { label: "EUR/USD Spread",  value: "0.0 pips", note: "Raw account" },
  { label: "EUR/USD Spread",  value: "0.3 pips", note: "Standard account" },
  { label: "Commission",      value: "$3.50/lot", note: "Raw & Zero accounts" },
  { label: "Deposit Fee",     value: "Free",      note: "All methods" },
  { label: "Withdrawal Fee",  value: "Free",      note: "All methods" },
  { label: "Inactivity Fee",  value: "None",      note: "No charge" },
];

const accounts = [
  {
    name: "Standard",
    minDeposit: "$10",
    spread: "From 0.3 pips",
    commission: "None",
    leverage: "Up to 1:Unlimited",
    bestFor: "Beginners & casual traders",
  },
  {
    name: "Standard Cent",
    minDeposit: "$10",
    spread: "From 0.3 pips",
    commission: "None",
    leverage: "Up to 1:Unlimited",
    bestFor: "New traders practicing with small funds",
  },
  {
    name: "Raw Spread",
    minDeposit: "$200",
    spread: "From 0.0 pips",
    commission: "$3.50/lot",
    leverage: "Up to 1:Unlimited",
    bestFor: "Active & scalping traders",
  },
  {
    name: "Zero",
    minDeposit: "$200",
    spread: "0.0 pips on 30 instruments",
    commission: "From $0.05/lot",
    leverage: "Up to 1:Unlimited",
    bestFor: "High-volume traders",
  },
  {
    name: "Pro",
    minDeposit: "$200",
    spread: "From 0.1 pips",
    commission: "None",
    leverage: "Up to 1:Unlimited",
    bestFor: "Professional & experienced traders",
  },
];

const depositMethods = [
  { method: "Nigerian Bank Transfer", deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Opay / Palmpay",         deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Bitcoin (BTC)",          deposit: "~10 min",  withdrawal: "~10 min",  fee: "Free" },
  { method: "USDT (TRC20)",           deposit: "~1 min",   withdrawal: "~1 min",   fee: "Free" },
  { method: "Perfect Money",          deposit: "Instant",  withdrawal: "Instant",  fee: "Free" },
  { method: "Visa / Mastercard",      deposit: "Instant",  withdrawal: "1–5 days", fee: "Free" },
];

const regulators = [
  { body: "FCA",  country: "United Kingdom", flag: "🇬🇧", license: "730729",  tier: "Tier 1" },
  { body: "CySEC",country: "Cyprus",         flag: "🇨🇾", license: "178/12",  tier: "Tier 1" },
  { body: "FSCA", country: "South Africa",   flag: "🇿🇦", license: "51024",   tier: "Tier 2" },
];

const tierColor = {
  "Tier 1": "text-green-400 bg-green-500/[0.08] border-green-500/20",
  "Tier 2": "text-amber-400 bg-amber-500/[0.08] border-amber-500/20",
  "Tier 3": "text-zinc-400 bg-zinc-500/[0.08] border-zinc-500/20",
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function SectionTitle({ children }) {
  return (
    <div className="mb-6">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-2">{children}</h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full" />
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function Exness() {
  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm pb-24">

      <ExnessHero broker={broker} />

      <div className="max-w-4xl mx-auto px-[5vw] py-12 flex flex-col gap-14">

        {/* ── Pros & Cons ── */}
        <section>
          <SectionTitle>Pros &amp; Cons</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Pros */}
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

            {/* Cons */}
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
          <section className="mt-2 mb-6 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Exness Spreads, Commissions, and Overnight Swap Fees
      </h2>
      <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Exness operates a transparent pricing model with low transaction costs across its entire suite of assets. Trading fees depend on whether you select a commission-free or raw pricing structure. The <strong>Standard</strong> account features variable spreads starting from 0.2 pips with zero commissions, while the <strong>Pro</strong> account provides instant execution with spreads starting from 0.1 pips and no commission fees. For traders seeking direct liquidity access, the <strong>Raw Spread</strong> account offers pips starting at 0.0 with a fixed commission of up to $3.50 per lot per side ($7.00 round turn). Meanwhile, the <strong>Zero</strong> account guarantees a 0.0 pip spread on top 30 instruments for most of the trading day, charging a custom commission per side that starts from $0.05 per lot. Across all account tiers, Nigerian clients enjoy zero fee charges on local bank deposits or withdrawals and access swap-free trading on major forex pairs, crypto, and gold (XAU/USD).
      </p>
    </section>
    <a href="https://one.exnessonelink.com/intl/en/a/ggaswwew8a">
          <img src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Spreads_Toomuch_1200x1200.jpg" width="1200" height="1200" alt="" />
        </a>
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
          <section className="mt-8 pb-4 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Exness Account Types in Nigeria
      </h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Exness caters to traders of all experience levels across Nigeria by categorizing its trading accounts into two main structures: Standard and Professional. For beginner retail traders, the <strong>Standard</strong> and <strong>Standard Cent</strong> accounts offer a zero minimum deposit requirement, commission-free trading, and user-friendly spreads, making them ideal for practicing strategies or managing smaller NGN capital. For experienced market participants, scalpers, and algorithmic traders, the <strong>Raw Spread</strong>, <strong>Zero</strong>, and <strong>Pro</strong> accounts deliver raw market execution with spreads starting as low as 0.0 pips and competitive commission tiers. Regardless of the chosen option, all Exness accounts created in Nigeria feature automatic swap-free status (Islamic account compatibility), flexible leverage options reaching up to 1:Unlimited, seamless integration with MetaTrader 4 (MT4), MetaTrader 5 (MT5), and the Exness Terminal, alongside direct local bank transfers for instant deposits and withdrawals.
      </p>
    </section>
    <a href="https://one.exnessonelink.com/intl/en/a/ggaswwew8a">
          <img src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Trading_Conditions_1200x1200px.png" width="1200" height="1200" alt="" />
        </a>
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
        <section className="mt-8 pb-6 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Exness Deposits and Withdrawals for Nigerian Traders
      </h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Exness sets a benchmark in financial accessibility for retail traders in Nigeria through its automated, zero-fee payment infrastructure. Nigerian traders can fund their accounts and withdraw earnings using direct NGN bank transfers (including major institutions like GTBank, Access Bank, and Zenith), local fintech solutions (Opay and PalmPay), e-wallets (Skrill, Neteller, Perfect Money), and crypto networks (USDT TRC-20 and Bitcoin). Deposits start at roughly $10 (~₦15,000) for Standard accounts, or as low as $1 on Standard Cent accounts, with instant account crediting across most electronic methods. Financial transactions operate 24/7 with over 98% of withdrawal requests processed automatically within minutes, eliminating manual weekend or holiday delays. Furthermore, Exness enforces strict fund segregation alongside a transparent return-to-source policy, ensuring that capital returns safely through the same channels used for funding without hidden broker commission charges.
      </p>
    </section>
    <a href="https://one.exnessonelink.com/intl/en/a/ggaswwew8a">
          <img src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Discover_seamless_withdrawals_1200x628.png" width="1200" height="628" alt="" />
        </a>
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
            ✓ Nigerian bank transfers and mobile wallets (Opay, Palmpay) are fully supported with instant processing.
          </p>
        </section>

        {/* ── Regulation & Safety ── */}
        <section>
        <section className="mt-8 mb-6 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Is Exness Safe &amp; Regulated? Multi-Jurisdictional Security
      </h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Exness operates as a globally authorized broker overseen by prominent financial regulators, ensuring a safe and transparent environment for international and retail traders alike. The Exness Group maintains active licensing across Tier-1 and Tier-2 authorities, including the Financial Conduct Authority (FCA) in the UK, Cyprus Securities and Exchange Commission (CySEC), Financial Sector Conduct Authority (FSCA) in South Africa, Capital Markets Authority (CMA) in Kenya, Financial Services Authority (FSA) in Seychelles, Central Bank of Curaçao and Sint Maarten (CBCS), and the Financial Services Commission (FSC) in the British Virgin Islands and Mauritius. To safeguard capital, Exness enforces strict client fund segregation by keeping retail money in separate tier-1 banking accounts completely isolated from company operating funds. Furthermore, all trading accounts feature built-in Negative Balance Protection to prevent accounts from dropping below zero during severe market volatility, backed by 3D Secure payment authentication, PCI DSS compliance, and DDoS-protected infrastructure.
      </p>
    </section>
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
            Exness holds licenses from top-tier regulators including the FCA (UK) and CySEC (Cyprus),
            making it one of the most regulated brokers available to Nigerian traders. Client funds are
            held in segregated accounts, and negative balance protection is offered across all account types.
          </div>
        </section>

        {/* ── Bottom CTA ── */}
        <div className="flex flex-col items-center gap-4 py-10 border-t border-white/6 text-center">
          <p className="text-zinc-500 text-sm max-w-sm">
            Ready to start trading with Exness? Open an account with no minimum deposit.
          </p>
          <a
            href={broker.affiliateLink}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-flex items-center gap-2 px-8 py-2.5 bg-amber-400 text-gray-800 text-lg font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
          >
            Register with Exness
          </a>
          <p className="text-[0.65rem] text-zinc-700">
            Affiliate disclosure: We may earn a commission if you open an account via our link. This does not affect our ratings.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center py-10 px-4">
        <a
          href="https://one.exnessonelink.com/intl/en/a/1sh0vxrgqd"
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="block transition-transform hover:scale-[1.01] duration-300"
        >
          <img
            src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Take_control_800x800.png"
            alt="Exness - Take Control"
            className="w-full max-w-125 h-auto rounded-2xl shadow-2xl border border-white/10"
            loading="lazy"
          />
        </a>
      </div>

      <div className="max-w-4xl mx-auto px-[5vw] py-12 flex flex-col gap-14">
      <section className="mt-8 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Exness Trading Platforms: MT4, MT5 &amp; Exness Terminal
      </h2>
      <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Exness gives traders full flexibility by supporting industry-standard platforms as well as proprietary trading software. Clients can trade using <strong>MetaTrader 4 (MT4)</strong> and <strong>MetaTrader 5 (MT5)</strong> on desktop and mobile, complete with full support for custom indicators, automated Expert Advisors (EAs), and advanced charting tools. For traders seeking a seamless browser-based experience, the web-based <strong>Exness Terminal</strong> incorporates native TradingView charting engines with over 100 technical indicators and one-click order execution. Additionally, the mobile-first <strong>Exness Trade App</strong> allows iOS and Android users to manage deposits, monitor positions, and execute trades on-the-go with real-time risk calculators and custom price alerts.
      </p>
    </section>
    <a href="https://one.exnessonelink.com/intl/en/a/ggaswwew8a">
          <img src="https://d3dpet1g0ty5ed.cloudfront.net/EN_GLOBAL_C1_EXT_C2_T1_PROMO_CLICK_T2_PERFORMANCE_D-3-3_STATIC_1200x628.jpg" width="1200" height="628" alt="" />
        </a>

        <section className="mt-8 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Exness Unlimited Leverage &amp; Margin Management
      </h2>
      <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        One of Exness’s defining features is its flexible leverage policy, which includes an <strong>Unlimited Leverage</strong> option for eligible accounts with equity under $1,000 USD who have completed minimum trading volume requirements. Unlimited leverage allows experienced traders to open larger market positions with minimal margin requirements. To maintain overall account security, Exness enforces dynamic margin requirements that scale down automatically as account equity increases, tiering down through fixed leverage steps such as 1:2000, 1:1000, and 1:500 for larger account balances. Increased margin requirements are also automatically applied during major economic news releases and weekend market closes to protect clients from gap slippage.
      </p>
    </section>
    

    <section className="mt-8 flex flex-col gap-3">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50">
        Tradable Markets: Forex, Metals, Crypto &amp; Indices
      </h2>
      <div className="w-8 h-0.5 bg-amber-400 rounded-full mb-1" />
      <p className="text-sm leading-relaxed text-zinc-400">
        Traders accessing Exness gain exposure to over 200 liquid financial instruments across multiple global asset classes. The broker offers broad coverage in <strong>Forex trading</strong> with major, minor, and exotic currency pairs featuring ultra-tight floating spreads. Beyond forex, clients can trade lucrative <strong>Commodities</strong> including Gold (XAU/USD), Silver, Crude Oil (USOIL), and Brent. Equity traders have access to major global market <strong>Indices</strong> such as the US30, USTEC (Nasdaq), and GER30, alongside single-stock CFDs of leading global corporations. Furthermore, Exness provides 24/7 <strong>Crypto CFD trading</strong> on top digital assets like Bitcoin (BTC), Ethereum (ETH), and Ripple (XRP) with zero overnight swap charges.
      </p>
    </section>
    <a href="https://one.exnessonelink.com/intl/en/a/ggaswwew8a">
          <img src="https://d3dpet1g0ty5ed.cloudfront.net/EN_Trade_Gold_v2_1200x628px.png" width="1200" height="628" alt="" />
        </a>
      </div>

      {/* ── Sticky Bottom CTA Bar ── */}
<div className="fixed bottom-0 left-0 right-0 z-50 bg-[#080c0e]/95 backdrop-blur-md border-t border-white/10 p-3 shadow-[0_-8px_24px_rgba(0,0,0,0.6)]">
  <div className="max-w-4xl mx-auto px-2">
    <a
      href={broker.affiliateLink}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="w-full inline-flex items-center justify-center px-6 py-2 bg-amber-400 hover:bg-amber-300 text-gray-800 text-lg sm:text-base font-semibold rounded-lg transition-all duration-200 shadow-lg hover:scale-[1.01]"
    >
      Open Exness Account →
    </a>
  </div>
</div>

    </div>
  );
}