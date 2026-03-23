document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // observer.unobserve(entry.target); // Optional: stay visible after scroll
            }
        });
    }, observerOptions);

    // Observe all elements with .fade-in class
    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(13, 17, 23, 0.8)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'var(--glass-bg)';
            navbar.style.borderColor = 'var(--glass-border)';
        }
    });

    // Simple cursor tracking for the glow orbs
    document.addEventListener('mousemove', (e) => {
        const orbs = document.querySelectorAll('.glow-orb');
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        
        // This makes the background glow softly follow the mouse loosely
        orbs[0].style.transform = `translate(${mouseX * 0.05}px, ${mouseY * 0.05}px) scale(1.1)`;
        orbs[1].style.transform = `translate(${-mouseX * 0.05}px, ${-mouseY * 0.05}px) scale(0.9)`;
    });
});
