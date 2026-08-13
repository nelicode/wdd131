// ====== POPULATE SERVICE/EVENT SELECT ======
const productSelect = document.getElementById('product');
if (productSelect) {
    // Ahora son servicios y eventos de la Cámara de Comercio
    const services = [
        { id: 's1', name: 'Business Networking Night' },
        { id: 's2', name: 'Digital Marketing Workshop' },
        { id: 's3', name: 'Entrepreneur Fair 2026' },
        { id: 's4', name: 'International Trade Conference' },
        { id: 's5', name: 'Member Support Hotline' },
        { id: 's6', name: 'Business Development Mentorship' }
    ];
    services.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.id;
        opt.textContent = s.name;
        productSelect.appendChild(opt);
    });
}

// ====== REVIEW COUNTER (localStorage) ======
if (window.location.pathname.includes('review.html')) {
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;
    count += 1;
    localStorage.setItem('reviewCount', count);
    document.getElementById('review-count').textContent = count;
}

// ====== LAST MODIFIED (shared) ======
const lastMod = document.getElementById('last-modified');
if (lastMod) {
    lastMod.textContent = `Last modification: ${document.lastModified}`;
}