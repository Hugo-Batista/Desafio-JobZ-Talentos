import { useBankStore } from '../stores/bankStore'
import { formatCurrency } from '../utils/format'
import { formatDate } from '../utils/format'
import type { Transaction } from '../types'

export function TransactionList() {
  const transactions = useBankStore((state) => state.transactions)

  const getTransactionIcon = (transaction: Transaction) => {
    switch (transaction.type) {
      case 'transfer':
        return '📤'
      case 'deposit':
        return '📥'
      case 'withdrawal':
        return '💳'
      default:
        return '•'
    }
  }

  const getTransactionColor = (type: string) => {
    switch (type) {
      case 'transfer':
        return 'text-red-600'
      case 'deposit':
        return 'text-green-600'
      case 'withdrawal':
        return 'text-orange-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-xl backdrop-blur-sm">
      <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
        📊 Últimas Transações
      </h3>
      <div className="space-y-3">
        {transactions.length === 0 ? (
          <p className="py-8 text-center text-slate-500">Nenhuma transação</p>
        ) : (
          transactions.map((transaction) => (
            <div
              key={transaction.id}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition-colors hover:bg-white"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{getTransactionIcon(transaction)}</span>
                <div>
                  <p className="font-medium text-slate-900">
                    {transaction.description}
                  </p>
                  <p className="text-sm text-slate-500">
                    {formatDate(transaction.date)}
                  </p>
                </div>
              </div>
              <p className={`font-semibold ${getTransactionColor(transaction.type)}`}>
                {transaction.type === 'deposit' ? '+' : '-'}
                {formatCurrency(transaction.amount)}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
