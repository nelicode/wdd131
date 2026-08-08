// ===== INCREMENTAR CONTADOR =====
let reviewCount = localStorage.getItem('reviewCount');
if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = Number(reviewCount);
}
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

// ===== MOSTRAR CONTADOR =====
document.getElementById('reviewCount').textContent = reviewCount;

// ===== FECHA EN EL PIE DE PÁGINA =====
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