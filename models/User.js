const { DataTypes } = require('sequelize');
const sequelize = require('../configs/bd');


const User = sequelize.define('Users', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  freezeTableName: true
});

module.exports = User;
