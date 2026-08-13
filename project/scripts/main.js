// ====== NAV TOGGLE ======
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('primary-nav');
if (hamburger) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('open');
    });
}

// ====== LAST MODIFIED ======
const lastMod = document.getElementById('last-modified');
if (lastMod) {
    lastMod.textContent = `Last modification: ${document.lastModified}`;
}

// ====== WEATHER (simulated) ======
const weatherWidget = document.getElementById('weather-widget');
if (weatherWidget) {
    const weather = {
        temp: 11,
        desc: 'Parc. nublado',
        icon: '⛅'
    };
    weatherWidget.innerHTML = `
        <span class="weather-icon">${weather.icon}</span>
        <span class="weather-temp">${weather.temp}°C</span>
        <span class="weather-desc">${weather.desc}</span>
    `;
}

// ====== EVENTS with Registration (Answer to Scenario 2) ======
const eventList = document.getElementById('event-preview-list');
if (eventList) {
    const events = [
        {
            name: 'Business Networking Night',
            date: 'August 15, 2026',
            time: '7:00 PM',
            location: 'Chamber Hall'
        },
        {
            name: 'Digital Marketing Workshop',
            date: 'August 22, 2026',
            time: '10:00 AM',
            location: 'Online'
        },
        {
            name: 'Entrepreneur Fair',
            date: 'September 5, 2026',
            time: '9:00 AM',
            location: 'Plaza de Armas'
        }
    ];

    eventList.innerHTML = events.map(e => `
        <li class="event-item">
            <span class="event-name">${e.name}</span>
            <span class="event-date">📅 ${e.date}</span>
            <span class="event-time">🕐 ${e.time}</span>
            <span class="event-location">📍 ${e.location}</span>
            <a href="tel:+054456789" class="btn-register">📞 Register Now</a>
        </li>
    `).join('');
}

// ====== FETCH MEMBERS FROM JSON ======
async function loadMembers() {
    try {
        const response = await fetch('data/members.json');
        if (!response.ok) throw new Error('Failed to load members');
        const members = await response.json();

        // --- Homepage: featured members (2 gold, 2 silver) ---
        const featuredContainer = document.getElementById('featured-members');
        if (featuredContainer) {
            const gold = members.filter(m => m.level === 'gold').slice(0, 2);
            const silver = members.filter(m => m.level === 'silver').slice(0, 2);
            const featured = [...gold, ...silver];
            featuredContainer.innerHTML = featured.map((m, index) => `
                <div class="member-card ${m.level}">
                    <span class="member-number">${index + 1}</span>
                    <img src="${m.image || 'images/default.jpg'}" alt="${m.name}" loading="lazy" class="member-img" />
                    <h3>${m.level.toUpperCase()}</h3>
                    <p><strong>${m.name}</strong></p>
                    <p>${m.description}</p>
                </div>
            `).join('');
        }

        // --- Members page: directory with filters ---
        const allContainer = document.getElementById('all-members');
        if (allContainer) {
            const renderMembers = (filter = 'all') => {
                const filtered = filter === 'all' ? members : members.filter(m => m.level === filter);
                allContainer.innerHTML = filtered.map((m, index) => `
                    <div class="member-card ${m.level}">
                        <span class="member-number">${index + 1}</span>
                        <img src="${m.image || 'images/default.jpg'}" alt="${m.name}" loading="lazy" class="member-img" />
                        <h3>${m.name}</h3>
                        <p>${m.description}</p>
                        <span class="badge">${m.level.toUpperCase()}</span>
                    </div>
                `).join('');
            };

            renderMembers();

            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', function () {
                    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    renderMembers(this.dataset.filter);
                });
            });
        }
    } catch (error) {
        console.error('Error loading members:', error);
        const containers = document.querySelectorAll('#featured-members, #all-members');
        containers.forEach(c => {
            if (c) c.innerHTML = `<p style="color:red;">Could not load members. Please try again later.</p>`;
        });
    }
}

document.addEventListener('DOMContentLoaded', loadMembers);