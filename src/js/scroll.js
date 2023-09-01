const scrollArrow = document.getElementById('scrollArrow');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;

    const scrollPercentage = (scrolled / (documentHeight - windowHeight)) * 100;
    const fillPercentage = Math.min(scrollPercentage, 100);

    scrollArrow.style.background = `conic-gradient(from -90deg, transparent ${100 - fillPercentage}%, #purple ${fillPercentage}%)`;
    
    if (scrolled > windowHeight / 2) {
        scrollArrow.classList.add('active');
    } else {
        scrollArrow.classList.remove('active');
    }
});

scrollArrow.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

