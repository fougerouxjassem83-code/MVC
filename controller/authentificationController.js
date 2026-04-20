

/** ICI JE VAIS CREER UNE FONCTION QUI VA RENDRE LA PAGE D'ACCEUIL.EJS */

module.exports = {

    registerView: (req, res) => {
        res.render('register');
    },
    
    registerUser: async (req, res) => {
        console.log("### CONTROLLER D'AUTHENTIFICATION ###");
    }
}


/********************************************************************************************** */
/*Ici j'e vais créer un un codage qui vas permetre de réécupéré les données du formulaire */
/*********************************************************************************************** */

/** ICI JE VAIS CREER UNE FONCTION QUI VA RENDRE LA PAGE D'ACCEUIL.EJS */

const User = require('../models/User');
/* On importe le modèle User pour pouvoir interagir avec la table Users */

module.exports = {

    registerView: (req, res) => {
        /* On affiche la page register.ejs */
        res.render('register');
    },
    
    registerUser: async (req, res) => {
        /* On récupère les données du formulaire */
        console.log("### CONTROLLER D'AUTHENTIFICATION ###");

        const user = await User.create({
            /* On insère un nouvel utilisateur dans la table Users */
            email: req.body.email,
            password: req.body.password
        });

        console.log('Utilisateur créé !', user);
        /* On redirige vers la page d'acceuil après l'inscription */
        res.redirect('/');
    }
}