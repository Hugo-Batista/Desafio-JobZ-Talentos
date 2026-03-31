export interface User {
  id: string
  name: string
  email: string
  cpf: string
}

export interface Transaction {
  id: string
  type: 'transfer' | 'deposit' | 'withdrawal'
  amount: number
  recipient: string
  date: string
  description: string
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export interface BankState {
  balance: number
  transactions: Transaction[]
  addTransaction: (transaction: Transaction) => void
  updateBalance: (amount: number) => void
}
