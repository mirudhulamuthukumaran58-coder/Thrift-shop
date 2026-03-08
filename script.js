// Mobile navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Buy button interaction
document.querySelectorAll('.buy-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const originalText = this.innerText;
        this.innerText = 'Added to Cart!';
        this.style.backgroundColor = 'var(--text-color)';
        this.style.color = 'var(--bg-color)';
        
        setTimeout(() => {
            this.innerText = originalText;
            this.style.backgroundColor = '';
            this.style.color = '';
        }, 2000);
    });
});
