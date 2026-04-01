import { LoginForm } from '../components/LoginForm'

export default function LoginPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_right,_#22d3ee_0%,_transparent_40%),radial-gradient(circle_at_bottom_left,_#2563eb_0%,_transparent_35%),linear-gradient(135deg,_#0f172a_0%,_#1e3a8a_52%,_#0ea5e9_100%)] flex items-center justify-center px-4 py-6">
      <div className="pointer-events-none absolute -top-24 -left-16 h-72 w-72 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 -right-14 h-72 w-72 rounded-full bg-blue-200/25 blur-3xl" />

      <div className="relative z-10 w-full max-w-md">
        <div className="rounded-3xl border border-white/35 bg-white/88 p-8 shadow-[0_20px_80px_rgba(15,23,42,0.35)] backdrop-blur-lg">
          <div className="mb-8 text-center">
            <div className="mb-4 inline-block rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-3 shadow-lg shadow-cyan-500/30">
              <span className="text-3xl">🏦</span>
            </div>
            <h1 className="mb-1 text-4xl font-bold tracking-tight text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Onda Finance</h1>
            <p className="text-sm text-slate-600">Seu app bancário simples e seguro</p>
          </div>

          <LoginForm />

          <div className="mt-6 rounded-2xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 text-sm text-cyan-900">
            <p className="font-bold mb-2">✨ Dica importante!</p>
            <p>Use qualquer email e senha para fazer login.</p>
          </div>
        </div>
        <p className="mt-6 text-center text-xs font-semibold tracking-wide text-cyan-50/90">Desenvolvido por Hugo Batista</p>
      </div>
    </div>
  )
}
