/********************************************************** */
/* Fichier JavaScript pour la page d'inscription */
/******************************************************** */

/* Fonction pour afficher ou cacher le mot de passe */
function voirMotDePasse() {

    /* On récupère le champ mot de passe et l'icone oeil */
    const password = document.getElementById('password');
    const oeil = document.getElementById('oeil');

    /* Si le mot de passe est visible on le cache */
    if (password.type === 'text') {
        password.type = 'password';
        oeil.classList.remove('fa-eye');
        oeil.classList.add('fa-eye-slash');

    /* Sinon on l'affiche */
    } else {
        password.type = 'text';
        oeil.classList.remove('fa-eye-slash');
        oeil.classList.add('fa-eye');
    }
}