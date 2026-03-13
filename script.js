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

            if (response.ok) {
                form.classList.add('hidden');
                successMessage.classList.remove('hidden');
            } else {
                // Formspree a renvoyé une erreur (400, 422, 429)
                console.error("Erreur renvoyée par Formspree. Statut:", response.status);
                errorMessage.classList.remove('hidden');
            }
        } catch (error) {
            // Erreur réseau (pas d'internet, etc.)
            console.error('Erreur Réseau:', error);
            errorMessage.classList.remove('hidden');
        }
    });
});
