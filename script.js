        // Security Password Check
        (function() {
            const CORRECT_PASSWORD = '092994';
            const overlay = document.getElementById('securityOverlay');
            const passwordInput = document.getElementById('passwordInput');
            const unlockBtn = document.getElementById('unlockBtn');
            const errorMessage = document.getElementById('errorMessage');

            // Check if already authenticated in this session
            const isAuthenticated = sessionStorage.getItem('authenticated');
            if (isAuthenticated === 'true') {
                overlay.classList.add('hidden');
                return;
            }

            // Focus on password input when page loads
            passwordInput.focus();

            // Handle password verification
            function verifyPassword() {
                const enteredPassword = passwordInput.value.trim();

                if (enteredPassword.length !== 6) {
                    showError('Password must be 6 digits');
                    return;
                }

                if (enteredPassword === CORRECT_PASSWORD) {
                    // Correct password
                    sessionStorage.setItem('authenticated', 'true');
                    overlay.classList.add('hidden');
                    errorMessage.textContent = '';
                    passwordInput.classList.remove('error');
                } else {
                    // Wrong password
                    showError('Incorrect password');
                    passwordInput.classList.add('error');
                    passwordInput.value = '';
                    passwordInput.focus();

                    // Remove error animation class after animation completes
                    setTimeout(() => {
                        passwordInput.classList.remove('error');
                    }, 500);
                }
            }

            function showError(message) {
                errorMessage.textContent = message;
                setTimeout(() => {
                    errorMessage.textContent = '';
                }, 3000);
            }

            // Event listeners
            unlockBtn.addEventListener('click', verifyPassword);

            passwordInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    verifyPassword();
                }
            });

            // Only allow numeric input for password
            passwordInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/[^0-9]/g, '');
            });
        })();

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

        // Cache for loaded sections
        const sectionCache = {};

        // Map section names to their partial files
        const sectionFiles = {
            'overview': 'partials/overview.html',
            'itinerary': 'partials/itinerary.html',
            'flights': 'partials/flights.html',
            'hotels': 'partials/hotels.html',
            'dining': 'partials/dining.html',
            'expenses': 'partials/expenses.html',
            'contacts': 'partials/contacts.html'
        };

        // Navigation functions
        async function showSection(sectionName) {
            // Hide all sections
            const sections = document.querySelectorAll('.content-section');
            sections.forEach(section => {
                section.classList.remove('active');
            });

            // Get the section element
            const sectionElement = document.getElementById(sectionName);

            // Load section content if not cached
            if (!sectionCache[sectionName]) {
                try {
                    const response = await fetch(sectionFiles[sectionName]);
                    if (!response.ok) {
                        throw new Error(`Failed to load ${sectionName}`);
                    }
                    const html = await response.text();
                    sectionElement.innerHTML = html;
                    sectionCache[sectionName] = true;
                } catch (error) {
                    console.error('Error loading section:', error);
                    sectionElement.innerHTML = '<div class="timeline-card"><p style="color: red;">Error loading content. Please refresh the page.</p></div>';
                }
            }

            // Show selected section
            sectionElement.classList.add('active');

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

        // Quick actions
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
            dataVersion: '1.0'
        }));

        // Initialize: Load the overview section on page load
        document.addEventListener('DOMContentLoaded', function() {
            // Load the default section (overview) after authentication
            const checkAuth = setInterval(function() {
                const isAuthenticated = sessionStorage.getItem('authenticated');
                if (isAuthenticated === 'true') {
                    clearInterval(checkAuth);
                    loadSection('overview');
                }
            }, 100);
        });

        // Helper function to load a section without event handling
        async function loadSection(sectionName) {
            const sectionElement = document.getElementById(sectionName);
            if (!sectionCache[sectionName] && sectionElement) {
                try {
                    const response = await fetch(sectionFiles[sectionName]);
                    if (!response.ok) {
                        throw new Error(`Failed to load ${sectionName}`);
                    }
                    const html = await response.text();
                    sectionElement.innerHTML = html;
                    sectionCache[sectionName] = true;
                } catch (error) {
                    console.error('Error loading section:', error);
                    sectionElement.innerHTML = '<div class="timeline-card"><p style="color: red;">Error loading content. Please refresh the page.</p></div>';
                }
            }
        }
