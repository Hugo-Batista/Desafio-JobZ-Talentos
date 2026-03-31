import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { TransferForm } from '../components/TransferForm'

export default function TransferPage() {
  const navigate = useNavigate()
  const [successMessage, setSuccessMessage] = useState(false)

  const handleTransferSuccess = () => {
    setSuccessMessage(true)
    setTimeout(() => {
      navigate('/dashboard')
    }, 2000)
  }

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_8%_12%,_rgba(34,211,238,0.16),_transparent_30%),radial-gradient(circle_at_85%_88%,_rgba(59,130,246,0.18),_transparent_34%),linear-gradient(180deg,_#eef5ff_0%,_#f7fbff_100%)]">
      <Header title="Transferência" />

      <main className="max-w-2xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {successMessage && (
          <div className="mb-6 rounded-2xl border border-emerald-300 bg-gradient-to-r from-emerald-50 to-cyan-50 p-4 text-emerald-900 shadow-md">
            <p className="flex items-center gap-2 text-lg font-bold">✅ Sucesso!</p>
            <p className="text-sm mt-1">Transferência realizada com sucesso!</p>
            <p className="text-xs mt-2 opacity-75">Você será redirecionado em breve...</p>
          </div>
        )}

        <div className="space-y-6">
          <div>
            <h1 className="mb-2 flex items-center gap-2 text-3xl font-bold text-slate-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              💸 Fazer Transferência
            </h1>
            <p className="text-slate-600">Transfira dinheiro de forma rápida e segura</p>
          </div>

          <TransferForm onSuccess={handleTransferSuccess} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-5 shadow-md">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">📋 Passo a passo</h3>
              <ol className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span> Nome do destinatário</li>
                <li className="flex items-center gap-2"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span> Valor da transferência</li>
                <li className="flex items-center gap-2"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span> Revise as informações</li>
                <li className="flex items-center gap-2"><span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span> Confirme a operação</li>
              </ol>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white/85 p-5 shadow-md backdrop-blur-sm">
              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">⚠️ Importante</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2">✓ Verifique o nome do destinatário</li>
                <li className="flex items-center gap-2">✓ Confirme o valor antes de enviar</li>
                <li className="flex items-center gap-2">✓ As transferências são imediatas</li>
                <li className="flex items-center gap-2">✓ Não é possível reverter operações</li>
              </ul>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate('/dashboard')}
          className="mt-8 flex items-center gap-2 px-6 py-2 font-bold text-slate-700 transition-all hover:scale-105 hover:text-slate-900"
        >
          ← Voltar ao Dashboard
        </button>
      </main>
    </div>
  )
}
