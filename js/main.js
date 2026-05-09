document.addEventListener('DOMContentLoaded', function () {
    const testimonialCarousel = document.querySelector('#testimonial-carousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel);

        const carouselInner = testimonialCarousel.querySelector('.carousel-inner');
        carouselInner.addEventListener('click', function() {
            carousel.next();
        });
    }
});
