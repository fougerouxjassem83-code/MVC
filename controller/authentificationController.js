/*************************************************************************************************/
/**                                                                                             **/
/**   On importe le modèle User pour interagir avec la table Users dans la base de données     **/
/**                                                                                             **/
/*************************************************************************************************/
const User = require('../models/User');


/*************************************************************************************************/
/**                                                                                             **/
/**   On importe bcrypt, c'est lui qui va chiffrer les mots de passe avant de les enregistrer  **/
/**                                                                                             **/
/*************************************************************************************************/
const bcrypt = require('bcrypt');


module.exports = {

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un arrive sur "/register", cette fonction affiche la page register.ejs       **/
    /**                                                                                             **/
    /*************************************************************************************************/
    registerView: (req, res) => {
        res.render('register');
    },
    
    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un soumet le formulaire d'inscription, cette fonction traite les données     **/
    /**                                                                                             **/
    /*************************************************************************************************/
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

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un arrive sur "/login", cette fonction affiche la page login.ejs             **/
    /**                                                                                             **/
    /*************************************************************************************************/
    loginView: (req, res) => {
        res.render('login');
    },

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un soumet le formulaire de connexion, cette fonction vérifie ses infos       **/
    /**                                                                                             **/
    /*************************************************************************************************/
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

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un arrive sur "/user/id", cette fonction récupère un utilisateur par son ID  **/
    /**                                                                                             **/
    /*************************************************************************************************/
    getUserById: async (req, res) => {
        const user = await User.findOne({ where: { id: 1 } });
        console.log('Utilisateur par ID :', user);
    },

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un arrive sur "/user/email", cette fonction récupère un utilisateur par email **/
    /**                                                                                             **/
    /*************************************************************************************************/
    getUserByEmail: async (req, res) => {
        const user = await User.findOne({ where: { email: 'oustadoifikidine@gmail.com' } });
        console.log('Utilisateur par email :', user);
    },

    /*************************************************************************************************/
    /**                                                                                             **/
    /**   Quand quelqu'un arrive sur "/users", cette fonction récupère tous les utilisateurs        **/
    /**                                                                                             **/
    /*************************************************************************************************/
    getAllUsers: async (req, res) => {
        const users = await User.findAll();
        console.log('Tous les utilisateurs :', users);
    },
/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/user/delete/:id", cette fonction supprime                   **/
/**   l'utilisateur qui a cet ID dans la base de données                                      **/
/**   POUR TESTER : http://localhost:2007/user/delete/1  (remplace 1 par l'ID voulu)          **/
/**                                                                                             **/
/*************************************************************************************************/
deleteUser: async (req, res) => {
    const id = req.params.id;
    await User.destroy({ where: { id: id } });
    console.log('Utilisateur supprimé !');
},


/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/users/delete", cette fonction supprime                      **/
/**   tous les utilisateurs de la base de données                                              **/
/**   POUR TESTER : http://localhost:2007/users/delete                                         **/
/**                                                                                             **/
/*************************************************************************************************/
deleteAllUsers: async (req, res) => {
    await User.destroy({ where: {}, truncate: true });
    console.log('Tous les utilisateurs supprimés !');
},



/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/user/update/:id", cette fonction met à jour                 **/
/**   les informations de l'utilisateur qui a cet ID dans la base de données                  **/
/**   POUR TESTER : http://localhost:2007/user/update/1  (remplace 1 par l'ID voulu)          **/
/**                                                                                             **/
/*************************************************************************************************/
updateUser: async (req, res) => {
    const id = req.params.id;
    /* On récupère l'ID dans l'URL */

    const email = req.body.email;
    const password = req.body.password;
    /* On récupère les nouvelles données du formulaire */

    await User.update(
        { email: email, password: password },
        { where: { id: id } }
    );
    /* On met à jour l'utilisateur qui a cet ID */

    console.log('Utilisateur mis à jour !');
}
























}