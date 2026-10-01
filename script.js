// Filtro Categorie Galleria Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Rimuovi classe active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Gestore Invio Form di Contatto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Grazie per avermi contattato! Ti risponderò al più presto.');
            contactForm.reset();
        });
    }
});// Filtro Categorie Galleria Portfolio
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Rimuovi classe active da tutti i bottoni
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            portfolioCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Gestore Invio Form di Contatto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Grazie per avermi contattato! Ti risponderò al più presto.');
            contactForm.reset();
        });
    }
});// Gestione Selezione Cartelle 3D
document.addEventListener('DOMContentLoaded', () => {
    const mainViewer = document.getElementById('main-3d-viewer');
    const folderCards = document.querySelectorAll('.folder-card');
    const modelTitle = document.getElementById('model-title');
    const modelFormat = document.getElementById('model-format');

    folderCards.forEach(card => {
        card.addEventListener('click', () => {
            // Rimuovi lo stato attivo da tutte le cartelle
            folderCards.forEach(c => {
                c.classList.remove('active');
                const icon = c.querySelector('.folder-icon i');
                if (icon) icon.className = 'fas fa-folder';
                const status = c.querySelector('.folder-status');
                if (status) status.textContent = 'CARICA';
            });

            // Attiva la cartella cliccata
            card.classList.add('active');
            const activeIcon = card.querySelector('.folder-icon i');
            if (activeIcon) activeIcon.className = 'fas fa-folder-open';
            const activeStatus = card.querySelector('.folder-status');
            if (activeStatus) activeStatus.textContent = 'ATTIVO';

            // Leggi gli attributi e aggiorna il model-viewer e l'overlay
            const newModelSrc = card.getAttribute('data-model');
            const newTitle = card.getAttribute('data-title');
            const newFormat = card.getAttribute('data-format');

            if (mainViewer && newModelSrc) {
                mainViewer.setAttribute('src', newModelSrc);
            }
            if (modelTitle && newTitle) modelTitle.textContent = newTitle;
            if (modelFormat && newFormat) modelFormat.textContent = newFormat;
        });
    });
});