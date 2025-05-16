// Menu responsive avec transition fluide
const navLinks = document.getElementById('nav-links');
const toggleMenu = () => {
    navLinks.classList.toggle('active');
    if (navLinks.classList.contains('active')) {
        navLinks.style.transition = 'transform 0.5s ease-out';
        navLinks.style.transform = 'translateX(0)';
    } else {
        navLinks.style.transition = 'transform 0.3s ease-in';
        navLinks.style.transform = 'translateX(-100%)';
    }
};

// Détecter l'état du menu et ajouter une classe active pour gérer l'affichage sur mobile
const menuButton = document.getElementById('menu-button');
menuButton.addEventListener('click', toggleMenu);

// Animation de la section Accueil au défilement
const accueilSection = document.getElementById('accueil');
const imageAccueil = accueilSection.querySelector('.image');

window.addEventListener('scroll', () => {
    if (window.scrollY < accueilSection.offsetHeight) {
        let brightness = 70 + window.scrollY / accueilSection.offsetHeight * 30; // Effet de fondu en fonction du défilement
        imageAccueil.style.filter = `brightness(${brightness}%)`;
    }
});

// Effet de survol pour les images de la galerie avec transition
const galerieImages = document.querySelectorAll('#galerie img');

galerieImages.forEach((img) => {
    img.addEventListener('mouseover', () => {
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'scale(1.1)';
    });

    img.addEventListener('mouseout', () => {
        img.style.transition = 'transform 0.3s ease';
        img.style.transform = 'scale(1)';
    });
});

// Gestion de l'ancrage smooth pour la navigation
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

smoothScrollLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Compense pour la hauteur du header
            behavior: 'smooth',
        });
    });
});

// Ajout de l'effet de fade-in pour les sections au défilement avec transition
const sections = document.querySelectorAll('section');

const fadeInSections = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionHeight = section.offsetHeight;
        if (sectionTop < window.innerHeight - sectionHeight / 4) {
            section.classList.add('fade-in');
            section.style.transition = 'opacity 0.6s ease-out';
            section.style.opacity = '1';
        }
    });
};

window.addEventListener('scroll', fadeInSections);
fadeInSections(); // Exécuter immédiatement pour les sections déjà visibles

// Ajouter une classe active au menu lorsqu'on défile vers une section
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach((link) => {
        const section = document.querySelector(link.getAttribute('href'));
        const sectionTop = section.offsetTop - 60;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            link.classList.add('active-link');
        } else {
            link.classList.remove('active-link');
        }
    });
});

// Animation de la galerie pour rendre les images dynamiques avec transition
const galleryImages = document.querySelectorAll('.galerie-images img');
galleryImages.forEach((img) => {
    img.addEventListener('click', () => {
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);

        const modalImage = document.createElement('img');
        modalImage.src = img.src;
        modalImage.classList.add('modal-img');
        overlay.appendChild(modalImage);

        overlay.addEventListener('click', () => {
            document.body.removeChild(overlay);
        });
    });
});
