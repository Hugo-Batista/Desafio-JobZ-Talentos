# Estructura do Projeto Onda Finance

## Visão Geral

O projeto Onda Finance é um app bancário simples, funcional e bem estruturado. Cada parte foi organizada para máxima clareza e fácil manutenção.

## 📁 Estrutura de Pastas Explicada

### `/src/components/`
Componentes reutilizáveis da aplicação:

- **Header.tsx**: Cabeçalho que aparece em todas as páginas autenticadas. Mostra nome do usuário e botão de logout.
- **LoginForm.tsx**: Formulário de login com validação Zod. Aceita qualquer email/senha.
- **BalanceCard.tsx**: Card gradiente azul que exibe o saldo e dados do titular.
- **TransactionList.tsx**: Lista as últimas transações com ícones e cores diferentes por tipo.
- **TransferForm.tsx**: Formulário completo com validação de saldo, nome e valor.

### `/src/pages/`
Páginas completas da aplicação (cada uma é uma rota):

- **LoginPage.tsx**: Página inicial do app. Se já autenticado, redireciona para dashboard.
- **DashboardPage.tsx**: Home do app autenticado. Mostra saldo, transações e botão de transferência.
- **TransferPage.tsx**: Página dedicada para fazer transferências com instruções.

### `/src/stores/`
Gerenciamento de estado centralizado com Zustand:

- **bankStore.ts**: Uma única store que gerencia:
  - Estado de autenticação (user, isAuthenticated)
  - Saldo da conta
  - Lista de transações
  - Ações: login, logout, transfer, deposit

*Por que uma store única?* Simples e funcional. Zustand permite isso sem bagunça.

### `/src/types/`
Definições TypeScript:

- **index.ts**: Tipos para User, Transaction, AuthState, BankState. Garante type-safety em todo o código.

### `/src/utils/`
Funções utilitárias reutilizáveis:

- **format.ts**: 
  - `formatCurrency()` - Formata números como moeda BRL
  - `formatDate()` - Formata datas em português
  - `formatCPF()` - Formata CPF

### Arquivos Raiz
- **App.tsx**: Define rotas e proteção (redireciona para login se não autenticado)
- **main.tsx**: Ponto de entrada. Configura React Router, Query Client, e renderiza App
- **index.css**: Estilos globais Tailwind CSS
- **index.html**: HTML base

## 🔄 Fluxo de Dados

1. **Usuário acessa app** → LoginPage
2. **Login** → bankStore.login() → localStorage + redirect
3. **Dashboard carregado** → BalanceCard + TransactionList
4. **Clica em transferir** → TransferPage → TransferForm
5. **Submete forma** → bankStore.transfer() → transação adicionada na lista
6. **Novo saldo atualizado** → Dashboard refatora automaticamente (Zustand)

## 🎨 Tailwind CSS

Todas as classes do Tailwind estão customizadas no `tailwind.config.js`:
- Cores primárias: azul, roxo, verde, vermelho
- Nenhum CSS tradicional - tudo utility-first

## 🔒 Autenticação

Mock simples mas eficaz:
- Aceita qualquer email/senha
- Cria usuário fake (João Silva)
- Salva no localStorage via Zustand persist
- Recover do refresh da página

## ✅ Validação de Formulários

Usa React Hook Form + Zod:

```typescript
const schema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Mínimo 6 caracteres'),
})
```

Benefícios:
- Validação em tempo real
- Mensagens de erro claras
- Type-safe (Zod infere tipos)
- DRY (não repete validação)

## 🚀 Por Que Simples?

1. **Uma store única** - Zustand sem overkill
2. **Componentes pequenos** - Cada um faz uma coisa bem
3. **Sem APIs externas** - Mock integrado
4. **Sem styled-components** - Tailwind basta
5. **Sem GraphQL** - Axios pronto mas sem complexidade
6. **Sem Redux/Context API complexo** - Zustand é melhor

## 📊 Escalabilidade

Se precisasse crescer:

```
✅ Trocar mock por API real - Axios já está
✅ Adicionar testes - Vitest está setup
✅ Adicionar mais stores - Zustand permite facilmente
✅ Adicionar tipos novos - TypeScript pronto
✅ Integrar notificações - Push ready
```

## 💡 Como Explicar Para Recrutador

**"É simples porque:"**
- Todo component tem um propósito claro
- Padrão único em toda a base
- Fácil adicionar features novas
- Performance > complexidade
- Pronto para produção mas sem overengineering

**"Mostra que entendo:"**
- React hooks bem usados
- TypeScript forte
- Zustand é melhor que Redux aqui
- Validação com Zod é pattern moderno
- Tailwind é produtivo
- Estrutura escalável

---

Pronto para responder perguntas sobre qualquer parte! 🚀
