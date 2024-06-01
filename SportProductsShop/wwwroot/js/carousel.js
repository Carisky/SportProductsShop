document.addEventListener("DOMContentLoaded", function () {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    carouselItems[currentIndex].classList.add('active');

    function updateActiveItem() {
        carouselItems.forEach(item => item.classList.remove('active'));
        carouselItems[currentIndex].classList.add('active');
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
        updateActiveItem();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
        updateActiveItem();
    });
});
