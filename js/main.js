document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM załadowany - inicjalizacja skryptów');
    
    initBurgerMenu();
    
    initContrastMode();
    
    // Inicjowanie galerii
    if (document.querySelector('.gallery-container')) {
        initGallery();
    }
});

// burger-menu telefon
function initBurgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navList = document.querySelector('.nav-list');
    
    if (hamburger && navList) {
        hamburger.addEventListener('click', function() {
            navList.classList.toggle('active');
            hamburger.classList.toggle('active');
            
            document.body.style.overflow = navList.classList.contains('active') ? 'hidden' : '';
        });
        
        const navLinks = document.querySelectorAll('.nav-list a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        window.addEventListener('resize', () => {
            if (window.innerWidth > 800) {
                navList.classList.remove('active');
                hamburger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Tryb contrastu
function initContrastMode() {
    const contrastToggle = document.getElementById('contrast-toggle');
    
    if (!contrastToggle) {
        console.error('Element #contrast-toggle nie został znaleziony!');
        return;
    }
    
    console.log('Inicjalizacja trybu kontrastowego...');
    
    const contrastStylesheet = Array.from(document.styleSheets).find(sheet => 
        sheet.href && sheet.href.includes('contrast.css')
    );
    
    if (!contrastStylesheet) {
        console.warn('Plik contrast.css nie jest podłączony!');
    } else {
        console.log('Plik contrast.css jest podłączony');
    }
    
    const isContrast = localStorage.getItem('highContrast') === 'true';
    console.log('Zapisane ustawienie kontrastu:', isContrast);
    
    if (isContrast) {
        document.body.classList.add('high-contrast');
        console.log('Dodano klasę high-contrast do body');
        
        const icon = contrastToggle.querySelector('i');
        if (icon) {
            icon.className = 'fas fa-sun';
            contrastToggle.setAttribute('aria-label', 'Wyłącz tryb kontrastowy');
            console.log('Zaktualizowano ikonę na "sun"');
        }
    }
    
    contrastToggle.addEventListener('click', function() {
        console.log('Kliknięto przycisk kontrastu');
        
        document.body.classList.toggle('high-contrast');
        
        const isNowContrast = document.body.classList.contains('high-contrast');
        console.log('Nowy stan kontrastu:', isNowContrast);
        
        localStorage.setItem('highContrast', isNowContrast);
        console.log('Zapisano do localStorage:', isNowContrast);
        
        const icon = this.querySelector('i');
        if (icon) {
            if (isNowContrast) {
                icon.className = 'fas fa-sun';
                this.setAttribute('aria-label', 'Wyłącz tryb kontrastowy');
                console.log('Zmieniono ikonę na słońce');
            } else {
                icon.className = 'fas fa-adjust';
                this.setAttribute('aria-label', 'Włącz tryb kontrastowy');
                console.log('Zmieniono ikonę na półksiężyc');
            }
        }
        
        this.style.transform = 'scale(0.9)';
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
        
        const message = isNowContrast 
            ? 'Tryb wysokiego kontrastu włączony' 
            : 'Tryb wysokiego kontrastu wyłączony';
        console.log(message);
        
        showContrastNotification(message);
    });
    
    function showContrastNotification(message) {
        const existingNotification = document.querySelector('.contrast-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        const notification = document.createElement('div');
        notification.className = 'contrast-notification';
        notification.textContent = message;
        notification.style.cssText = `
            position: fixed;
            bottom: 100px;
            right: 30px;
            background: #4285F4;
            color: white;
            padding: 10px 20px;
            border-radius: 6px;
            z-index: 10000;
            font-weight: 600;
            box-shadow: 0 4px 12px rgba(0,0,0,0.2);
            animation: fadeInOut 3s ease;
        `;
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translateY(20px); }
                10% { opacity: 1; transform: translateY(0); }
                90% { opacity: 1; transform: translateY(0); }
                100% { opacity: 0; transform: translateY(20px); }
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
    
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        console.log('localStorage jest dostępny');
    } catch (e) {
        console.error('localStorage nie jest dostępny:', e);
    }
}

// Galeria
function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const modalOverlay = document.createElement('div');
    const modalContent = document.createElement('div');
    const modalImg = document.createElement('img');
    const modalClose = document.createElement('button');
    
    modalOverlay.className = 'modal-overlay';
    modalContent.className = 'modal-content';
    modalClose.className = 'modal-close';
    modalClose.innerHTML = '&times;';
    modalClose.setAttribute('aria-label', 'Zamknij galerię');
    
    modalContent.appendChild(modalImg);
    modalContent.appendChild(modalClose);
    modalOverlay.appendChild(modalContent);
    document.body.appendChild(modalOverlay);
    
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            const imgAlt = this.querySelector('img').alt;
            
            modalImg.src = imgSrc;
            modalImg.alt = imgAlt;
            modalOverlay.classList.add('active');
            
            document.body.style.overflow = 'hidden';
        });
    });
    
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', function(e) {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
            closeModal();
        }
    });
    
    function closeModal() {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initBurgerMenu, initContrastMode, initGallery };
}