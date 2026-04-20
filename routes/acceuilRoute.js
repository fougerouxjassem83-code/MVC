/* Dans CE FICHIER JE VAIS CREER MES ROUTES DE LA PAGE D'ACCEUIL.EJS */



const express = require('express');
const router = express.Router();






/************************************************* */
const acceuilController = require("../controller/acceuillController");
/************************************************* */



/************************************************* */
/*Ici je vais creer une route pour la page d'acceuil 
je vais utiliser le router de express pour creer ma route */
/************************************************* */
router.get('/acceuil', acceuilController.acceuilView);







/************************************************* */
/*Ici j'ai exporter mon module router */
/************************************************* */
module.exports = router;