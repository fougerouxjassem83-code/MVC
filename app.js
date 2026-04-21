/*************************************************** */
/**********ici je rappel mon serveur*************** */
/************************************************ */
const express = require('express');
const app = express();



/******************************************************** */
/*ici on dit à Express où trouver les fichiers statiques */
/****************************************************** */
app.use(express.static('public'));




/*************************************************** */
/*ici je creer un middleware pour récuperé les infos */
/****************************************************/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



/*************************************************** */
/*ici j'importe mon controller d'acceuil pour creer mes routes */
/*************************************************** */
const acceuilRoute = require('./routes/acceuilRoute');



/*************************************************** */
/*ici j'importe mon controller d'authentification pour creer mes routes */
/*************************************************** */
const authentificationRoute = require('./routes/authentificationRoute');
app.use("/", authentificationRoute);




/*************************************************** */
/*ici j'utilise le moteur de template ejs pour rendre mes vues */
/*************************************************** */
app.set('views', './views');
app.set('view engine', 'ejs');




/*************************************************** */
/*ici j'utilise mon controller d'acceuil pour creer mes routes */
/*************************************************** */
app.use("/", acceuilRoute);




/****************************************************************** */
/*ici j'importe ma base de données pour faire la connexion à MySQL */
/**************************************************************** */
const sequelize = require('./config/db.config');
const User = require('./models/User');

sequelize.authenticate()
  .then(() => {
    console.log('Connexion MySQL réussie !');
    return sequelize.sync();
  })
  .then(() => console.log())
  .catch(err => console.error('Erreur :', err));


module.exports = app;









































module.exports = app;