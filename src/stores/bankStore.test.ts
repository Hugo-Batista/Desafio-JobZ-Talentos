// Exemplo de teste para o bankStore
import { describe, it, expect, beforeEach } from 'vitest'
import { useBankStore } from './bankStore'

describe('Bank Store', () => {
  beforeEach(() => {
    // Limpar store antes de cada teste
    const store = useBankStore.getState()
    store.logout()
  })

  it('deve fazer login com email e senha', () => {
    const { login, isAuthenticated, user } = useBankStore.getState()
    
    login('test@example.com', 'password123')
    
    expect(isAuthenticated).toBe(true)
    expect(user).toBeDefined()
    expect(user?.name).toBe('João Silva')
  })

  it('deve fazer logout', () => {
    const store = useBankStore.getState()
    store.login('test@example.com', 'password')
    
    store.logout()
    
    expect(store.isAuthenticated).toBe(false)
    expect(store.user).toBeNull()
  })

  it('deve realizar transferência', () => {
    const store = useBankStore.getState()
    const initialBalance = store.balance
    const transferAmount = 100
    
    store.transfer('João', transferAmount)
    
    expect(store.balance).toBe(initialBalance - transferAmount)
    expect(store.transactions[0].type).toBe('transfer')
    expect(store.transactions[0].amount).toBe(transferAmount)
  })

  it('deve fazer depósito', () => {
    const store = useBankStore.getState()
    const initialBalance = store.balance
    const depositAmount = 500
    
    store.deposit(depositAmount)
    
    expect(store.balance).toBe(initialBalance + depositAmount)
    expect(store.transactions[0].type).toBe('deposit')
  })
})
