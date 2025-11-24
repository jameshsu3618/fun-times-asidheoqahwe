// Countdown Timer
function updateCountdown() {
    const tripDate = new Date('2025-12-11T10:15:00-08:00');
    const now = new Date();
    const diff = tripDate - now;

    if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

        document.getElementById('countdown').innerHTML = `${days} days, ${hours} hours, ${minutes} minutes`;
    } else {
        document.getElementById('countdown').innerHTML = 'Your journey has begun! 🎉';
    }
}

// Update countdown every minute
updateCountdown();
setInterval(updateCountdown, 60000);

// Navigation functions
function showSection(sectionName) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionName).classList.add('active');

    // Update nav tabs
    const tabs = document.querySelectorAll('.nav-tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Scroll to top
    window.scrollTo(0, 0);
}

// Day selector functions
function showDay(dayNumber) {
    // Hide all day contents
    const days = document.querySelectorAll('.day-content');
    days.forEach(day => {
        day.classList.remove('active');
    });

    // Show selected day
    document.getElementById('day' + dayNumber).classList.add('active');

    // Update day buttons
    const buttons = document.querySelectorAll('.day-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Quick actions with mobile optimization
function quickActions() {
    const actions = [
        '📞 Emergency Contacts',
        '🗺️ Open Google Maps',
        '💱 Currency Converter',
        '🌡️ Weather Update'
    ];

    const choice = prompt('Quick Actions:\n\n' + actions.join('\n') + '\n\nEnter 1-4:');

    switch(choice) {
        case '1':
            alert('Emergency Contacts:\n\nPolice: 110\nFire/Ambulance: 119\nUS Embassy: +81-3-3224-5000');
            break;
        case '2':
            window.open('https://maps.google.com/', '_blank');
            break;
        case '3':
            const usd = prompt('Enter USD amount:');
            if (usd) {
                alert(`$${usd} USD = ¥${(usd * 150).toFixed(0)} JPY (approx.)`);
            }
            break;
        case '4':
            alert('Weather Forecast:\n\nTokyo: 8-15°C\nHakone: 5-12°C\nMt. Fuji: 0-8°C\n\nPack warm layers!');
            break;
    }
}

// Touch and mobile optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Prevent zoom on input focus (iOS)
    const metaViewport = document.querySelector('meta[name=viewport]');
    if (metaViewport) {
        metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=5.0');
    }

    // Add touch feedback for buttons
    const buttons = document.querySelectorAll('.nav-tab, .day-btn, .floating-action');
    buttons.forEach(button => {
        button.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.95)';
        });
        button.addEventListener('touchend', function() {
            this.style.transform = '';
        });
    });
});

// Add offline support
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        // Cache for offline access
        const urlsToCache = [
            '/',
            'https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@300;400;600;700&family=Cormorant+Garamond:wght@300;400;600&display=swap'
        ];
    });
}

// Save to localStorage for offline access
localStorage.setItem('japanTrip2025', JSON.stringify({
    lastUpdated: new Date().toISOString(),
    dataVersion: '2.0'
}));
