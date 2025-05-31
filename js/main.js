// Можно добавить дополнительную функциональность
document.addEventListener('DOMContentLoaded', function() {
    // Анимация при загрузке страницы
    const cards = document.querySelectorAll('.product-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ${index * 0.1}s, transform 0.5s ${index * 0.1}s`;
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
    
    // Обработка формы
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contact