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

function initSwiper() {
  var screenWidth = window.innerWidth;

  var slidesPerView = 4; // Numărul inițial de carduri pe slide

  if (screenWidth <= 900) {
    slidesPerView = 2; // Pentru tablete, afișează 2 carduri pe slide
  }

  if (screenWidth <= 600) {
    slidesPerView = 1; // Pentru telefoane, afișează 1 card pe slide
  }

  // Inițializează sau actualizează Swiper cu noile opțiuni
  if (swiper) {
    swiper.destroy();
  }

  swiper = new Swiper(".mySwiper-products", {
    slidesPerView: slidesPerView,
    spaceBetween: 52, // Ajustează spațiul între carduri așa cum dorești
    slidesPerGroup: slidesPerView,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}

// Inițializează Swiper la încărcarea paginii
window.addEventListener("load", function () {
  initSwiper();
});

// Actualizează Swiper când se redimensionează fereastra
window.addEventListener("resize", function () {
  initSwiper();
});
