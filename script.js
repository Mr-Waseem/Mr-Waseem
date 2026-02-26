// script.js
// Dark Mode Toggle with LocalStorage Persistence
const toggleDarkMode = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', body.classList.contains('dark-mode'));
};

const loadDarkMode = () => {
    const isDarkMode = JSON.parse(localStorage.getItem('dark-mode'));
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
};

window.onload = loadDarkMode;

// Smooth Scrolling
const smoothScroll = (target) => {
    const element = document.querySelector(target);
    element.scrollIntoView({ behavior: 'smooth' });
};

// Navbar Animation
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shrink');
    } else {
        navbar.classList.remove('shrink');
    }
});

// Form Validation and Submission
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const inputs = form.querySelectorAll('input');
    let isValid = true;

    inputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        // Submit form or perform desired action
        console.log('Form submitted!');
    }
});

// Intersection Observer for Animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
});

// Mobile Hamburger Menu
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Parallax Effects
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelector('.parallax').style.transform = `translateY(${scrolled * 0.5}px)`;
});

// Typing Animation
const typingText = 'Welcome to my website!';
const typingElement = document.querySelector('.typing');
let index = 0;

const type = () => {
    if (index < typingText.length) {
        typingElement.innerHTML += typingText.charAt(index);
        index++;
        setTimeout(type, 100);
    }
};

type();

// Counter Animation
const counters = document.querySelectorAll('.counter');
const updateCounter = (counter) => {
    let target = +counter.getAttribute('data-target');
    let count = 0;

    const interval = setInterval(() => {
        if (count < target) {
            count++;
            counter.innerText = count;
        } else {
            clearInterval(interval);
        }
    }, 100);
};

counters.forEach(counter => {
    updateCounter(counter);
});

// Lazy Loading for Images
const lazyImages = document.querySelectorAll('img[data-src]');
const lazyLoad = (image) => {
    image.src = image.dataset.src;
    image.classList.add('fade-in');
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            lazyLoad(entry.target);
            observer.unobserve(entry.target);
        }
    });
});

lazyImages.forEach(image => {
    imageObserver.observe(image);
});
