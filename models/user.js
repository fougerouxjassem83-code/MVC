/***************************************************** */
/* Model User */
/***************************************************** */
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
  }
});



module.exports = User;