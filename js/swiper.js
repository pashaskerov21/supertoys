const swiper1 = new Swiper(".main-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    
  });

const swiper2 = new Swiper(".child-age-swiper", {
    autoplay: {
    delay: 4000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      360: {slidesPerView: 2,spaceBetween: 10},
      540: {slidesPerView: 3,spaceBetween: 10},
      768: {slidesPerView: 4,spaceBetween: 10},
      992: {slidesPerView: 5,spaceBetween: 10},
      1200: {slidesPerView: 6,spaceBetween: 10},
      1300: {slidesPerView: 7,spaceBetween: 10},
      },
  });
  
  const swiper3 = new Swiper(".new-products-swiper", {
    autoplay: {
    delay: 9000,
    },
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
  });

  const swiper4 = new Swiper(".kampaniya-products-swiper", {
    autoplay: {
    delay: 5000,
    },
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
      768: {slidesPerView: 2,spaceBetween: 10},
      992: {slidesPerView: 3,spaceBetween: 10},
      },
  });