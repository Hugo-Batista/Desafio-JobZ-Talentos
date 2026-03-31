import { useBankStore } from '../stores/bankStore'
import { formatCurrency } from '../utils/format'

export function BalanceCard() {
  const { balance, user } = useBankStore()

  return (
    <div className="rounded-3xl border border-cyan-300/30 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-700 p-8 text-white shadow-2xl transition-transform hover:scale-[1.02]">
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="mb-2 text-sm font-medium opacity-80">💰 Saldo Disponível</p>
          <h2 className="text-5xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{formatCurrency(balance)}</h2>
        </div>
        <div className="rounded-2xl bg-white/10 p-3 text-4xl opacity-90">🏦</div>
      </div>
      <div className="mt-8 flex items-center justify-between border-t border-cyan-300/30 pt-6 opacity-95">
        <div>
          <p className="text-xs opacity-75 font-bold">👤 Titular</p>
          <p className="font-bold text-lg">{user?.name}</p>
        </div>
        <div className="text-right">
          <p className="text-xs opacity-75 font-bold">🆔 CPF</p>
          <p className="font-mono text-sm font-bold">{user?.cpf}</p>
        </div>
      </div>
    </div>
  )
}
