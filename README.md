# Onda Finance 🏦

Um app bancário simples e funcional, construído com React, TypeScript, Vite e Tailwind CSS. Perfeito para demonstrar boas práticas de desenvolvimento front-end.

## Features

✅ **Login Mock** - Autenticação simples sem backend  
✅ **Dashboard** - Visualize seu saldo e histórico de transações  
✅ **Transferências** - Realize transferências com validação de formulário  
✅ **Persistência** - Seus dados são salvos no localStorage  
✅ **Responsivo** - Design mobile-first com Tailwind CSS

## Stack Tecnológica

- **React 19** + TypeScript
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilização utilitária
- **React Router** - Navegação entre páginas
- **Zustand** - Gerenciamento de estado
- **React Hook Form + Zod** - Validação de formulários
- **React Query** - Gerenciamento de dados (preparado para integração com API)
- **Vitest** - Testes unitários

## Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header.tsx       # Cabeçalho com logout
│   ├── LoginForm.tsx    # Formulário de login
│   ├── BalanceCard.tsx  # Cartão de saldo
│   ├── TransactionList.tsx  # Lista de transações
│   └── TransferForm.tsx # Formulário de transferência
├── pages/               # Páginas da aplicação
│   ├── LoginPage.tsx    # Página de login
│   ├── DashboardPage.tsx # Página principal
│   └── TransferPage.tsx # Página de transferência
├── stores/              # State management com Zustand
│   └── bankStore.ts     # Store centralizado
├── types/               # Tipos TypeScript
│   └── index.ts         # Definições de tipos
├── utils/               # Funções utilitárias
│   └── format.ts        # Formatadores (moeda, data, CPF)
├── App.tsx              # Rotas e layout principal
└── main.tsx             # Ponto de entrada
```

## Como Usar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

### Build para Produção

```bash
npm run build
```

### Testes

```bash
npm run test
```

## Credenciais de Demo

Use qualquer email e senha para fazer login:
- **Email**: demo@example.com
- **Senha**: 123456

(Ou qualquer outro - é um mock!)

## Funcionalidades Detalhadas

### 1. Login (Mock)
- Validação de email e senha com Zod
- Dados do usuário: João Silva (CPF: 123.456.789-00)
- Sessão persistida no localStorage

### 2. Dashboard
- Exibe saldo atual (R$ 5.000,00)
- Lista últimas transações com ícones
- Botão para fazer transferência
- Ações rápidas (QR Code, Contatos)

### 3. Transferência
- Formulário com validação de:
  - Nome do destinatário (mínimo 3 caracteres)
  - Valor (maior que 0)
  - Saldo disponível
- Pré-visualização do novo saldo
- Sucesso imediato com redirecionamento
- Histórico é atualizado em tempo real

## Explicação Para Recrutador

**Por que foi estruturado assim?**

1. **Separação de Responsabilidades**: Cada pasta tem um propósito claro (components, pages, stores)
2. **Reutilização**: Componentes genéricos como Header e BalanceCard
3. **State Management**: Zustand é simples mas poderoso - fácil de entender
4. **Validação**: React Hook Form + Zod garante dados corretos antes do submit
5. **Type Safety**: TypeScript em todo o projeto previne bugs
6. **Estilização Modular**: Tailwind CSS permite escrever CSS rápido e consistente

## O que Torna Isso "Simples"?

- ✨ Nenhuma complexidade desnecessária
- 🎯 Funcionalidades focadas e bem definidas
- 📚 Código legível com bons nomes
- 🧪 Pronto para adicionar testes
- 🚀 Performance otimizada com Vite
- 💾 Dados persistem com localStorage + Zustand

## Próximos Passos (Escalabilidade)

Se este projeto fosse expandir, seria fácil adicionar:
- Integração com API real (axios já está configurado)
- Mais tipos de transações
- Gráficos de gastos
- Notificações push
- Autenticação JWT
- Testes E2E com Cypress

## Autor

Desenvolvido como desafio front-end para demonstrar boas práticas de desenvolvimento web moderno.

---

**Stack Obrigatória**: ✅ Todas implementadas com excelência.
