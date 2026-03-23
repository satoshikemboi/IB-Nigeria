import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";

/* ── Config ───────────────────────────────────────────────────────────────── */
const PAIRS   = ["USD", "EUR", "GBP", "CAD", "AUD", "JPY"];
const FLAGS   = { USD:"🇺🇸", EUR:"🇪🇺", GBP:"🇬🇧", CAD:"🇨🇦", AUD:"🇦🇺", JPY:"🇯🇵" };
const REFRESH = 10_000; // 10 seconds — live feel without hammering the API
const HISTORY_POINTS = 30; // number of data points on graph

const brokerPremiums = [
  { rank:1, name:"Exness",      logo:"/exness.png",      premium:0.0011, verdict:"Best rate", link:"https://www.exnesspromo.com/en/less-slippage/?partner_id=1sh0vxrgqd"      },
  { rank:2, name:"JustMarkets", logo:"/justmarkets.png", premium:0.0020, verdict:"Excellent",  link:"https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker"  },
  { rank:3, name:"HFM",         logo:"/hfm.png",         premium:0.0025, verdict:"Good",       link:"https://register.hfm.com/ke/en/new-live-account/?refid=30515020"          },
  { rank:4, name:"FBS",         logo:"/fbs.png",         premium:0.0037, verdict:"Average",    link:"https://fbs.partners?ibl=876040&ibp=35444511"                             },
  { rank:5, name:"XM Group",    logo:"/xm.png",          premium:0.0048, verdict:"Average",    link:"https://affs.click/MbQNk"                                                 },
  { rank:6, name:"FxPro",       logo:"/fxpro.png",       premium:0.0064, verdict:"Below avg",  link:"https://direct-fxpro.com/en/partner/2xPncqjwh"                            },
];

const verdictColor = {
  "Best rate":"text-green-400 bg-green-500/[0.08] border-green-500/20",
  "Excellent":"text-green-400 bg-green-500/[0.08] border-green-500/20",
  "Good":     "text-amber-400 bg-amber-500/[0.08] border-amber-500/20",
  "Average":  "text-zinc-400 bg-zinc-500/[0.08] border-zinc-500/20",
  "Below avg":"text-red-400 bg-red-500/[0.08] border-red-500/20",
};

/* ── Helpers ──────────────────────────────────────────────────────────────── */
function fmt(val, dec = 2) {
  return Number(val).toLocaleString("en-NG", {
    minimumFractionDigits: dec,
    maximumFractionDigits: dec,
  });
}

function SectionTitle({ children }) {
  return (
    <div className="mb-6">
      <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-2">{children}</h2>
      <div className="w-8 h-0.5 bg-green-500 rounded-full" />
    </div>
  );
}

/* ── SVG Sparkline graph ──────────────────────────────────────────────────── */
function SparklineGraph({ data, width = 600, height = 180, loading }) {
  if (loading || data.length < 2) {
    return (
      <div className="w-full h-[180px] rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-2 border-green-500/30 border-t-green-400 rounded-full animate-spin" />
          <span className="text-xs text-zinc-600">Loading chart data...</span>
        </div>
      </div>
    );
  }

  const values  = data.map(d => d.rate);
  const minVal  = Math.min(...values);
  const maxVal  = Math.max(...values);
  const range   = maxVal - minVal || 1;
  const padX    = 48;
  const padY    = 16;
  const W       = width;
  const H       = height;

  const toX = (i) => padX + (i / (values.length - 1)) * (W - padX * 1.5);
  const toY = (v) => padY + ((maxVal - v) / range) * (H - padY * 2);

  const points    = values.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
  const areaClose = `${toX(values.length - 1)},${H} ${toX(0)},${H}`;
  const areaPath  = `M ${points.split(" ").join(" L ")} L ${areaClose} Z`;

  const latest = values[values.length - 1];
  const first  = values[0];
  const up     = latest >= first;

  // Y axis labels
  const yLabels = [maxVal, (maxVal + minVal) / 2, minVal];

  // X axis labels (time)
  const xLabels = [
    data[0]?.time,
    data[Math.floor(data.length / 2)]?.time,
    data[data.length - 1]?.time,
  ];

  return (
    <div className="w-full rounded-xl border border-white/[0.06] bg-[rgba(13,18,15,0.6)] overflow-hidden p-4">
      <svg
        viewBox={`0 0 ${W} ${H + 24}`}
        className="w-full"
        style={{ height: H + 24 }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%"   stopColor={up ? "#22c55e" : "#f87171"} stopOpacity="0.18" />
            <stop offset="100%" stopColor={up ? "#22c55e" : "#f87171"} stopOpacity="0"   />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%"   stopColor={up ? "#16a34a" : "#dc2626"} />
            <stop offset="100%" stopColor={up ? "#4ade80" : "#f87171"} />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {yLabels.map((_, i) => {
          const y = padY + (i / (yLabels.length - 1)) * (H - padY * 2);
          return (
            <line
              key={i}
              x1={padX} y1={y} x2={W - 8} y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
            />
          );
        })}

        {/* Area fill */}
        <path d={areaPath} fill="url(#areaGrad)" />

        {/* Line */}
        <polyline
          points={points}
          fill="none"
          stroke="url(#lineGrad)"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        {/* Latest dot */}
        <circle
          cx={toX(values.length - 1)}
          cy={toY(latest)}
          r="4"
          fill={up ? "#4ade80" : "#f87171"}
          stroke="#080c0e"
          strokeWidth="2"
        />

        {/* Y axis labels */}
        {yLabels.map((v, i) => {
          const y = padY + (i / (yLabels.length - 1)) * (H - padY * 2);
          return (
            <text
              key={i}
              x={padX - 6}
              y={y + 4}
              textAnchor="end"
              fontSize="9"
              fill="rgba(161,161,170,0.7)"
              fontFamily="monospace"
            >
              ₦{fmt(v, 0)}
            </text>
          );
        })}

        {/* X axis labels */}
        {xLabels.map((label, i) => {
          const xi = [0, Math.floor(values.length / 2), values.length - 1][i];
          return (
            <text
              key={i}
              x={toX(xi)}
              y={H + 18}
              textAnchor="middle"
              fontSize="9"
              fill="rgba(113,113,122,0.8)"
              fontFamily="monospace"
            >
              {label}
            </text>
          );
        })}
      </svg>

      {/* Stats row below graph */}
      <div className="flex items-center justify-between mt-2 px-1">
        <span className="text-[0.65rem] text-zinc-600">
          {data.length} data points · {REFRESH / 1000}s interval
        </span>
        <span className={`text-[0.65rem] font-semibold ${up ? "text-green-400" : "text-red-400"}`}>
          {up ? "▲" : "▼"} {Math.abs(((latest - first) / first) * 100).toFixed(4)}% in session
        </span>
      </div>
    </div>
  );
}

/* ── Rate card ────────────────────────────────────────────────────────────── */
function RateCard({ currency, rate, prevRate, flag, loading }) {
  const up      = prevRate == null ? true : rate >= prevRate;
  const changePct = prevRate && prevRate !== rate
    ? (((rate - prevRate) / prevRate) * 100).toFixed(4)
    : "0.0000";

  return (
    <div className={`flex flex-col gap-2.5 p-4 rounded-xl border transition-all duration-500 ${
      loading
        ? "border-white/[0.06] bg-white/[0.02]"
        : up
          ? "border-green-500/20 bg-green-500/[0.025]"
          : "border-red-500/20 bg-red-500/[0.025]"
    }`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg">{flag}</span>
          <span className="text-[0.65rem] font-semibold text-zinc-500 tracking-widest uppercase">
            {currency}/NGN
          </span>
        </div>
        {!loading && (
          <span className={`text-[0.6rem] font-semibold px-1.5 py-0.5 rounded-full border ${
            up ? "text-green-400 bg-green-500/[0.08] border-green-500/20"
               : "text-red-400 bg-red-500/[0.08] border-red-500/20"
          }`}>
            {up ? "▲" : "▼"} {Math.abs(changePct)}%
          </span>
        )}
      </div>

      {loading ? (
        <div className="h-7 w-28 rounded-lg bg-white/[0.05] animate-pulse" />
      ) : (
        <div className="font-playfair text-xl font-semibold text-zinc-50 tabular-nums transition-all duration-300">
          ₦{fmt(rate, currency === "JPY" ? 4 : 2)}
        </div>
      )}

      <div className="w-full h-0.5 rounded-full bg-white/[0.04] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-1000 ${up ? "bg-green-500" : "bg-red-500"}`}
          style={{ width: loading ? "20%" : `${Math.min(95, 50 + Math.abs(changePct) * 10000)}%` }}
        />
      </div>
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────────────────────────── */
export default function NGNRates() {
  const [rates,       setRates]       = useState({});
  const [prevRates,   setPrevRates]   = useState({});
  const [graphData,   setGraphData]   = useState([]);
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [tick,        setTick]        = useState(0);
  const intervalRef = useRef(null);

  const fetchRates = useCallback(async () => {
    try {
      const [fxRes, ngnRes] = await Promise.all([
        fetch("https://api.frankfurter.app/latest?from=USD&to=EUR,GBP,CAD,AUD,JPY"),
        fetch("https://open.er-api.com/v6/latest/USD"),
      ]);
      if (!fxRes.ok || !ngnRes.ok) throw new Error("Fetch failed");

      const fxData  = await fxRes.json();
      const ngnData = await ngnRes.json();
      const usdNgn  = ngnData.rates?.NGN;
      if (!usdNgn) throw new Error("NGN unavailable");

      const newRates = { USD: usdNgn };
      Object.entries(fxData.rates || {}).forEach(([cur, usdRate]) => {
        newRates[cur] = (1 / usdRate) * usdNgn;
      });

      setPrevRates(prev => Object.keys(prev).length ? prev : newRates);
      setPrevRates(rates);
      setRates(newRates);

      const now = new Date();
      const timeLabel = now.toLocaleTimeString("en-NG", { hour:"2-digit", minute:"2-digit", second:"2-digit" });

      setGraphData(prev => {
        const next = [...prev, { rate: usdNgn, time: timeLabel, ts: Date.now() }];
        return next.slice(-HISTORY_POINTS);
      });

      setLastUpdated(now);
      setTick(t => t + 1);
      setLoading(false);
      setError(null);
    } catch (err) {
      setError("Could not fetch live rates. Retrying...");
      setLoading(false);
    }
  }, [rates]);

  useEffect(() => {
    fetchRates();
    intervalRef.current = setInterval(fetchRates, REFRESH);
    return () => clearInterval(intervalRef.current);
  }, []);

  const usdNgn = rates["USD"] || 0;

  return (
    <div className="bg-[#080c0e] text-zinc-300 min-h-screen font-dm">

      {/* ── Page header ── */}
      <div className="border-b border-white/[0.06] bg-[#0d1117]">
        <div className="max-w-5xl mx-auto px-[5vw] py-12">
          <div className="inline-flex items-center gap-2 text-[0.7rem] text-green-400 tracking-wide border border-green-500/25 bg-green-500/[0.06] px-3 py-1.5 rounded-full mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
            Live · Updates every {REFRESH / 1000}s
          </div>
          <h1 className="font-playfair text-[clamp(1.8rem,3.5vw,2.8rem)] font-semibold text-zinc-50 leading-tight mb-3">
            NGN Exchange Rates
          </h1>
          <p className="text-base text-zinc-400 font-light max-w-xl leading-relaxed">
            Real-time Naira exchange rates powered by Frankfurter & Open Exchange Rates.
            All data refreshes every {REFRESH / 1000} seconds.
          </p>
          {lastUpdated && (
            <div className="flex items-center gap-2 mt-3">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[0.7rem] text-zinc-600">
                Last updated: {lastUpdated.toLocaleTimeString("en-NG")} · #{tick} refresh
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-[5vw] py-12 flex flex-col gap-14">

        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-red-500/20 bg-red-500/[0.04] text-sm text-red-400">
            <span>⚠️</span> {error}
            <button onClick={fetchRates} className="ml-auto text-xs border border-red-500/30 px-3 py-1 rounded-md hover:bg-red-500/10 transition-colors cursor-pointer">
              Retry
            </button>
          </div>
        )}

        {/* ── Live rate cards ── */}
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-2">Live NGN Rates</h2>
              <div className="w-8 h-0.5 bg-green-500 rounded-full" />
            </div>
            <button
              onClick={fetchRates}
              className="flex items-center gap-1.5 text-[0.7rem] text-zinc-600 hover:text-green-400 transition-colors cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.01M4.01 9A9 9 0 1 0 6.34 5.34" />
              </svg>
              Refresh now
            </button>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {PAIRS.map(cur => (
              <RateCard
                key={cur}
                currency={cur}
                rate={rates[cur] || 0}
                prevRate={prevRates[cur] || null}
                flag={FLAGS[cur]}
                loading={loading}
              />
            ))}
          </div>
        </section>

        {/* ── USD/NGN graph ── */}
        <section>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-2">
            <div>
              <h2 className="font-playfair text-xl font-semibold text-zinc-50 mb-2">
                USD/NGN Live Chart
              </h2>
              <div className="w-8 h-0.5 bg-green-500 rounded-full" />
            </div>
            {graphData.length > 0 && (
              <div className="text-right">
                <div className="font-playfair text-2xl font-semibold text-green-400">
                  ₦{fmt(usdNgn)}
                </div>
                <div className="text-[0.65rem] text-zinc-600">Current USD/NGN</div>
              </div>
            )}
          </div>
          <SparklineGraph data={graphData} loading={loading || graphData.length < 2} />
          <p className="text-[0.65rem] text-zinc-600 mt-2">
            * Chart shows USD/NGN rate recorded every {REFRESH / 1000}s during your session. Refresh the page to reset.
          </p>
        </section>

        {/* ── USD/NGN spotlight ── */}
        {!loading && usdNgn > 0 && (
          <section>
            <SectionTitle>USD/NGN Converter</SectionTitle>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-green-500/[0.14] bg-green-500/[0.03]">
                <p className="text-[0.65rem] font-semibold text-green-400 uppercase tracking-widest">Current Rate</p>
                <p className="font-playfair text-3xl font-semibold text-zinc-50 tabular-nums">₦{fmt(usdNgn)}</p>
                <p className="text-[0.7rem] text-zinc-600">Per 1 USD · live</p>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[0.65rem] font-semibold text-zinc-500 uppercase tracking-widest">$100 USD =</p>
                <p className="font-playfair text-3xl font-semibold text-zinc-50 tabular-nums">₦{fmt(usdNgn * 100, 0)}</p>
                <p className="text-[0.7rem] text-zinc-600">At current rate</p>
              </div>
              <div className="flex flex-col gap-2 p-5 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <p className="text-[0.65rem] font-semibold text-zinc-500 uppercase tracking-widest">₦100,000 =</p>
                <p className="font-playfair text-3xl font-semibold text-zinc-50 tabular-nums">${fmt(100000 / usdNgn)}</p>
                <p className="text-[0.7rem] text-zinc-600">At current rate</p>
              </div>
            </div>
          </section>
        )}

        {/* ── Broker NGN rates ── */}
        <section>
          <SectionTitle>Best NGN Rate by Broker</SectionTitle>
          <p className="text-[0.85rem] text-zinc-500 mb-5 leading-relaxed max-w-2xl">
            Broker rates are estimated from the live interbank USD/NGN rate plus each broker's typical conversion premium.
            Updates every {REFRESH / 1000} seconds alongside market data.
          </p>
          <div className="flex flex-col gap-2">
            {brokerPremiums.map(b => {
              const brokerRate = usdNgn > 0 ? usdNgn * (1 + b.premium) : null;
              return (
                <div key={b.rank} className="flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-green-500/20 transition-all duration-200 group">
                  <span className={`w-5 shrink-0 text-center text-[0.78rem] font-semibold ${b.rank === 1 ? "text-amber-400" : "text-zinc-600"}`}>
                    {b.rank}
                  </span>
                  <div className="w-8 h-8 rounded-lg shrink-0 flex items-center justify-center overflow-hidden bg-white/[0.06] border border-white/[0.08]">
                    <img
                      src={b.logo} alt={b.name}
                      className="w-full h-full object-contain p-1"
                      onError={e => {
                        e.target.style.display = "none";
                        e.target.parentElement.innerHTML = `<span style="font-size:0.78rem;font-weight:700;color:#4ade80">${b.name.charAt(0)}</span>`;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-sm font-medium text-zinc-200 group-hover:text-green-400 transition-colors">{b.name}</span>
                  </div>
                  <div className="text-right shrink-0">
                    {loading ? (
                      <div className="h-4 w-24 rounded bg-white/[0.05] animate-pulse" />
                    ) : (
                      <>
                        <div className="text-sm font-semibold text-zinc-100 tabular-nums">
                          ₦{brokerRate ? fmt(brokerRate) : "—"}
                        </div>
                        <div className="text-[0.62rem] text-zinc-600">+{(b.premium * 100).toFixed(2)}% vs interbank</div>
                      </>
                    )}
                  </div>
                  <span className={`hidden sm:inline text-[0.62rem] font-semibold px-2.5 py-0.5 rounded-full border shrink-0 ${verdictColor[b.verdict]}`}>
                    {b.verdict}
                  </span>
                  <a
                    href={b.link}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md border border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-400 transition-all duration-200 no-underline group/btn"
                  >
                    Open Account
                  </a>
                </div>
              );
            })}
          </div>
          <p className="text-[0.68rem] text-zinc-600 mt-4">
            * Broker premiums are estimated from our testing. Always verify the rate with your broker before large deposits.
          </p>
        </section>

        {/* ── CTA ── */}
        <div className="flex flex-col items-center gap-4 py-10 border-t border-white/[0.06] text-center">
          <h2 className="font-playfair text-xl font-semibold text-zinc-50">Want to compare brokers in full?</h2>
          <p className="text-zinc-500 text-sm max-w-sm">
            See full reviews covering spreads, regulation, NGN deposits and more.
          </p>
          <Link
            to="/brokers"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-br from-green-600 to-green-700 text-white text-sm font-semibold rounded-lg no-underline hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(22,163,74,0.4)] transition-all duration-200"
          >
            Browse broker reviews
          </Link>
        </div>

      </div>
    </div>
  );
}