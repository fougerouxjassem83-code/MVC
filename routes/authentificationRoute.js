/*************************************************************************************************/
/**                                                                                             **/
/**   On importe express pour créer le routeur                                                  **/
/**                                                                                             **/
/*************************************************************************************************/
const express = require('express');
const router = express.Router();


/*************************************************************************************************/
/**                                                                                             **/
/**   On importe le controller d'authentification pour accéder à toutes ses fonctions          **/
/**                                                                                             **/
/*************************************************************************************************/
const authentificationController = require("../controller/authentificationController");


/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/register", on appelle loginView qui affiche register.ejs     **/
/**                                                                                             **/
/*************************************************************************************************/
router.get('/register', authentificationController.registerView);


/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un soumet le formulaire d'inscription, on appelle registerUser               **/
/**   qui va enregistrer le nouvel utilisateur dans la base de données                         **/
/**                                                                                             **/
/*************************************************************************************************/
router.post("/register", authentificationController.registerUser);


/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/login", on appelle loginView qui affiche login.ejs           **/
/**                                                                                             **/
/*************************************************************************************************/
router.get('/login', authentificationController.loginView);


/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un soumet le formulaire de connexion, on appelle loginUser                   **/
/**   qui va vérifier les informations de l'utilisateur dans la base de données                **/
/**                                                                                             **/
/*************************************************************************************************/
router.post("/login", authentificationController.loginUser);





/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/user/delete/:id", on appelle deleteUser                     **/
/**   qui va supprimer l'utilisateur avec cet ID dans la base de données                      **/
/**                                                                                             **/
/*************************************************************************************************/
router.delete('/user/delete/:id', authentificationController.deleteUser);




/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/users/delete", on appelle deleteAllUsers                    **/
/**   qui va supprimer tous les utilisateurs de la base de données                            **/
/**                                                                                             **/
/*************************************************************************************************/
router.delete('/users/delete', authentificationController.deleteAllUsers);




/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/user/update/:id", on appelle updateUser                     **/
/**   qui va mettre à jour les informations de l'utilisateur dans la base de données          **/
/**                                                                                             **/
/*************************************************************************************************/
router.put('/user/update/:id', authentificationController.updateUser);



/*************************************************************************************************/
/**                                                                                             **/
/**   Quand quelqu'un arrive sur "/user/update/:id", on appelle updateUser                     **/
/**   qui va mettre à jour les informations de l'utilisateur dans la base de données          **/
/**                                                                                             **/
/*************************************************************************************************/
router.put('/user/update/:id', authentificationController.updateUser);


















/*************************************************************************************************/
/**                                                                                             **/
/**   On exporte le routeur pour qu'il soit utilisé dans app.js                                **/
/**                                                                                             **/
/*************************************************************************************************/
module.exports = router;