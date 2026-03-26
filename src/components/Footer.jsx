import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080c0e] border-t border-white/6 pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="max-w-6xl mx-auto px-[5vw]">
        
        {/* ── Top Section: Brand & Nav ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 no-underline group" aria-label="fxbrokers.ng Home">
              <span className="flex pr-1" aria-hidden="true">
                <span className="block w-3 h-6 bg-green-600" />
                <span className="block w-3 h-6 bg-white" />
                <span className="block w-3 h-6 bg-green-600" />
              </span>
              <span className="font-serif text-[1.18rem] font-semibold tracking-tight text-zinc-50 group-hover:text-green-400 transition-colors">
                fx<span className="text-green-400">brokers</span><span className="text-zinc-500">.ng</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-zinc-400 leading-relaxed text-balance">
            fxbrokers.ng provides independent analysis of the best forex brokers in Nigeria. Our mission is to ensure transparency in the NGN trading market by reviewing spreads, regulation, and local bank transfer speeds.
            </p>
            <address className="mt-4 not-italic text-xs text-zinc-500 flex flex-col gap-1">
              <span>Lagos, Nigeria</span>
              <Link to="/contact" className="hover:text-green-400 underline decoration-zinc-800">Contact Editorial Team</Link>
            </address>
          </div>

          {/* Column 2: Internal Linking (Brokers) */}
          <nav aria-label="Broker Reviews Navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Broker Reviews</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/brokers/exness" className="hover:text-green-400 transition-colors">Exness Review 2026</Link></li>
              <li><Link to="/brokers/justmarkets" className="hover:text-green-400 transition-colors">JustMarkets Review</Link></li>
              <li><Link to="/brokers/hfm" className="hover:text-green-400 transition-colors">HFM Nigeria Review</Link></li>
              <li><Link to="/brokers/xm" className="hover:text-green-400 transition-colors">XM Group Analysis</Link></li>
              <li><Link to="/brokers/fbs" className="hover:text-green-400 transition-colors">FBS Global Review</Link></li>
              <li><Link to="/brokers/fxpro" className="hover:text-green-400 transition-colors">FxPro Review</Link></li>
            </ul>
          </nav>

          {/* Column 3: Resources */}
          <nav aria-label="Trading Resources Navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Resources</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/guides" className="hover:text-green-400 transition-colors">How to Start Trading</Link></li>
              <li><Link to="/ngn-rates" className="hover:text-green-400 transition-colors">Parallel Market NGN Rates</Link></li>
              <li><Link to="/scam-alerts" className="hover:text-green-400 transition-colors">Blacklisted Brokers</Link></li>
              <li><Link to="/education" className="hover:text-green-400 transition-colors">Forex Education</Link></li>
            </ul>
          </nav>

          {/* Column 4: Legal & Company */}
          <nav aria-label="Legal Navigation">
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Legal</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><Link to="/about" className="hover:text-green-400 transition-colors">About our Methodology</Link></li>
              <li><Link to="/privacy" className="hover:text-green-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-green-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-green-400 transition-colors">Cookie Policy</Link></li>
            </ul>
          </nav>

          {/* Column 5: Partners (Affiliate SEO Optimized) */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-100 mb-6">Direct Links</h3>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li><a href="https://one.exnessonelink.com/a/1sh0vxrgqd" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">Open Exness Account</a></li>
              <li><a href="https://one.justmarkets.link/a/17thm0lpq8/landing/global-trusted-broker" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">Trade with JustMarkets</a></li>
              <li><a href="https://register.hfm.com/ke/en/new-live-account/?refid=30515020" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">HFM Live Account</a></li>
              <li><a href="https://affs.click/MbQNk" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">XM $30 Bonus</a></li>
              <li><a href="https://fbs.partners?ibl=876040&ibp=35444511" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">FBS Nigeria</a></li>
              <li><a href="https://direct-fxpro.com/en/partner/2xPncqjwh" rel="nofollow noopener noreferrer" target="_blank" className="hover:text-green-400 transition-colors">Register FxPro</a></li>
            </ul>
          </div>
        </div>

        {/* ── Bottom Section: Risk Disclosure & E-E-A-T ── */}
        <div className="border-t border-white/4 pt-10 text-[11px] leading-relaxed text-zinc-500">
          <section aria-label="Risk Disclosure">
            <p className="mb-4">
              <strong className="text-zinc-300 uppercase">High-Risk Investment Warning:</strong> Trading Foreign Exchange (Forex) and Contracts for Difference (CFDs) is highly speculative, carries a high level of risk, and may not be suitable for all investors. You may sustain a loss of some or all of your invested capital; therefore, you should not speculate with capital that you cannot afford to lose.
            </p>
            <p>
              <strong>Advertiser Disclosure:</strong> <span className="text-zinc-300">fxbrokers.ng</span> is an independent review site funded by referral fees from the companies featured on this site. While we do our best to ensure all data is accurate at the time of publishing, broker offerings change frequently.
            </p>
          </section>
          
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-60">
            <p>© {currentYear} fxbrokers.ng • Developed for the Nigerian Trading Community.</p>
            <p className="text-[10px] italic bg-zinc-900 px-3 py-1 rounded-full border border-white/5">
              Accuracy Verified: March 25, 2026
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}