/** ICI JE VAIS CREER MES ROUTES POUR L'AUTHENTIFICATION */



const express = require('express');
const router = express.Router();






/************************************************* */
const authentificationController = require("../controller/authentificationController");
/************************************************* */



/************************************************* */
/*Ici je vais creer une route pour la page d'acceuil 
je vais utiliser le router de express pour creer ma route */
/************************************************* */
router.get('/register', authentificationController.registerView);


/**
 * Ici je vais creer une route pour la page d'acceuil
 * je vais utiliser le router de express pour creer ma route
 * et je vais utiliser la fonction registerUser du controller d'authentification
 * pour traiter les données du formulaire d'inscription
 */
router.post("/register", authentificationController.registerUser);
 




/************************************************* */
/*Ici j'ai exporter mon module router */
/************************************************* */
module.exports = router;