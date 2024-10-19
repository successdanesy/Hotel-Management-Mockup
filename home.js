document.addEventListener('DOMContentLoaded', function() {
    // You can fetch data here dynamically if needed
    console.log("Home page loaded!");
});
function moveSlider(direction) {
    const slider = document.querySelector('.slider');
    const cardWidth = document.querySelector('.property-card').offsetWidth;
    slider.scrollBy({ left: cardWidth * direction, behavior: 'smooth' });
}