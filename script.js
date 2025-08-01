document.addEventListener('DOMContentLoaded', function() {
    // Dark mode toggle
    const darkToggle = document.getElementById('darkModeToggle');
    darkToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        // Optionally save preference
        localStorage.setItem('luxuryDarkMode', document.body.classList.contains('dark') ? '1' : '0');
        // Change icon
        const icon = darkToggle.querySelector('.toggle-icon');
        icon.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
    // Load dark mode preference
    if (localStorage.getItem('luxuryDarkMode') === '1') {
        document.body.classList.add('dark');
        darkToggle.querySelector('.toggle-icon').textContent = '☀️';
    }

    // Animate luxury background (subtle movement)
    const luxuryBg = document.getElementById('luxury-bg');
    if (luxuryBg) {
        luxuryBg.animate([
            { filter: 'blur(0px) brightness(1)' },
            { filter: 'blur(2px) brightness(1.04)' },
            { filter: 'blur(0px) brightness(1)' }
        ], {
            duration: 16000,
            iterations: Infinity
        });
    }
    // Header scroll effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animate solution cards on scroll
    const solutionCards = document.querySelectorAll('.solution-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    solutionCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Here you would typically send the form data to a server
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }
});