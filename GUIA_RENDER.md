# 🚀 Guia Completo: Publicar no Render

## ✅ Pré-requisitos
- [ ] Conta no GitHub (se não tiver, crie em https://github.com)
- [ ] Seu projeto enviado para GitHub
- [ ] 5 minutos de tempo

---

## 📋 PASSO 1: Preparar seu GitHub

### 1.1 - Criar um repositório no GitHub
1. Acesse https://github.com/new
2. Nome do repositório: `timeshare-comissoes`
3. Descrição: `Sistema de Controle de Comissões Timeshare`
4. Selecione "Public" (para que o Render acesse)
5. Clique em "Create repository"

### 1.2 - Enviar seu código para GitHub
Execute esses comandos no terminal (na pasta do projeto):

```bash
cd /home/ubuntu/timeshare_comissoes

git remote add origin https://github.com/SEU_USUARIO/timeshare-comissoes.git
git branch -M main
git push -u origin main
```

**Substitua `SEU_USUARIO` pelo seu usuário do GitHub!**

---

## 🌐 PASSO 2: Criar conta no Render

1. Acesse https://render.com
2. Clique em "Sign Up"
3. Escolha "Continue with GitHub"
4. Autorize o Render a acessar sua conta GitHub
5. Pronto! Você está logado

---

## 🔧 PASSO 3: Criar Web Service no Render

### 3.1 - Iniciar novo serviço
1. No dashboard do Render, clique em "New +"
2. Selecione "Web Service"
3. Clique em "Connect a repository"

### 3.2 - Conectar seu repositório
1. Procure por `timeshare-comissoes`
2. Clique em "Connect"

### 3.3 - Configurar o serviço
Preencha com esses dados:

| Campo | Valor |
|-------|-------|
| **Name** | timeshare-comissoes |
| **Environment** | Node |
| **Region** | São Paulo (ou mais próximo) |
| **Branch** | main |
| **Build Command** | `npm install && npm run build` |
| **Start Command** | `npm run start` |
| **Plan** | Free |

### 3.4 - Adicionar variáveis de ambiente
Clique em "Advanced" e adicione estas variáveis:

```
NODE_ENV = production
PORT = 3000
```

---

## 🗄️ PASSO 4: Criar Banco de Dados

### 4.1 - Criar PostgreSQL
1. No dashboard, clique em "New +"
2. Selecione "PostgreSQL"
3. Nome: `timeshare-db`
4. Plan: Free
5. Clique em "Create Database"

### 4.2 - Copiar a URL do banco
1. Quando o banco for criado, copie a URL de conexão
2. Volte ao Web Service
3. Adicione a variável:
```
DATABASE_URL = (cole a URL que copiou)
```

---

## 🚀 PASSO 5: Deploy

1. Volte ao Web Service
2. Clique em "Create Web Service"
3. Aguarde 3-5 minutos
4. Quando terminar, você verá um link como:
   ```
   https://timeshare-comissoes.onrender.com
   ```

---

## ✅ Pronto!

Seu sistema está **ONLINE** e acessível para todos!

**Compartilhe este link com seus colaboradores:**
```
https://timeshare-comissoes.onrender.com
```

---

## 🆘 Troubleshooting

### "Build failed"
- Verifique se o `package.json` está correto
- Verifique se o `npm run build` funciona localmente

### "Application failed to start"
- Verifique as variáveis de ambiente
- Verifique a conexão com o banco de dados

### "Database connection error"
- Copie a URL do banco corretamente
- Verifique se a variável `DATABASE_URL` está configurada

---

## 📞 Suporte Render
Se tiver problemas: https://render.com/docs

Boa sorte! 🎉
