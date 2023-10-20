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

var swiper;

swiper = new Swiper(".mySwiper-products", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  centeredSlides: false,
  centeredSlidesBounds: false,
  initialSlide: 0, 
  loop: false, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  breakpoints: {
    600: {
      slidesPerView: 2.8, 
      spaceBetween: 10, 
      slidesPerGroup: 2, 
      initialSlide: 0, 
    },
    900: {
      slidesPerView: 3, 
      spaceBetween: 10, 
      slidesPerGroup: 1, 
      initialSlide: 0, 
    },
    1000: {
      slidesPerView: 4, 
      spaceBetween: 10, 
      slidesPerGroup: 3, 
      initialSlide: 0, 
    },
    1800: {
      slidesPerView: 6,
      spaceBetween: 15, 
      slidesPerGroup: 5, 
      initialSlide: 0, 
    }
  }
});

