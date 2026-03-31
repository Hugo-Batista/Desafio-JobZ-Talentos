import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { BalanceCard } from '../components/BalanceCard'
import { TransactionList } from '../components/TransactionList'

export default function DashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_10%_10%,_rgba(34,211,238,0.18),_transparent_28%),radial-gradient(circle_at_92%_84%,_rgba(37,99,235,0.16),_transparent_30%),linear-gradient(180deg,_#eef4ff_0%,_#f8fbff_100%)]">
      <Header title="Dashboard" />

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="md:col-span-2">
            <BalanceCard />
          </div>

          <div className="flex flex-col gap-4">
            <button
              onClick={() => navigate('/transfer')}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-4 font-extrabold text-white shadow-[0_12px_30px_rgba(8,145,178,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_35px_rgba(8,145,178,0.45)] active:scale-95"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              💸 Fazer Transferência
            </button>

            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-md backdrop-blur-sm">
              <p className="mb-4 text-sm font-bold text-slate-700">⚡ Ações Rápidas</p>
              <div className="space-y-2">
                <button className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-md active:scale-95">
                  📱 Meu QR Code
                </button>
                <button className="w-full rounded-lg px-4 py-3 text-left text-sm font-medium text-slate-700 transition-all hover:bg-slate-50 hover:shadow-md active:scale-95">
                  👥 Meus Contatos
                </button>
              </div>
            </div>
          </div>
        </div>

        <TransactionList />
      </main>
    </div>
  )
}
