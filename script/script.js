var swiper = new Swiper(".mySwiper--posters", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".mySwiper-products", {
  watchSlidesProgress: true,
  slidesPerView: 4,
});