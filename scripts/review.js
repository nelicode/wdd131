// ===== INCREMENT REVIEW COUNTER =====
let reviewCount = localStorage.getItem('reviewCount');
if (reviewCount === null) {
    reviewCount = 0;
} else {
    reviewCount = Number(reviewCount);
}
reviewCount++;
localStorage.setItem('reviewCount', reviewCount);

// ===== DISPLAY COUNTER =====
document.getElementById('reviewCount').textContent = reviewCount;
console.log('✅ Counter updated. Total reviews: ' + reviewCount);

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