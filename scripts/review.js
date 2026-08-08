document.addEventListener('DOMContentLoaded', () => {
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount === null ? 1 : Number(reviewCount) + 1;
    localStorage.setItem('reviewCount', reviewCount);

    const countSpan = document.getElementById('reviewCount');
    if (countSpan) {
        countSpan.textContent = reviewCount;
    }
    console.log('✅ Reviews enviadas:', reviewCount);
});