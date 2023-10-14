const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");



var swiper = new Swiper(".mySwiper-products", {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        400:{
            slidesPerView: 2.5,
            spaceBetween: 3,
        },
     600: {
        slidesPerView:3.5,
        spaceBetween:3,
      },768: {
        slidesPerView:4.5,
        spaceBetween:3,
      },
      900: {
        slidesPerView: 4.5,
        spaceBetween: 3,
      },
      1200: {
        slidesPerView: 4.5,
        spaceBetween: 3,
      },
    },
});

var swiper = new Swiper(".mySwiper-posters", {
    slidesPerView:1,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    on: {
      autoplayTimeLeft(s, time, progress) {
        progressCircle.style.setProperty("--progress", 1 - progress);
        progressContent.textContent = `${Math.ceil(time / 1000)}s`;
      }
    }
});


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 3,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {

        400:{
            slidesPerView: 3.3,
            spaceBetween: 3,
        },
      640: {
        slidesPerView: 3.5,
        spaceBetween: 3,
      },
      768: {
        slidesPerView: 4.5,
        spaceBetween: 3,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween:3,
      },
    },
});