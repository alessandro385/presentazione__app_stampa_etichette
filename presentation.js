document.addEventListener('DOMContentLoaded', function() {
    // Gestione corretta delle immagini
    const logoElements = document.querySelectorAll('.logo, .footer-logo');
    const screenshotElements = document.querySelectorAll('.screenshot, .full-width-image');
    
    // Importa direttamente le immagini (se stai usando un bundler come webpack/vite)
    // const logoPath = require('@assets/logo.png');
    // const screenshotPath = require('@assets/screenshot.png');
    
    // OPPURE usa il percorso esatto alla cartella assets
    const logoPath = './assets/logo.png'; // Questo è corretto
    const screenshotPath = './assets/interfaccia.png'; // CORRETTO: Usa il nome file corretto
    
    // Aggiorna tutti i riferimenti al logo
    logoElements.forEach(element => {
        element.src = logoPath;
    });
    
    // Aggiorna tutti i riferimenti agli screenshot
    screenshotElements.forEach(element => {
        element.src = screenshotPath;
    });
    
    // Per lo sfondo del hero section
    const heroSection = document.getElementById('hero');
    if (heroSection) {
        heroSection.style.backgroundImage = `linear-gradient(to right, rgba(30, 78, 140, 0.9), rgba(30, 78, 140, 0.7)), url("${screenshotPath}")`;
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight the active section in navigation
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Adding active class style
    const style = document.createElement('style');
    style.innerHTML = `
        nav ul li a.active {
            color: var(--primary-color);
            font-weight: 700;
        }
    `;
    document.head.appendChild(style);
}); 