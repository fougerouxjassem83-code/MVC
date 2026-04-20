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







/************************************************* */
/*Ici j'ai exporter mon module router */
/************************************************* */
module.exports = router;