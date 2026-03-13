// On attend que la page soit bien chargée
document.addEventListener('DOMContentLoaded', () => {
    
    // On récupère le formulaire et le message de succès
    const form = document.getElementById('interest-form');
    const successMessage = document.getElementById('success-message');

    // Quand quelqu'un clique sur "JE SUIS CHAUD(E) !"
    form.addEventListener('submit', (evenement) => {
        // On empêche la page de se recharger (le comportement par défaut)
        evenement.preventDefault();

        // Plus tard, c'est ici que tu ajouteras le code pour envoyer les données 
        // vers ta base de données (Supabase, Firebase, ou un Google Sheet).

        // Pour l'instant, on cache le formulaire et on affiche le message de succès
        form.style.display = 'none';
        successMessage.classList.remove('hidden');
    });

});