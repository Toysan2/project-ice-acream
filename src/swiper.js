const swiper = new Swiper('.opinion-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-pagination',
    prevEl: '.swiper-pagination',
  },

  // And if we need scrollbar
  //scrollbar: {
  // el: '.swiper-scrollbar',
  //},

  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination',
  },
});
