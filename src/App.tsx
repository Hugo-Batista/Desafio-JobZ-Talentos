import { Routes, Route, Navigate } from 'react-router-dom'
import { useBankStore } from './stores/bankStore'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import TransferPage from './pages/TransferPage'

function App() {
  const isAuthenticated = useBankStore((state) => state.isAuthenticated)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Routes>
        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/dashboard" /> : <LoginPage />}
        />
        <Route
          path="/dashboard"
          element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
        />
        <Route
          path="/transfer"
          element={isAuthenticated ? <TransferPage /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to="/dashboard" />} />
      </Routes>
    </div>
  )
}

export default App
