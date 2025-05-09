document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');

    let currentIndex = 0;
    const totalSlides = slides.length;

    const indicatorsContainer = document.querySelector('.carousel-indicators');
    const indicators = [];

    slides.forEach((_, i) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            currentIndex = i;
            updateCarousel();
            resetInterval();
        });
        indicatorsContainer.appendChild(dot);
        indicators.push(dot);
    });

    function updateCarousel() {
        const slideWidth = slides[0].offsetWidth;
        carousel.scrollTo({
            left: slideWidth * currentIndex,
            behavior: 'smooth'
        });
        indicators.forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    let autoSlide = setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 8000);
    
    function resetInterval() {
        clearInterval(autoSlide);
        autoSlide = setInterval(() => {
            currentIndex = (currentIndex + 1) % totalSlides;
            updateCarousel();
        }, 8000);
    }
});