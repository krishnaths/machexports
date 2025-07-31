// Simple language switching by redirecting to different HTML files
function changeLanguage(language) {
    if (language === 'de') {
        window.location.href = 'index-de.html';
    } else if (language === 'hi') {
        window.location.href = 'index-hi.html';
    } else {
        window.location.href = 'index.html';
    }
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 