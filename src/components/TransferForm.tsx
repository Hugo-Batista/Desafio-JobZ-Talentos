import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useBankStore } from '../stores/bankStore'
import { formatCurrency } from '../utils/format'

const transferSchema = z.object({
  recipientName: z.string().min(3, 'Nome do destinatário deve ter no mínimo 3 caracteres'),
  amount: z.string().refine(
    (val) => !Number.isNaN(parseFloat(val)) && parseFloat(val) > 0,
    'Valor deve ser maior que 0'
  ),
})

type TransferFormData = z.infer<typeof transferSchema>

interface TransferFormProps {
  onSuccess?: () => void
}

export function TransferForm({ onSuccess }: TransferFormProps) {
  const { transfer, balance } = useBankStore()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm<TransferFormData>({
    resolver: zodResolver(transferSchema),
  })

  const amount = watch('amount')
  const isValidAmount = amount && parseFloat(amount) <= balance

  const onSubmit = (data: TransferFormData) => {
    transfer(data.recipientName, parseFloat(data.amount))
    reset()
    onSuccess?.()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-3xl border border-slate-200 bg-white/90 p-7 shadow-xl backdrop-blur-sm">
      <h2 className="mb-6 text-2xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>💸 Fazer Transferência</h2>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          👤 Nome do Destinatário
        </label>
        <input
          type="text"
          {...register('recipientName')}
          placeholder="João Silva"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-cyan-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/70"
        />
        {errors.recipientName && (
          <p className="mt-2 text-sm text-red-500 font-medium">❌ {errors.recipientName.message}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold text-slate-800">
          💰 Valor da Transferência
        </label>
        <input
          type="number"
          {...register('amount')}
          placeholder="0.00"
          step="0.01"
          className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 shadow-sm outline-none transition-all placeholder:text-slate-400 hover:border-cyan-300 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-200/70"
        />
        {errors.amount && (
          <p className="mt-2 text-sm text-red-500 font-medium">❌ {errors.amount.message}</p>
        )}
        {amount && !isValidAmount && (
          <p className="mt-2 text-sm text-red-500 font-medium">
            ⚠️ Saldo insuficiente. Disponível: {formatCurrency(balance)}
          </p>
        )}
      </div>

      <div className="rounded-xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 p-4 text-sm">
        <p className="mb-3 flex justify-between font-bold text-slate-900">
          <span>💵 Saldo disponível:</span>
          <span className="text-cyan-700">{formatCurrency(balance)}</span>
        </p>
        {amount && (
          <p className="flex justify-between border-t border-cyan-200 pt-3 text-slate-800">
            <span>✨ Novo saldo:</span>
            <span className="font-bold text-cyan-700">
              {formatCurrency(balance - parseFloat(amount))}
            </span>
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValidAmount && !!amount}
        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 px-4 py-3 font-extrabold text-white shadow-[0_10px_30px_rgba(8,145,178,0.35)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_35px_rgba(8,145,178,0.45)] active:scale-95 disabled:from-gray-400 disabled:to-gray-400 disabled:shadow-none"
        style={{ fontFamily: 'Space Grotesk, sans-serif' }}
      >
        ✅ Confirmar Transferência
      </button>
    </form>
  )
}
