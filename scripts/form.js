// ===== PRODUCT ARRAY =====
const products = [
    { id: "fc-1888", name: "Flux Capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "Power Laces", averagerating: 4.7 },
    { id: "fs-1987", name: "Time Circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "Low Voltage Reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "Warp Equalizer", averagerating: 5.0 },
    { id: "tech-001", name: "Laptop Pro X", averagerating: 4.8 },
    { id: "tech-002", name: "Smartphone Z", averagerating: 4.6 },
    { id: "tech-003", name: "Tablet Air", averagerating: 4.3 },
    { id: "tech-004", name: "Wireless Headphones", averagerating: 4.2 },
    { id: "tech-005", name: "Smartwatch Series 5", averagerating: 4.4 },
    { id: "tech-006", name: "Bluetooth Speaker", averagerating: 4.1 },
    { id: "tech-007", name: "Gaming Monitor 4K", averagerating: 4.9 },
    { id: "tech-008", name: "Mechanical Keyboard", averagerating: 4.0 },
    { id: "tech-009", name: "Wireless Mouse", averagerating: 3.8 },
    { id: "tech-010", name: "External SSD 1TB", averagerating: 4.7 }
];

// ===== FILL THE SELECT =====
const select = document.getElementById('productName');
if (!select) {
    console.error('Element with id "productName" not found.');
} else {
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });
    console.log('✅ Products loaded. Total: ' + products.length);
}

// ===== UPDATE FOOTER DATE =====
const now = new Date();
const formatted = now.getFullYear() + '-' +
    String(now.getMonth() + 1).padStart(2, '0') + '-' +
    String(now.getDate()).padStart(2, '0') + ' ' +
    String(now.getHours()).padStart(2, '0') + ':' +
    String(now.getMinutes()).padStart(2, '0') + ':' +
    String(now.getSeconds()).padStart(2, '0');
const footerSpan = document.getElementById('footerDate');
if (footerSpan) {
    footerSpan.textContent = formatted;
}