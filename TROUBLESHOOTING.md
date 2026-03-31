# 🔧 Troubleshooting

Se encontrar algum problema, aqui estão as soluções:

---

## ❌ "npm run dev não funciona"

**Solução:**
```bash
# Limpar node_modules e reinstalar
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
npm run dev
```

---

## ❌ "Porta 3000 já sendo usada"

**Solução 1:** Você pode mudar a porta em `vite.config.ts`:
```typescript
server: {
  port: 3001,  // Mude para uma porta livre
}
```

**Solução 2:** Matar o processo na porta:
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :3000
kill -9 <PID>
```

---

## ❌ "Tailwind CSS não está funcionando"

**Solução:**
Verifique se `src/index.css` contém:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

E se `tailwind.config.js` tem o `content`:
```js
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
```

---

## ❌ "TypeScript mostrando erros"

**Solução 1:** Recompilar TypeScript
```bash
npx tsc --noEmit
```

**Solução 2:** Se disser `Cannot find module`:
```bash
npm install --legacy-peer-deps
```

---

## ❌ "Dados não estão persistindo"

**Solução:**
Verifique no DevTools > Application > LocalStorage:
- Deve ter uma chave `bank-store`
- Se não tiver, limpe o cache do navegador

```
Ctrl+Shift+Delete (ou Cmd+Shift+Delete no Mac)
```

---

## ❌ "Login não funciona"

**Solução:**
Qualquer email/senha funciona! Se não está funcionando:

1. Abra DevTools > Console
2. Procure por erros
3. Verifique se o campo não está vazio

O login mock aceita:
```javascript
email: qualquer coisa com @
senha: qualquer coisa
```

---

## ❌ "Componentes não renderizam"

**Solução 1:** Verifique se está em uma rota protegida:
```typescript
// Em App.tsx, rotas protegidas precisam de isAuthenticated
<Route
  path="/dashboard"
  element={isAuthenticated ? <DashboardPage /> : <Navigate to="/login" />}
/>
```

**Solução 2:** Limpe o localStorage:
```javascript
// No console do navegador
localStorage.clear()
// Refresh a página
```

---

## ❌ "Erro: Cannot find module './index.css'"

**Solução:**
Crie o arquivo `src/vite-env.d.ts`:
```typescript
declare module '*.css' {
  const content: Record<string, string>
  export default content
}
```

---

## ❌ "npm install falha"

**Solução:**
Use `--legacy-peer-deps` para evitar conflitos:
```bash
npm install --legacy-peer-deps
```

Ou limpe tudo:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

---

## ✅ Para Verificar Se Está Tudo Ok

```bash
# 1. Servidor rodando?
npm run dev
# Deve mostrar: ➜  Local:   http://localhost:3000/

# 2. Sem erros TypeScript?
npx tsc --noEmit
# Deve retornar nada (sem erros)

# 3. Consegue fazer build?
npm run build
# Deve criar pasta dist/ com arquivos

# 4. Testes passam?
npm run test
# Deve executar testes sem falha
```

---

## 🆘 Se Nada Funcionar

**Nuclear Option** (trocar tudo):

```bash
# 1. Delete tudo
cd "c:\Users\Windows\Documents\Desafio JobZ Talentos"
rmdir /s /q onda-finance

# 2. Clone/recrie o projeto
git clone <seu-repositorio>
cd onda-finance

# 3. Instale tudo do zero
npm install --legacy-peer-deps

# 4. Rode
npm run dev
```

---

## 📞 Dicas de Debug

**Geral:**
- Verifique o console (F12 > Console)
- Procure por erros em vermelho
- Network tab para ver requisições

**React:**
- Instale React Developer Tools extension
- Veja o estado no Profiler

**Zustand:**
- No console: `window.store = useBankStore`
- Depois: `window.store.getState()`

---

**Qualquer coisa estranha, tente:**
```bash
npm cache clean --force
rm -rf node_modules dist .vite
npm install --legacy-peer-deps
npm run dev
```

Geralmente funciona! 🚀
