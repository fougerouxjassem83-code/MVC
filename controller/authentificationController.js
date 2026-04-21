

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
/*Ici je vais créer les fonctions qui vont gérer l'authentification */
/*********************************************************************************************** */

const User = require('../models/User');

module.exports = {

    registerView: (req, res) => {
        res.render('register');
    },
    
    registerUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        /* Si l'email ou le mot de passe est vide on renvoie à la page register */
        if (!email || !password) {
            return res.render('register', { erreur: 'Veuillez remplir tous les champs !' });
        }

        /* On vérifie si l'email existe déjà dans la base de données */
        const userExiste = await User.findOne({ where: { email: email } });

        /* Si l'email existe déjà on renvoie à la page register avec un message d'erreur */
        if (userExiste) {
            return res.render('register', { erreur: 'Cet email est déjà utilisé !' });
        }

        const user = await User.create({
            email: email,
            password: password
        });

        console.log('Utilisateur créé !', user);
        res.redirect('/acceuil');
    }
}



