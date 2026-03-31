import { useNavigate } from 'react-router-dom'
import { useBankStore } from '../stores/bankStore'

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  const navigate = useNavigate()
  const { user, logout } = useBankStore()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-gradient-to-r from-slate-900 via-blue-900 to-cyan-700 shadow-xl backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="rounded-xl bg-white/15 p-2 text-2xl shadow-lg">🏦</span>
          <div>
            <h1 className="text-2xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Onda Finance</h1>
            <p className="text-xs text-cyan-100">{title}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-white">{user?.name}</p>
            <p className="text-xs text-cyan-100">{user?.email}</p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-lg border border-white/25 bg-white/10 px-4 py-2 font-bold text-white transition-all hover:bg-white/20 hover:shadow-lg active:scale-95"
          >
            🚪 Sair
          </button>
        </div>
      </div>
    </header>
  )
}
