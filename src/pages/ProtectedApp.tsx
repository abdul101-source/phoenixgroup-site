import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { supabase } from '@/lib/supabaseClient'
import type { User } from '@supabase/supabase-js'

export default function ProtectedApp() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!session) {
        navigate('/login')
      } else {
        setUser(session.user)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        navigate('/login')
      } else {
        setUser(session.user)
      }
    })

    return () => subscription.unsubscribe()
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 40 40" className="h-10" aria-hidden="true">
              <path d="M8 20 L2 6 L6 6 L12 20 L6 34 L2 34 Z" fill="#275A45" />
              <path d="M18 20 L8 6 L12 6 L18 20 L12 34 L8 34 Z" fill="#275A45" />
              <text x="22" y="28" fontFamily="Inter" fontWeight="800" fontSize="14" fill="#0f172a">VARIX</text>
            </svg>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">{user?.email}</span>
            <button
              onClick={handleLogout}
              className="btn-outline text-sm py-2 px-4"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to VariX. Never miss a drawing change again</h1>
        <p className="text-xl text-gray-600 mb-10">
          You're now logged in and ready to start comparing drawings.
        </p>

        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-12">
          <div className="text-6xl mb-6">📐</div>
          <h2 className="text-2xl font-bold mb-4">Create a comparison set</h2>
          <p className="text-gray-600 mb-8">
            Upload one or more drawing revisions and let VariX highlight every change across versions.
          </p>
          <button className="btn-primary text-lg">
            Upload drawings
          </button>
        </div>
      </main>
    </div>
  )
}
