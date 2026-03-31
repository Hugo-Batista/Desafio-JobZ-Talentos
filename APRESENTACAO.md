# 🎯 Guia de Apresentação - Onda Finance

## Para o Recrutador

Se você está apresentando este projeto para um recrutador, aqui está um guia prático:

---

## ⏱️ Roteiro de Apresentação (5-10 minutos)

### 1️⃣ Visão Geral (1 min)
**"Este é um app bancário simples, construído com a stack React + TypeScript. O foco foi em:**
- ✅ Boas práticas de código
- ✅ Código bem separado e legível
- ✅ Funcionalidades completas mas simples
- ✅ Fácil de expandir"

### 2️⃣ Stack (1 min)
**"Usei exatamente o que foi pedido:**
- React 19 + TypeScript (type-safe em 100%)
- Vite (build super rápido)
- Tailwind CSS (utility-first, sem CSS tradicional)
- Zustand (state management simples)
- React Hook Form + Zod (validação forte)
- React Router (navegação entre páginas)
- React Query (preparado para API)
- Vitest (testes prontos)"

### 3️⃣ Funcionalidades (2-3 min)

**Abra o app e mostre:**

a) **Login** (mostrar LoginPage)
   - Email/senha com validação Zod
   - Mensagem de demo credentials
   - Clique "Entrar"

b) **Dashboard** (mostrar DashboardPage)
   - Saldo em grande (R$ 5.000)
   - Dados do titular (João Silva, CPF)
   - Últimas transações com ícones
   - Botão de transferência

c) **Transferência** (mostrar TransferPage)
   - Digite nome: "Maria Silva"
   - Digite valor: "250"
   - Mostra novo saldo em tempo real
   - Clique "Confirmar"
   - Sucesso! Redireciona para dashboard
   - Mostra transação nova na lista

d) **Persistência**
   - Refresh a página
   - Dados continuam (localStorage)
   - Pode fazer logout e login novamente

### 4️⃣ Código (2-3 min)

**Mostre a estrutura:**

```
src/
├── components/      (5 componentes simples)
├── pages/          (3 páginas)
├── stores/         (1 store Zustand)
├── types/          (tipos TypeScript)
└── utils/          (funções auxiliares)
```

**Abra alguns arquivos e explique:**

- `src/components/TransferForm.tsx` - "Aqui está o formulário com validação Zod"
- `src/stores/bankStore.ts` - "Uma única store que gerencia tudo - simples e poderosa"
- `src/pages/DashboardPage.tsx` - "Aqui eu compo os componentes"

---

## 💡 Pontos Principais Para Mencionar

### 🎯 Por que é "simples" mas "funcional"?

1. **Uma store, não 5 reducers** - Zustand é mais simples que Redux
2. **Componentes com responsabilidade única** - Entender o que cada um faz é óbvio
3. **Sem lógica complexa** - Foco em legibilidade
4. **Validação forte** - Zod garante dados corretos antes do submit
5. **Escalável** - Pronto para crescer sem grandes mudanças

### 🚀 Como Explicar a Arquitetura

**"Existem 3 camadas:"**

1. **Apresentação** (components + pages)
   - O que o usuário vê
   - Componentes reutilizáveis
   - Layout responsivo

2. **Lógica** (stores)
   - Estado centralizado
   - Ações (login, transfer, etc)
   - Persistência

3. **Utilidades** (types + utils)
   - Tipos TypeScript
   - Funções auxiliares (format, etc)
   - Sem business logic aqui

### ✨ Destaques da Implementação

1. **TypeScript em 100%**
   - Sem `any` em lugar nenhum
   - Tipos definidos para tudo
   - Previne bugs

2. **React Hook Form + Zod**
   - Validação declarativa
   - Mensagens de erro claras
   - Suporta validações complexas

3. **Zustand com Persist**
   - Estado que sobrevive ao refresh
   - localStorage automático
   - Simples de entender

4. **Tailwind CSS**
   - Nenhum CSS escrito manualmente
   - Design consistente
   - Pronto para dark mode (fácil adicionar)

---

## 🔧 Responder Perguntas Comuns

### P: "Como adicionar uma nova transação?"
**R:** "É simples. Na store, em `bankStore.ts`, tenho a ação `transfer()`. Ela faz 3 coisas: subtrai do saldo, cria o objeto da transação e adiciona na lista. Tudo reativo."

### P: "Como conectar uma API real?"
**R:** "Axios já está instalado. Trocar o mock do login por uma chamada `axios.post('/auth/login', data)` é trivial. A estrutura já está pronta para isso."

### P: "Como é a autenticação?"
**R:** "Atualmente é mock - aceita qualquer email/senha. Mas a estrutura está pronta para JWT. Bastaria adicionar um token no localStorage e passar nos headers do axios."

### P: "Por que Zustand e não Redux?"
**R:** "Redux é muito boilerplate para um app simples assim. Zustand é 1/10 da complexidade e faz exatamente o que precisamos. Se tivéssemos 50+ actions, aí sim Redux faria mais sentido."

### P: "Como adicionar testes?"
**R:** "Vitest está configurado. Criei um exemplo em `bankStore.test.ts`. Para rodar: `npm run test`. Fácil adicionar mais."

### P: "Como fazer deploy?"
**R:** "Roda `npm run build` que gera os arquivos em `dist/`. Depois é só fazer upload para Vercel, Netlify ou qualquer host."

---

## 📱 Testar a Responsividade

No navegador, abra DevTools e teste:
- Celular (390px)
- Tablet (768px)
- Desktop (1024px)

Tudo funciona bem em todos os tamanhos! (Tailwind grid responsiva)

---

## 📦 O Que Mostrar Se Pedir Code Review

1. **Type Safety** - Abra `src/types/index.ts`
2. **Store Pattern** - Abra `src/stores/bankStore.ts`
3. **Validação** - Abra `src/components/TransferForm.tsx`
4. **Routing** - Abra `src/App.tsx`
5. **Estrutura** - Mostre a pasta `src/`

---

## 🎤 Closing Statement

**"Este projeto mostra que eu entendo de:"**
- ✅ React moderno (hooks, composition)
- ✅ TypeScript avançado (types, interfaces, generics)
- ✅ State management (quando usar Zustand vs props)
- ✅ Validação de formulários (React Hook Form + Zod)
- ✅ Design patterns (separation of concerns)
- ✅ Performance (Vite, lazy loading, etc)
- ✅ UX/UI (Tailwind, responsivo)

**"E o código está preparado para:**
- 🚀 Escalabilidade (fácil adicionar features)
- 🧪 Testes (Vitest pronto)
- 🔌 Integração com API (Axios ready)
- 👥 Colaboração (código limpo para trabajar em equipo)
- 📚 Manutenção (bem documentado)"

---

## ✅ Checklist Antes de Apresentar

- [ ] App rodando em `http://localhost:3000`
- [ ] Fazer login
- [ ] Ver dashboard com transações
- [ ] Fazer uma transferência
- [ ] Refresh a página e confirmar persistência
- [ ] Abrir DevTools no componente React (Profiler)
- [ ] Mostrar a estrutura de pastas
- [ ] Mostrar alguns arquivos TypeScript

---

**Boa sorte na apresentação! 🚀**

O projeto fala por si próprio. Código simples, funcional e bem feito sempre impressiona.
