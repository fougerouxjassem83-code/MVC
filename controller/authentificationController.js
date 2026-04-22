/********************************************************************************************** */
/*Ici je vais créer les fonctions qui vont gérer l'authentification */
/*********************************************************************************************** */

const User = require('../models/User');
const bcrypt = require('bcrypt');
/* On importe bcrypt pour chiffrer les mots de passe */

module.exports = {

    registerView: (req, res) => {
        res.render('register');
    },
    
    registerUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.render('register', { erreur: 'Veuillez remplir tous les champs !' });
        }

        const userExiste = await User.findOne({ where: { email: email } });

        if (userExiste) {
            return res.render('register', { erreur: 'Cet email est déjà utilisé !' });
        }

        const passwordChiffre = await bcrypt.hash(password, 10);

        const user = await User.create({
            email: email,
            password: passwordChiffre
        });

        console.log('Utilisateur créé !', user);
        res.redirect('/acceuil');
    },

    loginView: (req, res) => {
        res.render('login');
    },

    loginUser: async (req, res) => {
        const email = req.body.email;
        const password = req.body.password;

        if (!email || !password) {
            return res.render('login', { erreur: 'Veuillez remplir tous les champs !' });
        }

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.render('login', { erreur: 'Email ou mot de passe incorrect !' });
        }

        const passwordCorrect = await bcrypt.compare(password, user.password);

        if (!passwordCorrect) {
            return res.render('login', { erreur: 'Email ou mot de passe incorrect !' });
        }

        res.redirect('/acceuil');
    },

    /* Récupérer un utilisateur par son ID */
    getUserById: async (req, res) => {
        const user = await User.findOne({ where: { id: 1 } });
        console.log('Utilisateur par ID :', user);
    },

    /* Récupérer un utilisateur par son EMAIL */
    getUserByEmail: async (req, res) => {
        const user = await User.findOne({ where: { email: 'oustadoifikidine@gmail.com' } });
        console.log('Utilisateur par email :', user);
    },

    /******************************************************************************************* */
    /*****ici j'utilise la Méthode GET pour récuperer tous les utilisateurs */
    /****************************************************************************************** */
    getAllUsers: async (req, res) => {
        const users = await User.findAll(); // Récupérer tous les utilisateurs de la base de données
        console.log('Tous les utilisateurs :', users);
    }
}