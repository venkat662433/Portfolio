// Select the label and contact form
const contactLabel = document.querySelector('contact, .contact-us-btn',);
const contactForm = document.getElementById('contact-form');

// Add click event listener to the label
contactLabel.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior (if any)
    
    // Scroll to the contact form
    contactForm.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

function scrollToSection(homepage) {
    document.getElementById(homepage).scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(edu1) {
    document.getElementById(edu1).scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(aboutme) {
    document.getElementById(aboutme).scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(proj) {
    document.getElementById(proj).scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(exp) {
    document.getElementById(exp).scrollIntoView({ behavior: 'smooth' });
}

function scrollToSection(edu1) {
    document.getElementById(edu1).scrollIntoView({ behavior: 'smooth' });
}

//-------------------- hobbies Animation-------------------------------


document.addEventListener('DOMContentLoaded', () => {
    const hobbies = document.querySelectorAll('.hobby-item');

    hobbies.forEach(hobby => {
        hobby.addEventListener('click', () => {
            hobby.classList.toggle('flipped');
        });
    });
});