# Sistema de Controle de Comissões Timeshare - TODO

## Funcionalidades Principais

### Backend & Database
- [x] Criar schema do banco de dados (vendas, comissões, parcelas)
- [x] Implementar lógica de cálculo de comissões (2% do valor vendido)
- [x] Implementar lógica de parcelamento vinculado à entrada
- [x] Criar procedures tRPC para CRUD de vendas
- [x] Criar procedures tRPC para consulta de comissões
- [x] Criar procedures tRPC para relatórios e análises
- [x] Implementar testes unitários para lógica de negócio

### Frontend - Dashboard
- [x] Criar layout principal com navegação lateral (DashboardLayout)
- [x] Implementar dashboard executivo com métricas em tempo real
- [x] Criar cards com indicadores principais (total vendido, comissões, parcelas pendentes)
- [ ] Implementar gráficos de análise (vendas por período, comissões por status)

### Frontend - Gestão de Vendas
- [x] Criar página de listagem de vendas
- [x] Implementar formulário de nova venda
- [ ] Criar formulário de edição de venda
- [ - [x] Criar visualização detalhada de venda com histórico de parcelasas
- [ ] Adicionar filtros e busca na listagem

### Frontend - Gestão de Comissões
- [x] Criar página de listagem de comissões
- [ ] Implementar visualização de parcelas por venda
- [x] Criar funcionalidade de marcar parcela como recebida
- [ ] Implementar filtros por status (pendente, recebida, atrasada)
- [ ] Adicionar busca e ordenação

### Frontend - Simulador
- [x] Criar página de simulador de parcelamento
- [x] Implementar cálculo em tempo real de parcelas
- [x] Mostrar preview de cronograma de recebimento
- [ ] Adicionar opções de diferentes cenários de entrada

### Frontend - Relatórios
- [ ] Criar página de relatórios gerenciais
- [ ] Implementar relatório de fluxo de caixa projetado
- [ ] Criar relatório de comissões por período
- [ ] Implementar exportação de relatórios (CSV/Excel)
- [ ] Adicionar gráficos de análise temporal

### Funcionalidades Avançadas
- [ ] Implementar notificações de parcelas a receber
- [ ] Criar sistema de alertas para parcelas atrasadas
- [ ] Implementar histórico de alterações
- [ ] Adicionar dashboard mobile-friendly
- [ ] Criar documentação de uso do sistema

### Testes & Qualidade
- [ ] Escrever testes unitários para procedures tRPC
- [ ] Testar fluxo completo de cadastro de venda
- [ ] Testar cálculos de comissão e parcelamento
- [ ] Validar responsividade em diferentes dispositivos
- [ ] Testar exportação de relatórios

### Finalização
- [ ] Revisar UX/UI de todas as páginas
- [ ] Otimizar performance de queries
- [ ] Adicionar tratamento de erros robusto
- [ ] Criar checkpoint final
- [ ] Documentar sistema para o usuário


## Sistema de Autenticação Própria

### Backend - Autenticação
- [x] Adicionar campo de senha (hash) na tabela de usuários
- [x] Criar procedure tRPC para registro de novos usuários
- [x] Criar procedure tRPC para login com username/senha
- [x] Implementar hash de senha com bcrypt
- [x] Atualizar sistema de sessão para autenticação local (JWT)
- [x] Criar testes para registro e login

### Frontend - Autenticação
- [x] Criar página de Login com formulário username/senha
- [x] Criar página de Registro de novo colaborador
- [x] Atualizar DashboardLayout para usar nova autenticação
- [x] Adicionar validação de formulários
- [x] Implementar feedback de erros de autenticação


## Correções Urgentes

- [x] Corrigir problema de cookies não sendo salvos no login
- [x] Verificar e corrigir redirecionamento após login bem-sucedido
- [x] Criar conta master do administrador (CristhianGestor / 310394)
- [x] Testar fluxo completo de login com conta master


## Conversão para Modo Demo (Sem Autenticação)

- [x] Remover proteção de autenticação de todas as procedures (protectedProcedure → publicProcedure)
- [x] Remover páginas de Login e Registro
- [x] Atualizar DashboardLayout para não verificar autenticação
- [x] Atualizar App.tsx para rota inicial ser o Dashboard
- [x] Remover verificações de usuário no frontend
- [x] Testar acesso direto ao sistema


## Sistema de Comissões por Cargo

- [x] Adicionar campo 'cargo' na tabela de vendas (gerente, consultor, supervisor, promotor)
- [x] Atualizar lógica de cálculo: Gerente 1% do valor total
- [x] Atualizar lógica de cálculo: Consultor e Supervisor 2% do valor total
- [x] Atualizar lógica de cálculo: Promotor 1.5% do valor total
- [x] Adicionar seleção de cargo no formulário de nova venda
- [x] Atualizar simulador para considerar diferentes cargos
- [ ] Atualizar dashboard e relatórios com informações de cargo


## Correção de Carregamento

- [x] Investigar por que dashboard não carrega informações
- [x] Verificar logs do servidor para erros
- [x] Testar chamadas tRPC no console do navegador
- [x] Corrigir problemas de autenticação em modo demo
- [x] Validar que todas as páginas carregam corretamente


## Remover Modo Demo e Reativar Autenticação

- [x] Reverter mudanças de publicProcedure para protectedProcedure
- [x] Reativar verificação de autenticação no DashboardLayout
- [x] Adicionar rotas de Login e Registro de volta
- [x] Atualizar App.tsx para redirecionar para login quando não autenticado
- [x] Testar fluxo completo de registro e login
- [x] Validar que usuário master funciona corretamente


## Remover OAuth Completamente

- [x] Remover getLoginUrl do const.ts
- [x] Atualizar useAuth para não usar OAuth
- [x] Garantir que sistema use apenas /login local
- [x] Testar fluxo completo sem OAuth


## Funcionalidade de Exclusão de Vendas

- [x] Criar procedure tRPC para excluir venda
- [x] Excluir parcelas relacionadas automaticamente
- [x] Adicionar botão de excluir na página de Vendas
- [x] Adicionar confirmação antes de excluir
- [x] Testar exclusão de venda


## Edição de Status de Parcelas

- [x] Adicionar campo 'status' na tabela de parcelas (pendente, recebida, atrasada, cancelada)
- [x] Criar procedure tRPC para atualizar status de parcela
- [x] Adicionar botões na página de Comissões para marcar parcela como recebida
- [x] Adicionar opção de cancelar parcela
- [ ] Atualizar dashboard para considerar apenas parcelas pendentes/recebidas (excluir canceladas)
- [ ] Adicionar filtros na página de Comissões por status
- [x] Testar atualização de status de parcelas


## Controle Mensal (Carteira) e Inadimplência

- [x] Adicionar status 'inadimplente' ao enum de status de parcelas
- [x] Atualizar procedure de update de parcelas para aceitar inadimplente
- [x] Criar página Carteira com visualização mensal de recebimentos
- [x] Mostrar total a receber por mês (agrupado por mês/ano)
- [x] Adicionar link de Carteira no menu de navegação
- [x] Atualizar página de Comissões para incluir opção inadimplente
- [x] Testar funcionalidade de carteira mensal


## Exibição de Data da Venda

- [x] Adicionar data da venda na página de Vendas (listagem)
- [x] Adicionar data da venda na página de Comissões
- [x] Adicionar data da venda na página de Detalhes da Venda
- [x] Testar exibição de datas


## Campo de Data no Formulário de Nova Venda

- [x] Adicionar campo de seleção de data no formulário de nova venda
- [x] Atualizar backend para aceitar dataVenda customizada
- [x] Testar cadastro de vendas retroativas


## Correção de Datas de Vencimento

- [x] Verificar cálculo de datas de vencimento - Já está correto (primeira parcela vence 1 mês após venda)
- [x] Função calcularParcelas já implementa corretamente (dataVencimento.setMonth + i)
- [ ] Testar com vendas de diferentes datas para confirmar


## Dashboard Individual e Edição de Vendas

- [x] Filtrar dados do dashboard por usuário logado
- [x] Remover agregação geral de dados
- [x] Mostrar apenas vendas do usuário logado
- [x] Criar página de edição de vendas (EditarVenda.tsx)
- [x] Adicionar botão de edição na listagem de vendas
- [x] Implementar recálculo de parcelas ao editar valor/cargo/parcelamento
- [x] Adicionar rota /vendas/:id/editar
- [x] Testar edição de venda com recálculo de comissão
- [x] Validar que usuário só pode editar suas próprias vendas


## Correções Pendentes

- [x] Botão de edição não está visível na página de vendas (ícone de lápis não aparece)
- [x] Verificar se dashboard está mostrando dados agregados ao invés de apenas do usuário logado


## Melhoria na Página de Carteira

- [x] Adicionar nome do cliente ao lado do número do contrato para facilitar identificação durante recebimento


## Implementação de Relatórios com Gráficos

- [x] Implementar gráficos de vendas por período
- [x] Adicionar gráfico de comissões recebidas vs pendentes
- [x] Criar visualização de evolução de vendas ao longo do tempo
- [x] Implementar tabela de resumo com principais métricas
- [x] Tornar interface intuitiva e de fácil compreensão
- [x] Adicionar gráfico de análise por cargo


## Substituir Simulador por Gráficos

- [x] Remover página de Simulador
- [x] Criar página de Gráficos com análises visuais
- [x] Adicionar gráfico de evolução mensal de vendas
- [x] Adicionar gráfico de projeção de recebimentos
- [x] Adicionar gráfico de status das parcelas
- [x] Atualizar navegação do menu


## Remover PWA para Site Normal

- [x] Remover manifest.json
- [x] Remover service worker (sw.js)
- [x] Remover meta tags de PWA do index.html
- [x] Remover registro do service worker do main.tsx


## Sistema de Metas e Projeções

- [x] Criar tabela de metas mensais no banco de dados
- [x] Criar procedures tRPC para CRUD de metas
- [x] Adicionar seção de metas na página de Gráficos
- [x] Implementar edição de metas mensais
- [x] Adicionar barra de progresso de meta
- [x] Implementar projeções baseadas em desempenho atual
- [x] Corrigir bug de cadastro no dia 01


## Logo Morro dos Anjos

- [x] Adicionar logo do Morro dos Anjos no sistema
- [x] Substituir texto "App" pela logo em todas as telas


## Site Guia de Publicação

- [ ] Criar página interativa com guia de publicação
- [ ] Adicionar checklist clicável para acompanhar progresso
- [ ] Adicionar navegação entre etapas
