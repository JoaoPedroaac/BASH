// Controller simples para usuários
const User = require('../models/User');

const userController = {
    // Listar todos os usuários
    async getAllUsers(req, res) {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Buscar usuário por ID
    async getUserById(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Criar novo usuário
    async createUser(req, res) {
        try {
            const { nome, email, cpf, senha, confSenha } = req.body;
            
            // Validação básica
            if (!nome || !email || !cpf || !senha || !confSenha) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }
            
            if (senha !== confSenha) {
                return res.status(400).json({ error: 'Senhas não coincidem' });
            }

            const user = await User.create({ nome, email, cpf, senha });
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Atualizar usuário
    async updateUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            
            await user.update(req.body);
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // Deletar usuário
    async deleteUser(req, res) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'Usuário não encontrado' });
            }
            
            await user.destroy();
            res.json({ message: 'Usuário deletado com sucesso' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = userController;
