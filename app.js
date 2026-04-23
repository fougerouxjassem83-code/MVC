
/*************************************************************************************************/
/**                                                                                             **/
/**   On importe express pour créer l'application                                              **/
/**                                                                                             **/
/*************************************************************************************************/
const express = require('express');
const app = express();


/*************************************************************************************************/
/**                                                                                             **/
/**   On dit à Express où trouver les fichiers statiques comme le CSS et le JS                 **/
/**   Tout ce qui est dans le dossier "public" sera accessible directement                     **/
/**                                                                                             **/
/*************************************************************************************************/
app.use(express.static('public'));


/*************************************************************************************************/
/**                                                                                             **/
/**   On crée les middlewares pour récupérer les données des formulaires                       **/
/**   Sans ça, req.body serait undefined et on ne pourrait pas lire les données               **/
/**                                                                                             **/
/*************************************************************************************************/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


/*************************************************************************************************/
/**                                                                                             **/
/**   On importe les routes d'acceuil pour gérer les pages principales du site                **/
/**                                                                                             **/
/*************************************************************************************************/
const acceuilRoute = require('./routes/acceuilRoute');


/*************************************************************************************************/
/**                                                                                             **/
/**   On importe les routes d'authentification pour gérer l'inscription et la connexion        **/
/**   Toutes les routes commençant par "/" seront gérées par ce fichier                        **/
/**                                                                                             **/
/*************************************************************************************************/
const authentificationRoute = require('./routes/authentificationRoute');
app.use("/", authentificationRoute);


/*************************************************************************************************/
/**                                                                                             **/
/**   On dit à Express où trouver les vues et quel moteur de template utiliser                 **/
/**   On utilise EJS pour afficher nos pages HTML dynamiquement                                **/
/**                                                                                             **/
/*************************************************************************************************/
app.set('views', './views');
app.set('view engine', 'ejs');


/*************************************************************************************************/
/**                                                                                             **/
/**   On utilise les routes d'acceuil pour gérer les pages principales du site                **/
/**                                                                                             **/
/*************************************************************************************************/
app.use("/", acceuilRoute);


/*************************************************************************************************/
/**                                                                                             **/
/**   On importe la connexion à la base de données MySQL grâce à Sequelize                    **/
/**   On importe aussi le modèle User pour créer la table Users automatiquement               **/
/**                                                                                             **/
/*************************************************************************************************/
const sequelize = require('./config/db.config');
const User = require('./models/User');

sequelize.authenticate()
  .then(() => {
    console.log('Connexion MySQL réussie !');

    /* alter:true met à jour les tables si on a modifié les modèles */
    return sequelize.sync({ alter: true })
  })
  .then(() => console.log('Tables mises à jour !'))
  .catch(err => console.error('Erreur :', err));


/*************************************************************************************************/
/**                                                                                             **/
/**   On exporte l'application pour qu'elle soit utilisée dans myserveur.js                   **/
/**                                                                                             **/
/*************************************************************************************************/
module.exports = app;















