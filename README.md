# Backend Simples - Node.js + Express + Sequelize

Um backend básico e simples em Node.js com Express e Sequelize.

## 📁 Estrutura do Projeto

```
BASH/
├── controllers/
│   └── userController.js   # Lógica para usuários
├── models/
│   └── User.js            # Modelo de usuário
├── routes/
│   └── userRoutes.js      # Rotas da API
├── .env                   # Variáveis de ambiente
├── .gitignore            # Arquivos ignorados pelo Git
├── package.json          # Dependências do projeto
├── server.js             # Servidor principal
└── README.md             # Este arquivo
```

## 🚀 Como Usar

### 1. Instalar dependências:
```bash
npm install
```

### 2. Configurar banco no .env:
```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=meu_banco
DB_USER=usuario
DB_PASSWORD=senha
```

### 3. Executar:
```bash
npm run dev
```

## 🔌 Endpoints

| Método | URL | Descrição |
|--------|-----|-----------|
| GET | `/api/users` | Lista usuários |
| GET | `/api/users/:id` | Busca usuário |
| POST | `/api/users` | Cria usuário |
| PUT | `/api/users/:id` | Atualiza usuário |
| DELETE | `/api/users/:id` | Deleta usuário |

### Exemplo de criação:
```json
POST /api/users
{
  "nome": "João Silva",
  "email": "joao@email.com",
  "cpf": "12345678901",
  "senha": "123456",
  "confSenha": "123456"
}
```

