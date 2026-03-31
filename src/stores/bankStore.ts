import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { User, Transaction } from '../types'

interface BankStoreState {
  // Auth
  user: User | null
  isAuthenticated: boolean
  
  // Bank
  balance: number
  transactions: Transaction[]
  
  // Actions
  login: (email: string, password: string) => void
  logout: () => void
  transfer: (recipientName: string, amount: number) => void
  deposit: (amount: number) => void
}

const INITIAL_USER: User = {
  id: '1',
  name: 'João Silva',
  email: 'joao@example.com',
  cpf: '123.456.789-00',
}

const INITIAL_TRANSACTIONS: Transaction[] = [
  {
    id: '1',
    type: 'deposit',
    amount: 5000,
    recipient: 'Você',
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'Depósito inicial',
  },
  {
    id: '2',
    type: 'transfer',
    amount: 500,
    recipient: 'Maria Santos',
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    description: 'Pagamento',
  },
]

export const useBankStore = create<BankStoreState>()(
  persist(
    (set) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      balance: 5000,
      transactions: INITIAL_TRANSACTIONS,

      // Auth actions
      login: (email: string, password: string) => {
        // Mock: Valida qualquer email/senha não vazia
        if (email && password) {
          set({
            user: INITIAL_USER,
            isAuthenticated: true,
          })
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        })
      },

      // Bank actions
      transfer: (recipientName: string, amount: number) => {
        set((state) => ({
          balance: state.balance - amount,
          transactions: [
            {
              id: String(Date.now()),
              type: 'transfer',
              amount,
              recipient: recipientName,
              date: new Date().toISOString(),
              description: `Transferência para ${recipientName}`,
            },
            ...state.transactions,
          ],
        }))
      },

      deposit: (amount: number) => {
        set((state) => ({
          balance: state.balance + amount,
          transactions: [
            {
              id: String(Date.now()),
              type: 'deposit',
              amount,
              recipient: 'Você',
              date: new Date().toISOString(),
              description: 'Depósito',
            },
            ...state.transactions,
          ],
        }))
      },
    }),
    {
      name: 'bank-store',
    }
  )
)
