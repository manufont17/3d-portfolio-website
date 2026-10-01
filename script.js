// ============================================================
// CONFIGURAZIONE
// Per far arrivare davvero i messaggi alla tua email:
// 1. crea un form gratuito su https://formspree.io
// 2. incolla qui l'endpoint, es. 'https://formspree.io/f/abcdwxyz'
// ============================================================
const FORM_ENDPOINT = 'https://formsubmit.co/ajax/emanuelefontana123@gmail.com';

document.addEventListener('DOMContentLoaded', () => {
    initPortfolioFilter();
    initVault();
    initContactForm();
});

// ------------------------------------------------------------
// Filtro categorie galleria portfolio
// ------------------------------------------------------------
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioCards = document.querySelectorAll('.portfolio-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-pressed', 'false');
            });
            button.classList.add('active');
            button.setAttribute('aria-pressed', 'true');

            const filterValue = button.dataset.filter;

            portfolioCards.forEach(card => {
                const visible = filterValue === 'all' || card.dataset.category === filterValue;
                card.style.display = visible ? 'block' : 'none';
            });
        });
    });
}

// ------------------------------------------------------------
// 3D Project Vault: apertura cartelle (mouse + tastiera)
// ------------------------------------------------------------
function initVault() {
    const folderTabs = Array.from(document.querySelectorAll('.folder-tab'));
    const projectContents = document.querySelectorAll('.project-vault-content');

    function activate(tab) {
        const targetId = tab.dataset.project;

        folderTabs.forEach(t => {
            const isActive = t === tab;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', String(isActive));
            t.tabIndex = isActive ? 0 : -1;

            const icon = t.querySelector('.folder-icon i');
            if (icon) icon.className = isActive ? 'fas fa-folder-open' : 'fas fa-folder';

            const badge = t.querySelector('.folder-badge');
            if (badge) badge.textContent = isActive ? 'APERTO' : 'SELEZIONA';
        });

        projectContents.forEach(content => {
            content.classList.toggle('active', content.id === targetId);
        });
    }

    folderTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => activate(tab));

        tab.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activate(tab);
            } else if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                e.preventDefault();
                const step = e.key === 'ArrowRight' ? 1 : -1;
                const next = folderTabs[(index + step + folderTabs.length) % folderTabs.length];
                next.focus();
                activate(next);
            }
        });
    });
}

// ------------------------------------------------------------
// Form di contatto
// ------------------------------------------------------------
function initContactForm()
 {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const status = document.getElementById('form-status');
    const submitBtn = form.querySelector('button[type="submit"]');

    const setStatus = (message, isError = false) => {
        if (!status) return;
        status.textContent = message;
        status.style.color = isError ? '#ff6b6b' : '#4cd98a';
    };

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        if (!FORM_ENDPOINT) {
            // Prima il messaggio onesto: senza endpoint non parte nulla.
            console.warn('FORM_ENDPOINT non configurato in script.js: il messaggio non viene inviato.');
            setStatus('Invio non ancora attivo. Contattami direttamente via email.', true);
            return;
        }

        submitBtn.disabled = true;
        setStatus('Invio in corso...');

        try {
            const response = await fetch(FORM_ENDPOINT, {
                method: 'POST',
                body: new FormData(form),
                headers: { Accept: 'application/json' }
            });

            if (!response.ok) throw new Error(`HTTP ${response.status}`);

            setStatus('Grazie per avermi contattato! Ti risponderò al più presto.');
            form.reset();
        } catch (err) {
            console.error('Errore invio form:', err);
            setStatus('Qualcosa è andato storto. Riprova tra poco o scrivimi via email.', true);
        } finally {
            submitBtn.disabled = false;
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    const heroVideo = document.querySelector('.hero-video');
    const videoSource = heroVideo ? heroVideo.querySelector('source') : null;

    if (videoSource) {
        // Appende il timestamp attuale all'URL del video
        videoSource.src = `assets/bg-video.mp4?t=${Date.now()}`;
        heroVideo.load(); // Ricarica la sorgente
    }
});