
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const sequelize = require('./configs/bd');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); 
app.use(express.json()); 

app.get('/', (req, res) => {
    res.json({ message: 'API funcionando!' });
});

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📍 URL: http://localhost:${PORT}`);
});
