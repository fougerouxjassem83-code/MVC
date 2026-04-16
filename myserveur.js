/************************************************************ */
/*************************************************************/
/**********  LE mySERVEUR DE CHAT EN NODE.JS  ***************/
/***********************************************************/
/**********************************************************/


/************************************************** */
/*ici j'insère le  http qui vient du package.json*/
/********************************************** */
const http = require('http');


/*ici  j'importe l'application app que j'ai créer juste au-dessus*/
const app = require('./app');
const e = require('express');



/************************************************************ */
/*et dans mon serveur j'aurais une application
 app le fichier app est une application de type express */
/******************************************************** */
 const server = http.createServer(app);


/********************IMPORTANT************************************ */
 /*cic j'importe le express et pour ça je dois 
aller directement dans le terminal  et expresse js me permet de creer mes 
git bash pour executer la commande npm install express */
/***************************************************************** */


/*ici j'écoute le serveur sur le port
 2007 je peux le changer a tout moment */
const numeroPort = 2007;
server.listen(numeroPort, () => {
    console.log(`mon serveur est en cours d\'exécution sur le port ${numeroPort}`);
});


module.exports = server;



