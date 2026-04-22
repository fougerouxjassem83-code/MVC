/************************************************************ */
/* Ici je vais créer les routes pour la page de login */
/********************************************************** */

/* Route pour afficher la page de connexion */
router.get('/login', authentificationController.loginView);

/* Route pour traiter le formulaire de connexion */
router.post('/login', authentificationController.loginUser);