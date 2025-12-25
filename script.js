document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('start-btn');
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainScreen = document.getElementById('main-screen');

    startBtn.addEventListener('click', () => {
        // Hide welcome screen
        welcomeScreen.style.opacity = '0';
        welcomeScreen.style.pointerEvents = 'none';

        // Show main screen
        setTimeout(() => {
            welcomeScreen.style.display = 'none'; // Remove from flow

            mainScreen.classList.remove('hidden');
            mainScreen.style.display = 'flex'; // Make it visible

            setTimeout(() => {
                mainScreen.style.opacity = '1';
                mainScreen.style.pointerEvents = 'auto';
            }, 50);

            // Start the heart shower
            startHeartShower();

            // Initialize Scroll Observer
            initScrollObserver();
        }, 800);
    });

    function initScrollObserver() {
        const sections = document.querySelectorAll('.msg-section');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1
        });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

    function startHeartShower() {
        for (let i = 0; i < 50; i++) {
            setTimeout(createHeart, i * 20);
        }
        setInterval(createHeart, 100);
    }

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        const heartTypes = ['❤️', '💖', '💗', '💓', '💝', '💕', '💞', '♡', '♥', '😍', '🥰'];
        heart.innerText = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.left = Math.random() * 100 + 'vw';

        const size = Math.random() * 25 + 15 + 'px';
        heart.style.fontSize = size;

        const floatDuration = Math.random() * 3 + 3 + 's';
        heart.style.animationDuration = `${floatDuration}, ${Math.random() * 2 + 1}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, parseFloat(floatDuration) * 1000);
    }
});
