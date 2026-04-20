/********************************************************************** */ 
/*  Ce fichier est chargé de faire la connexion à ma base de données  */
/******************************************************************** */

const { Sequelize } = require('sequelize');
// On importe Sequelize depuis le package installé

const sequelize = new Sequelize('mymvc', 'root', 'Thevie@976', {
  // 'mymvc'  → le nom de ta base de données
  // 'root'   → ton utilisateur MySQL
  // 'Thevie@976'      → ton mot de passe MySQL
  host: 'localhost', // MySQL tourne sur ta machine
  dialect: 'mysql'   // on précise qu'on utilise MySQL
});

module.exports = sequelize;
// On exporte la connexion pour l'utiliser ailleurs



