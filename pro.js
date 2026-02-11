// ===== PROMISE DAY INTERACTIVE FUNCTIONALITY =====

// Get DOM elements
const promiseBtn = document.getElementById('promiseBtn');
const hiddenPromise = document.getElementById('hiddenPromise');
const closeBtn = document.getElementById('closeBtn');

// Show promise card with animation
function showPromise() {
    hiddenPromise.classList.add('show');
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
}

// Hide promise card
function hidePromise() {
    hiddenPromise.classList.remove('show');
    // Restore body scroll
    document.body.style.overflow = 'auto';
}

// Event Listeners
promiseBtn.addEventListener('click', showPromise);
closeBtn.addEventListener('click', hidePromise);

// Close modal when clicking outside the card
hiddenPromise.addEventListener('click', function (e) {
    if (e.target === hiddenPromise) {
        hidePromise();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && hiddenPromise.classList.contains('show')) {
        hidePromise();
    }
});

// ===== ADDITIONAL INTERACTIVE EFFECTS =====

// Add sparkle effect on button click
promiseBtn.addEventListener('click', function (e) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.width = '10px';
    sparkle.style.height = '10px';
    sparkle.style.background = '#ff1744';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle-burst 0.6s ease-out forwards';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 600);
});

// Add sparkle animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-burst {
        0% {
            transform: scale(1);
            opacity: 1;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== DYNAMIC HEART GENERATION =====
// Add more hearts dynamically for richer animation
const heartsContainer = document.querySelector('.hearts-container');
const numberOfHearts = 5; // Add 5 more hearts

for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 3 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 6) + 's';
    heartsContainer.appendChild(heart);
}

// ===== SMOOTH SCROLL BEHAVIOR =====
document.documentElement.style.scrollBehavior = 'smooth';

// ===== CONSOLE MESSAGE =====
console.log('%c💖 Happy Promise Day! 💖', 'color: #ff1744; font-size: 24px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.2);');
console.log('%cMade with love ❤️', 'color: #f50057; font-size: 16px; font-style: italic;');
