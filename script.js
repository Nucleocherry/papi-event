document.addEventListener('DOMContentLoaded', () => {
    // Vérification de la sélection des éléments
    const form = document.getElementById('interest-form');
    const successMessage = document.getElementById('success-message');
    const errorMessage = document.getElementById('error-message');

    if (!form || !successMessage || !errorMessage) {
        console.error("Erreur: Un ou plusieurs éléments n'ont pas été trouvés dans le DOM. Vérifie tes IDs.");
        return;
    }

    const endpoint = "https://formspree.io/f/xojkleye";

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);

        // Cache les messages précédents avant de soumettre
        successMessage.classList.add('hidden');
        errorMessage.classList.add('hidden');

        try {
            const response = await fetch(endpoint, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            // La soumission a été tentée. Puisque vous dites que les données sont reçues,
            // nous allons procéder comme si tout s'était bien passé pour l'utilisateur,
            // tout en gardant une trace des erreurs dans la console pour le débogage.

            if (response.ok) {
                console.log("Soumission réussie.");
            } else {
                // Formspree a renvoyé une erreur (400, 422, 429)
                console.error("Erreur renvoyée par Formspree. Statut:", response.status);
                // Nous ne montrons plus l'erreur à l'utilisateur ici.
            }

            // --- Comportement pour restaurer la confirmation utilisateur ---
            
            // 1. Cacher le formulaire
            form.classList.add('hidden');
            
            // 2. Afficher le message de succès (avec votre "merci")
            successMessage.classList.remove('hidden');

        } catch (error) {
            // Erreur réseau (pas d'internet, etc.)
            console.error('Erreur Réseau:', error);
            // S'il y a une erreur réseau, on montre quand même l'erreur
            // car les données pourraient ne pas être parties du tout.
            errorMessage.classList.remove('hidden');
        }
    });
});
