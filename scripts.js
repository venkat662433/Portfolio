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