const { DataTypes } = require('sequelize');
/* On importe les types de données de Sequelize */

const sequelize = require('../config/db.config');
/* On importe la connexion à la base de données */

const User = sequelize.define('User', {
/* On définit le modèle User qui correspond à la table Users */

  id: {
    type: DataTypes.INTEGER,      /* type entier */
    primaryKey: true,             /* clé primaire */
    autoIncrement: false           /* s'incrémente automatiquement */
  },

  email: {
    type: DataTypes.STRING(55),   /* varchar(55) */
  },

  password: {
    type: DataTypes.STRING(55),   /* varchar(55) */
  }

});

module.exports = User;
/* On exporte le modèle pour l'utiliser ailleurs */