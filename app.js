
/*************************************************** */
/**********ici je rappel mon serveur*************** */
/************************************************ */
const express = require('express');
const app = express();
/*************************************************** */






/*************************************************** */
/*ici j'importe mon controller d'acceuil pour creer mes routes */
/*************************************************** */
const acceuilRoute = require('./routes/acceuilRoute');
/*************************************************** */





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
const sequelize = require('./database');
const User = require('./models/User');

sequelize.authenticate()
  .then(() => {
    console.log('Connexion MySQL réussie !');
    return sequelize.sync();
  })
  .then(() => console.log('Tables créées !'))
  .catch(err => console.error('Erreur :', err));





/******************************************************** */
/**Mais pour que le CSS fonctionne, il faut aussi dire à Express 
 * où trouver les fichiers statiques. Ajoute ceci dans ton app.js :
javascriptapp.use(express.static('public'));**on va utiliser les 
fichier static qui se trouve dans public****** */
  /*************************************************** */
app.use(express.static('public'));














































module.exports = app;