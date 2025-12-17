# Guia de Publicação - Sistema de Controle de Comissões Timeshare

Seu projeto está pronto para ser publicado em **Railway** ou **Render**. Escolha uma das opções abaixo:

---

## ✅ OPÇÃO 1: RAILWAY (Recomendado - Mais Rápido)

### Passo 1: Criar conta no Railway
1. Acesse: https://railway.app
2. Clique em "Sign Up"
3. Crie sua conta com GitHub, Google ou email

### Passo 2: Conectar seu repositório
1. No dashboard do Railway, clique em "New Project"
2. Selecione "Deploy from GitHub"
3. Conecte sua conta GitHub
4. Selecione o repositório `timeshare_comissoes`

### Passo 3: Configurar variáveis de ambiente
Railway pedirá para configurar as variáveis. Adicione:
```
NODE_ENV=production
PORT=3000
DATABASE_URL=seu_banco_de_dados_mysql
JWT_SECRET=sua_chave_secreta
```

### Passo 4: Deploy
1. Clique em "Deploy"
2. Aguarde 2-5 minutos
3. Seu link estará pronto: `https://seu-projeto-railway.up.railway.app`

---

## ✅ OPÇÃO 2: RENDER

### Passo 1: Criar conta no Render
1. Acesse: https://render.com
2. Clique em "Sign Up"
3. Crie sua conta com GitHub ou Google

### Passo 2: Conectar repositório
1. No dashboard, clique em "New +"
2. Selecione "Web Service"
3. Conecte seu repositório GitHub
4. Selecione `timeshare_comissoes`

### Passo 3: Configurar
- **Name**: timeshare-comissoes
- **Runtime**: Node
- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run start`

### Passo 4: Adicionar banco de dados
1. Clique em "New +"
2. Selecione "PostgreSQL"
3. Configure o banco

### Passo 5: Deploy
1. Clique em "Create Web Service"
2. Aguarde 3-5 minutos
3. Seu link estará pronto: `https://seu-projeto-render.onrender.com`

---

## 📝 Informações Importantes

### Variáveis de Ambiente Necessárias:
```
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://usuario:senha@host:3306/timeshare_comissoes
JWT_SECRET=sua_chave_secreta_aqui
VITE_APP_TITLE=Sistema de Controle de Comissões Timeshare
```

### Arquivos de Configuração:
- `railway.json` - Configuração para Railway
- `Procfile` - Comando de inicialização
- `render.yaml` - Configuração para Render

### Banco de Dados:
O projeto usa MySQL/TiDB. Ambas as plataformas permitem adicionar um banco de dados.

---

## 🚀 Resumo Rápido

| Plataforma | Tempo Deploy | Dificuldade | Link |
|-----------|-------------|-----------|------|
| Railway | 2-5 min | Muito Fácil | railway.app |
| Render | 3-5 min | Fácil | render.com |

**Recomendação**: Use **Railway** - é mais rápido e simples!

---

## ❓ Dúvidas?

Se tiver problemas durante a publicação:
1. Verifique se todas as variáveis de ambiente estão configuradas
2. Verifique se o banco de dados está conectado
3. Consulte a documentação da plataforma escolhida

Boa sorte! 🎉
