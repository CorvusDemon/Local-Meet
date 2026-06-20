// Obrót banerów
document.addEventListener('DOMContentLoaded', function() {
    const bannerContainer = document.getElementById('bannerRotator');
    
    if (bannerContainer) {
        const banners = document.querySelectorAll('.banner');
        const prevBtn = document.getElementById('prevBanner');
        const nextBtn = document.getElementById('nextBanner');
        
        let currentIndex = 0;
        let autoRotateInterval;
        
        // Inicjowanie obrotu
        initBannerRotation();
        
        // Przyciski nawigacyjne
        if (prevBtn) {
            prevBtn.addEventListener('click', showPrevBanner);
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', showNextBanner);
        }
        
        // Automatyczny obrót
        startAutoRotation();
        
        // Zatrzymaj obrót po najechaniu kursorem
        bannerContainer.addEventListener('mouseenter', stopAutoRotation);
        bannerContainer.addEventListener('mouseleave', startAutoRotation);
        
        // Funkcji
        function initBannerRotation() {
            if (banners.length > 0) {
                banners[0].classList.add('active');
            }
        }
        
        function showBanner(index) {
            // Ukryć wszystkie banery
            banners.forEach(banner => {
                banner.classList.remove('active');
            });
            
            // Pokaż wybrany baner
            currentIndex = (index + banners.length) % banners.length;
            banners[currentIndex].classList.add('active');
        }
        
        function showNextBanner() {
            showBanner(currentIndex + 1);
            resetAutoRotation();
        }
        
        function showPrevBanner() {
            showBanner(currentIndex - 1);
            resetAutoRotation();
        }
        
        function startAutoRotation() {
            if (!autoRotateInterval) {
                autoRotateInterval = setInterval(showNextBanner, 5000); // Смена каждые 5 секунд
            }
        }
        
        function stopAutoRotation() {
            if (autoRotateInterval) {
                clearInterval(autoRotateInterval);
                autoRotateInterval = null;
            }
        }
        
        function resetAutoRotation() {
            stopAutoRotation();
            startAutoRotation();
        }
        
        // Rozpocznij automatyczny obrót
        startAutoRotation();
    }
});
