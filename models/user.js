/**************************************************************************************************** */
/* ICI J'AI CREER UN FICHIER  USER POUR CREES LES UTILISATEURS A L'INSCRIPTIONAIDE D'UN CONSTRUCTEUR */
/************************************************************************************************** */
const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(55),
  },
  password: {
    type: DataTypes.STRING(55),
    unique: true
}
});


/************************* */
module.exports = User;