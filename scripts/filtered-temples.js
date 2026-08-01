
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake City",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 253015,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    },
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg"
    },
    {
        templeName: "Bahia Blanca Argentina",
        location: "Bahia Blanca, Argentina",
        dedicated: "2025, November, 23",
        area: 23400,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/bahia-blanca-argentina-temple/bahia-blanca-argentina-temple-65191-main.jpg"
    }
];

// ============================================
// FUNCTION TO DISPLAY TEMPLES
// ============================================
function displayTemples(templesArray) {
    const container = document.getElementById('temple-cards');
    container.innerHTML = '';

    if (templesArray.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <span style="font-size:3rem;display:block;margin-bottom:1rem;">🔍</span>
                <p>No temples found with this filter.</p>
            </div>
        `;
        return;
    }

    templesArray.forEach(temple => {
        const section = document.createElement('section');
        section.innerHTML = `
            <h3>${temple.templeName}</h3>
            <div class="info">
                <p><strong>LOCATION:</strong> <span class="location">${temple.location}</span></p>
                <p><strong>DEDICATED:</strong> ${temple.dedicated}</p>
                <p><strong>SIZE:</strong> ${temple.area.toLocaleString()} sq ft</p>
            </div>
            <img src="${temple.imageUrl}" 
                 alt="${temple.templeName}" 
                 loading="lazy"
                 decoding="async">
        `;
        container.appendChild(section);
    });
}

// ============================================
// FILTER SETUP FUNCTION
// ============================================
function setupFilters() {
    const links = document.querySelectorAll('nav ul li a');
    const title = document.getElementById('filter-title');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            let filteredTemples = [];
            let filterName = '';

            links.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            switch (filter) {
                case 'home':
                    filteredTemples = temples;
                    filterName = 'Home';
                    break;
                case 'old':
                    filteredTemples = temples.filter(t => parseInt(t.dedicated.split(', ')[0]) < 1900);
                    filterName = 'Old Temples';
                    break;
                case 'new':
                    filteredTemples = temples.filter(t => parseInt(t.dedicated.split(', ')[0]) > 2000);
                    filterName = 'New Temples';
                    break;
                case 'large':
                    filteredTemples = temples.filter(t => t.area > 90000);
                    filterName = 'Large Temples';
                    break;
                case 'small':
                    filteredTemples = temples.filter(t => t.area < 10000);
                    filterName = 'Small Temples';
                    break;
                default:
                    filteredTemples = temples;
                    filterName = 'Home';
            }

            title.textContent = filterName;
            displayTemples(filteredTemples);
        });
    });
}

// ============================================
// HAMBURGER MENU
// ============================================
function setupMobileMenu() {
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('mainNav');

    toggle.addEventListener('click', () => {
        nav.classList.toggle('open');
        toggle.textContent = nav.classList.contains('open') ? '✕' : '☰';
    });

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                nav.classList.remove('open');
                toggle.textContent = '☰';
            }
        });
    });
}

// ============================================
// INITIALIZATION - COMPLETE IMPROVED VERSION
// ============================================
function init() {
    // Display temples
    displayTemples(temples);

    // Setup filters
    setupFilters();

    // Setup mobile menu
    setupMobileMenu();

    // ===== CURRENT YEAR =====
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // ===== LAST MODIFICATION DATE =====
    const lastModifiedElement = document.getElementById('lastModified');

    if (lastModifiedElement) {
        // Try to get the document's last modification date
        let dateToUse = new Date();
        let useCurrentDate = false;

        try {
            // Check if document.lastModified exists and is valid
            if (document.lastModified && document.lastModified !== '') {
                const lastMod = new Date(document.lastModified);
                if (!isNaN(lastMod.getTime())) {
                    dateToUse = lastMod;
                } else {
                    useCurrentDate = true;
                }
            } else {
                useCurrentDate = true;
            }
        } catch (e) {
            useCurrentDate = true;
        }

        // If the date is not valid or doesn't exist, use current date
        if (useCurrentDate) {
            console.warn('⚠️ Using current date as fallback for Last Modification');
        }

        // Format the date
        const formattedDate = dateToUse.toLocaleString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });

        lastModifiedElement.textContent = formattedDate;
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', init);

// Confirmation messages
console.log('✅ Temple Album loaded successfully');
console.log(`📊 Total: ${temples.length} temples`);
console.log('🔍 Use the filters to explore the temples');