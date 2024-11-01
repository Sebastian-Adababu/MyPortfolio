// Add this at the bottom of your HTML file

    // Change navbar style on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('.navbar').classList.add('scrolled');
        } else {
            document.querySelector('.navbar').classList.remove('scrolled');
        }
    });

    // Optional: Add scroll to top functionality
    const scrollBtn = document.createElement('div');
    scrollBtn.classList.add('scroll-to-top');
    scrollBtn.innerHTML = '↑';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // Add this to your script.js file
document.querySelectorAll('.pie-segment').forEach(segment => {
    segment.addEventListener('mouseover', function() {
        const skill = this.querySelector('.segment-label').textContent;
        const value = this.style.getPropertyValue('--value');
        // You can add tooltip or other interactive features here
    });
});

// Scroll to Top Button Functionality
document.addEventListener('DOMContentLoaded', function() {
    const scrollBtn = document.querySelector('.scroll-btn');

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn .addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);

        fetch('your-server-endpoint', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            alert('Message sent successfully!');
            form.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Thanks for your message,we will get back to you.');
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    emailjs.init("YOUR_USER_ID");

    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Change the button text and disable it
        const submitButton = form.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        // Prepare the template parameters
        const templateParams = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };

        // Send the email using EmailJS
        emailjs.send('YOUR_EMAIL_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your message has been sent successfully!');
                form.reset();
            }, function(error) {
                console.log('FAILED...', error);
                alert('we will get back to you.');
            })
            .finally(function() {
                // Reset the button text and enable it
                submitButton.textContent = originalButtonText;
                submitButton.disabled = false;
            });
    });
});


document.querySelector('.contact-btn').addEventListener('click', function(e) {
    e.preventDefault();
    const contactSection = document.querySelector('.contact-section');
    contactSection.scrollIntoView({ behavior: 'smooth' });
});