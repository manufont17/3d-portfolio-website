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
});
// Gestione Apertura Cartelle e Multi-Viewer 3D (3D Project Vault)
document.addEventListener('DOMContentLoaded', () => {
    const folderTabs = document.querySelectorAll('.folder-tab');
    const projectContents = document.querySelectorAll('.project-vault-content');

    folderTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetProjectId = tab.getAttribute('data-project');

            // 1. Reset stato di tutte le cartelle
            folderTabs.forEach(t => {
                t.classList.remove('active');
                const icon = t.querySelector('.folder-icon i');
                if (icon) icon.className = 'fas fa-folder';
                const badge = t.querySelector('.folder-badge');
                if (badge) badge.textContent = 'SELEZIONA';
            });

            // 2. Attiva la cartella cliccata
            tab.classList.add('active');
            const activeIcon = tab.querySelector('.folder-icon i');
            if (activeIcon) activeIcon.className = 'fas fa-folder-open';
            const activeBadge = tab.querySelector('.folder-badge');
            if (activeBadge) activeBadge.textContent = 'APERTO';

            // 3. Mostra solo il contenuto del progetto selezionato
            projectContents.forEach(content => {
                if (content.id === targetProjectId) {
                    content.classList.add('active');
                } else {
                    content.classList.remove('active');
                }
            });
        });
    });
});