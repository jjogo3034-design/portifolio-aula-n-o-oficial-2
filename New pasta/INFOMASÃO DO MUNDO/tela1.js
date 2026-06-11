let currentIndex = 0

function moveCarousel(direction){
    const carouselInterno = document.querySelector('.carousel-interno');
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex += direction;

    if (currentIndex < 0){
        currentIndex = totalItems - 1;

    }else if (currentIndex >= totalItems - 1 ){
        currentIndex = 0;
    }
    const offset = currentIndex * 100;
    carouselInterno.style.transform = `translateX(-${offset}%)`;
}  