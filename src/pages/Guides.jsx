import { useState } from "react";

/* ── Data ─────────────────────────────────────────────────────────────────── */
const guides = [
  {
    id: 1,
    tag: "Sign Up",
    title: "How to create an Exness account in Nigeria: A step-by-step guide",
    content: [
      "Start by visiting ",
      { text: "the official Exness website", href: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd" },
      " and clicking 'Open Account.' Fill in your personal details including your full name, email address, and Nigerian phone number. Choose your account type, Standard accounts are best for beginners. Verify your email, then complete the KYC process by uploading a valid Nigerian ID (NIN slip, international passport, or driver's license) and proof of address. Once approved, you can fund your account and start trading.",
    ],
  },
  {
    id: 2,
    tag: "Sign Up",
    title: "How to verify your Exness account in Nigeria",
    content: [
      { text: "Exness", href: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd" },
     " requires identity and address verification before you can withdraw funds. Log in to your Exness Personal Area and navigate to the Verification section. Upload a clear photo of a government-issued ID (National ID card, passport, or driver's license). For address verification, provide a utility bill, bank statement, or any official document showing your name and Nigerian address dated within 3 months. Verification typically takes 24–72 hours. Once approved, all withdrawal limits are lifted.",
     ],
  },
  {
    id: 3,
    tag: "Sign Up",
    title: "The best forex brokers in Nigeria for 2026: A comprehensive review",
    content: [
      "Our top picks for 2026 include ",
      { text: "Exness", href: "https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd" }, "- best overall for Nigerians ", 
      { text:"HFM", href:"https://register.hfm.com/ke/en/new-live-account/?refid=30515020"}, "- great for beginners ", "and ", 
      { text:"FBS", href:"https://fbs.partners?ibl=876040&ibp=35444511"}, "- low minimum deposit.", 
      "Key factors we evaluate include regulation status, NGN deposit/withdrawal options, local payment methods (bank transfers, Opay, Palmpay), customer support in local time zones, and trading conditions like spreads and leverage. Always choose a broker regulated by the CBN or a tier-1 regulator like FCA or CySEC.",
    ],
  },
  {
    id: 4,
    tag: "Sign Up",
    title: "Best CFD Brokers in Nigeria: Top Picks for 2026",
    content: [ 
      "Top CFD brokers for Nigerians in 2026 include ", 
      { text:"JustMarkets", href:"https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker"}, "- best for high-leverage trading ", 
      { text:"FxPro", href:"https://direct-fxpro.com/en/partner/2xPncqjwh"}, "- user-friendly platform ", "and ", 
      { text:"Exness", href:"https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd"}, "- tight spreads on major pairs. ", 
      "When choosing a CFD broker, consider the range of instruments offered, leverage limits, overnight swap fees, and whether the platform supports MT4/MT5. Note that CFDs carry significant risk — only trade with capital you can afford to lose.",
    ],
  },
  {
    id: 5,
    tag: "Brokers",
    title: "JustMarkets Nigeria",
    content: [
      { text: "JustMarkets", href:"https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker"}, " is a globally regulated broker popular among Nigerian traders for its low minimum deposit of $5 and flexible account types. The broker offers Standard, Pro, Raw Spread, and ECN accounts. Nigerian traders can deposit and withdraw via local bank transfer, Opay, and other local payment processors.", 
      { text: "JustMarkets", href: "https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker"}, " is regulated by the FSA-Seychelles and CySEC. The broker supports MT4 and MT5 platforms and offers leverage up to 1:3000 on some account types. Customer support is available 24/5 via live chat and email.",
    ],
  },
  {
    id: 6,
    tag: "Brokers",
    title: "Exness Nigeria",
    content: [
      { text:"Exness", href:"https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd"}, " is one of the most widely used forex brokers in Nigeria, known for its instant withdrawals and NGN-denominated accounts. Nigerian traders can open accounts in NGN, USD, or EUR. Local deposit methods include bank transfers, Opay, Flutterwave, and cards.", 
      { text:"Exness", href:"https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd"}, " is regulated by the FCA (UK), CySEC, and FSA, making it one of the most trusted brokers in the region. The broker offers Standard, Pro, Zero, and Raw Spread accounts with leverage up to 1:2000 on Standard accounts. Spreads start from 0.0 pips on Raw Spread accounts.",
    ],
  },
  {
    id: 7,
    tag: "Brokers",
    title: "HFM Nigeria",
      content: [
        { text: "HFM", href: "https://register.hfm.com/ke/en/new-live-account/?refid=30515020" },
        " is a trader-favorite in Nigeria due to its physical presence with a local office in Lagos. They offer NGN-denominated accounts, meaning you can deposit and withdraw in Naira without worrying about exchange rate fluctuations. Local bank transfers and direct ATM card deposits are processed almost instantly.",
        " Regulated by the FCA and FSCA ",
        { text:"HFM", href:"https://register.hfm.com/ke/en/new-live-account/?refid=30515020"}, " offers leverage up to 1:2000 on their Cent and Premium accounts. They are particularly known for their 'PAMM' system and Copy Trading features, which allow Nigerian beginners to follow the trades of experienced professionals."
      ],
  },
  {
    id: 8,
    tag: "Brokers",
    title: "XM Nigeria",
    content: [
      { text: "XM", href: "https://affs.click/MbQNk" },
      " is widely regarded as the best broker for educational resources in the Nigerian market. They frequently host local gala dinners and free trading seminars in cities like Lagos and Abuja. For 2026, they continue to offer a $30 No-Deposit Bonus for new users to test the markets risk-free.",
      { text: "XM", href: "https://affs.click/MbQNk"}, " supports leverage up to 1:1000 and features an 'Ultra-Low' account type with no commissions and spreads as low as 0.6 pips. Nigerian traders benefit from zero fees on deposits and withdrawals via local bank transfers and e-wallets like Neteller and Skrill."
    ],
  },
  {
    id: 9,
    tag: "Brokers",
    title: "FBS Nigeria",
    content: [
      { text: "FBS", href: "https://fbs.partners?ibl=876040&ibp=35444511" },
      " stands out for offering the highest leverage in the industry, reaching up to 1:3000 on certain account types. This makes it popular for aggressive traders with smaller capital. They provide a very smooth mobile trading app (FBS Trader) which is optimized for the mobile-first Nigerian trading community.",
      " While their base currencies are limited to USD and EUR, their integration with local exchangers and Nigerian banks ensures that converting your Naira for deposit is fast. They offer a unique 'Level Up' bonus and 100% deposit bonuses that are highly attractive to retail traders. ",
      { text: "Register today with FBS", href: "https://fbs.partners?ibl=876040&ibp=35444511" },
    ],
  },
  {
    id: 10,
    tag: "Brokers",
    title: "FxPro Nigeria",
    content: [
      { text: "FxPro", href: "https://direct-fxpro.com/en/partner/2xPncqjwh" },
      " is considered a premium, 'No Dealing Desk' (NDD) broker. It is often the choice for professional Nigerian traders who require institutional-grade execution speeds and deep liquidity. Unlike many others, ",
      { text: "FxPro", href: "https://direct-fxpro.com/en/partner/2xPncqjwh" }, 
      " offers the cTrader platform alongside MT4 and MT5.",
      " It is one of the most regulated brokers globally (FCA, CySEC, FSCA). While the minimum deposit is slightly higher at $100, the FxPro Wallet allows traders to keep funds in a separate vault and move them instantly into trading accounts when needed. Local payment methods include bank wire and major credit/debit cards."
    ],
  },
];

const tags = ["All", "Sign Up", "Brokers", "Deposits", "Withdrawals", "NGN Rates"];

/* ── Guide row with accordion ─────────────────────────────────────────────── */
function GuideRow({ guide, index, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/6">
      {/* Row header — clickable */}
      <button
        onClick={onToggle}
        className="group w-full flex items-center justify-between gap-4 py-4 hover:bg-white/2 transition-all px-2 text-left"
      >
        <div className="flex items-center gap-5 min-w-0">
          {/* Number */}
          <span className="text-xs font-mono text-zinc-600 shrink-0 tracking-tighter">
            {(index + 1).toString().padStart(2, "0")}
          </span>

          {/* Title */}
          <h3
            className={`text-md font-medium leading-snug truncate transition-colors ${
              isOpen ? "text-green-400" : "text-zinc-100 group-hover:text-green-400"
            }`}
          >
            {guide.title}
          </h3>
        </div>

        {/* Chevron icon */}
        <span
          className={`shrink-0 text-green-600 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6L8 10L12 6"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Dropdown content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-2 pb-5 pt-1 pl-12">
          {/* Tag pill */}
          <span className="inline-flex items-center gap-1.5 text-[0.65rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/6 px-2.5 py-1 rounded-full mb-3">
            <span className="w-1 h-1 rounded-full bg-green-400" />
            {guide.tag}
          </span>

          {/* Content */}
          <p className="text-sm text-zinc-400 leading-relaxed">
             {(Array.isArray(guide.content) ? guide.content : [guide.content]).map((part, i) =>
            typeof part === "string" ? (
             <span key={i}>{part}</span>
            ) : (
        <a
          key={i}
          href={part.href}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="text-green-400 underline underline-offset-2 hover:text-green-300 transition-colors"
        >
        {part.text}
      </a>
    )
  )}
</p>

          {/* Read full guide link */}
          <a
            href="/brokers"
            className="inline-flex items-center gap-1.5 mt-4 text-xs text-green-500 hover:text-green-300 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            Check all the brokers reviewed
            <span className="text-sm">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}

/* ── Guides page ──────────────────────────────────────────────────────────── */
export default function Guides() {
  const [activeTag, setActiveTag] = useState("All");
  const [openId, setOpenId] = useState(null);

  const filtered =
    activeTag === "All" ? guides : guides.filter((g) => g.tag === activeTag);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

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
              onClick={() => {
                setActiveTag(tag);
                setOpenId(null); // close any open row when switching tabs
              }}
              className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 cursor-pointer ${
                activeTag === tag
                  ? "text-green-400 bg-green-500/10 border-green-500/30"
                  : "text-zinc-500 bg-transparent border-white/6 hover:border-white/20 hover:text-zinc-300"
              }`}
            >
              {tag}
              <span className="ml-1.5 text-[0.6rem] opacity-60">
                {tag === "All"
                  ? guides.length
                  : guides.filter((g) => g.tag === tag).length}
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
              index={index}
              isOpen={openId === guide.id}
              onToggle={() => handleToggle(guide.id)}
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