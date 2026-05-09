document.addEventListener('DOMContentLoaded', function () {
    const testimonialCarousel = document.querySelector('#testimonial-carousel');
    if (testimonialCarousel) {
        const carousel = new bootstrap.Carousel(testimonialCarousel, {
            interval: 3000
        });
    }
});
