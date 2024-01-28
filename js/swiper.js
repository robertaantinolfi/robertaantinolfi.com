// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  mousewheel: true,
  mousewheel: {
    forceToAxis: true,
    sensitivity: 1,
    // releaseOnEdges: true,
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Breakpoints
  breakpoints: {
    450: {
      autoplay: false,
    },
  },
});

// swiper
const swipermobile = new Swiper('.swiper-mobile', {
    // Optional parameters
    loop: true,
    slidesPerView: 2,
    spaceBetween: 10,
    mousewheel: true,
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      // releaseOnEdges: true,
    },
  
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // Breakpoints
    breakpoints: {
      450: {
        autoplay: false,
      },
    },
  });