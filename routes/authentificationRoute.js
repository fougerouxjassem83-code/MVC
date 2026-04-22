/* Dans CE FICHIER JE VAIS CREER MES ROUTES POUR L'AUTHENTIFICATION */
const express = require('express');
const router = express.Router();



/************************************************* */
const authentificationController = require("../controller/authentificationController");
/************************************************* */



/************************************************* */
/*Ici JUTILISE LA METHODE GET pour creer une route pour la page d'inscription */
/************************************************* */
router.get('/register', authentificationController.registerView);




/*Ici JUTILISE LA METHODE POST  POUR ENREGISTRER UN UTILISATEUR A LA BASE DE DONNEES */
router.post("/register", authentificationController.registerUser);





/************************************************* */
/*Quand un utilisateur tape http://localhost:2007/login dans son navigateur, c'est une requête GET. Cette route dit à Express :
"Quand quelqu'un arrive sur /login, appelle la fonction loginView du controller qui va afficher la page login.ejs" */
/************************************************* */
router.get('/login', authentificationController.loginView);





/*Ici je vais traiter le formulaire de connexion */
router.post("/login", authentificationController.loginUser);


//                                                          ICI JUTILISE LES METHODES GET POUR RECUPERER LES UTILISATEURS DE LA BASE DE DONNEES AVEC SEQUELIZE
/******************************************************************************************************************************************************************************************************** */


/* Route pour récupérer un utilisateur par son ID */
router.get('/user/id', authentificationController.getUserById);


/* ICI JUTILISE LA METHODE GET pour récupérer un utilisateur par son EMAIL */
router.get('/user/email', authentificationController.getUserByEmail);
/************************************************************************************************* */



/************************************************* */
/****ICI JUTILISE LA METHODE GET pour récupérer tous les utilisateurs
 * AVEC LA METHODE findAll() DE SEQUELIZE
 */
/************************************************ */
router.get('/users', authentificationController.getAllUsers); 




/************************************************* */
/*Ici j'ai exporter mon module router */
/************************************************* */
module.exports = router;