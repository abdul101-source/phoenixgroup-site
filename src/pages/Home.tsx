import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="h-10" aria-hidden="true">
              <path d="M8 20 L2 6 L6 6 L12 20 L6 34 L2 34 Z" fill="#275A45" />
              <path d="M18 20 L8 6 L12 6 L18 20 L12 34 L8 34 Z" fill="#275A45" />
              <text x="22" y="28" fontFamily="Inter" fontWeight="800" fontSize="14" fill="#0f172a">VARIX</text>
            </svg>
          </div>
          <nav className="flex items-center gap-4">
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium">
              Pricing
            </a>
            <Link to="/login" className="text-gray-600 hover:text-gray-900 font-medium">
              Log in
            </Link>
            <Link to="/signup" className="btn-primary text-sm py-2 px-4">
              Sign up
            </Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-20 text-center">
        <div className="badge mb-6">V1 · Drawing comparison only · Early access</div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Compare drawing revisions. Capture every change.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your drawings and instantly see what changed across revisions.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-5xl font-black text-[var(--green)]">
            £399<span className="text-2xl text-gray-600">/month</span>
          </div>
          <div className="text-gray-600">
            Founder pricing · First 15 customers only
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
          <Link to="/signup" className="btn-primary text-lg">
            Upload drawings
          </Link>
          <a href="#demo" className="btn-outline text-lg">
            See demo ↓
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-500">
          Only 6 of 15 founder spots left
        </p>
      </section>

      {/* PAIN */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Drawing revisions are where margin disappears
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="mt-1 text-red-600 text-2xl">!</div>
            <div>
              <strong className="block text-xl">Missed changes</strong>
              <p className="text-gray-600 mt-1">
                Rev 114 → Rev 121 had 63 changes. 4 were claimable.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 text-red-600 text-2xl">!</div>
            <div>
              <strong className="block text-xl">Notice periods expire</strong>
              <p className="text-gray-600 mt-1">
                Entitlement gone before you see it.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 text-red-600 text-2xl">!</div>
            <div>
              <strong className="block text-xl">Changes hidden as coordination</strong>
              <p className="text-gray-600 mt-1">
                Work done, never claimed.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="mt-1 text-red-600 text-2xl">!</div>
            <div>
              <strong className="block text-xl">1–4% lost</strong>
              <p className="text-gray-600 mt-1">
                £100k–£400k on a £10M package.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Three clicks
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-[var(--green)] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-bold mb-1">Upload your revisions</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-[var(--green)] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-bold mb-1">See every change</h3>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="w-16 h-16 bg-[var(--green)] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-bold mb-1">Export & claim</h3>
            </div>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <section id="demo" className="py-20 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">
          30-second demo
        </h2>

        <div className="bg-slate-100 border-2 border-dashed border-slate-300 rounded-xl w-full h-96 flex items-center justify-center">
          <p className="text-gray-500">
            Demo video here
          </p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-2xl shadow border border-slate-200">
            <p className="text-lg italic mb-6">
              "Found a £27k ceiling grid change we'd completely missed. Would've cost us at final account."
            </p>
            <p className="font-semibold">
              — Commercial Manager, Drylining subcontractor
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border border-slate-200">
            <p className="text-lg italic mb-6">
              "Spotted 7 claimable variations in week one. We'd have never picked them up from the revision pack."
            </p>
            <p className="font-semibold">
              — QS, M&E contractor
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border border-slate-200">
            <p className="text-lg italic mb-6">
              "Revised drawings for a unit merge — extra drywall, doors, heating. Would've taken hours manually. This did it in seconds."
            </p>
            <p className="font-semibold">
              — Commercial QS on major residential works
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow border border-slate-200">
            <p className="text-lg italic mb-6">
              "Dropped a flooring variation by £30k after catching an over-allowance from layout changes. Paid for itself instantly."
            </p>
            <p className="font-semibold">
              — Senior QS working across £100M+ projects
            </p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-6">
            £399/month
          </h2>

          <div className="bg-white border-2 border-slate-200 rounded-3xl p-10 shadow-xl">
            <div className="text-6xl font-black text-[var(--green)] mb-4">
              £399<span className="text-2xl text-gray-600">/month</span>
            </div>

            <ul className="text-left space-y-4 mb-8">
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold text-xl">✓</span>
                <span>Unlimited comparisons</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold text-xl">✓</span>
                <span>Unlimited team members</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold text-xl">✓</span>
                <span>PDF, DWG, image support</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--green)] font-bold text-xl">✓</span>
                <span>Excel + PDF export</span>
              </li>
            </ul>

            <Link to="/signup" className="btn-primary block text-xl py-4">
              Start free trial – no card required
            </Link>

            <p className="mt-2 text-sm text-gray-600">
              Founder access includes higher limits and early features.
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Only 6 of 15 founder spots left
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-white py-12 text-center">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="h-10" aria-hidden="true">
              <path d="M8 20 L2 6 L6 6 L12 20 L6 34 L2 34 Z" fill="#275A45" />
              <path d="M18 20 L8 6 L12 6 L18 20 L12 34 L8 34 Z" fill="#275A45" />
              <text x="22" y="28" fontFamily="Inter" fontWeight="800" fontSize="14" fill="white">VARIX</text>
            </svg>
            <span className="font-bold">Varix Intelligence</span>
          </div>

          <p className="text-sm text-slate-400">
            © 2025 Varix Intelligence Ltd • London
          </p>
        </div>
      </footer>
    </div>
  )
}
