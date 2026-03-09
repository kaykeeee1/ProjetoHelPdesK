🛠 HelpDesk API

Sistema de Help Desk desenvolvido em Node.js + Express + MySQL, permitindo gerenciamento de chamados, autenticação de usuários e comunicação por comentários dentro dos tickets.

Este projeto simula um sistema real de suporte técnico, onde usuários podem abrir chamados e acompanhar o andamento do atendimento.

🚀 Tecnologias utilizadas

Node.js

Express

MySQL

JWT (JSON Web Token)

bcrypt

Nodemon

Cors

📂 Estrutura do projeto
src
 ├── controllers
 │    ├── authController.js
 │    ├── ticketController.js
 │    └── commentController.js
 │
 ├── routes
 │    ├── authRoutes.js
 │    ├── ticketRoutes.js
 │    └── commentRoutes.js
 │
 ├── middlewares
 │    └── authMiddleware.js
 │
 ├── models
 │    └── db.js
 │
 └── server.js
🔐 Autenticação

O sistema utiliza JWT para autenticação.

Após o login, o usuário recebe um token, que deve ser enviado no header das requisições protegidas:

Authorization: Bearer TOKEN
📡 Endpoints da API
🔑 Autenticação
Registrar usuário
POST /auth/register
Login
POST /auth/login
🎫 Tickets (Chamados)
Criar chamado
POST /tickets/create
Listar chamados
GET /tickets
Atualizar chamado
PUT /tickets/:id
Atualizar status
PUT /tickets/status/:id
Deletar chamado
DELETE /tickets/:id
📊 Estatísticas

Retorna um resumo dos chamados do usuário.

GET /tickets/stats

Resposta:

{
 "total": 10,
 "abertos": 5,
 "em_andamento": 3,
 "resolvidos": 2
}
💬 Comentários nos chamados

Permite adicionar mensagens dentro de um ticket.

Adicionar comentário
POST /comments/add
Listar comentários
GET /comments/:ticket_id
🗄 Estrutura do banco
Tabela users
id
name
email
password
Tabela tickets
id
title
description
status
priority
user_id
Tabela comments
id
ticket_id
user_id
comment
created_at
▶️ Como rodar o projeto
1️⃣ Clonar o repositório
git clone https://github.com/seuusuario/helpdesk-system
2️⃣ Instalar dependências
npm install
3️⃣ Rodar o servidor
npm run dev

Servidor rodando em:

http://localhost:3000
🎯 Objetivo do projeto

Este projeto foi desenvolvido para prática de desenvolvimento backend, utilizando Node.js, Express e MySQL, simulando um sistema de suporte técnico utilizado em empresas.

👨‍💻 Autor

Kayke José Evangelista dos Santos

Estudante de Engenharia de Software

Desenvolvedor Backend / Full Stack em formação

🔥 Próximas melhorias

Upload de imagens nos chamados

Sistema de prioridade de tickets

Dashboard administrativo

Frontend em React

Notificações em tempo real
