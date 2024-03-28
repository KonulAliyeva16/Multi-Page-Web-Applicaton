
var swiper = new Swiper(".swiper1", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".product-swiper-row-2", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    loop: true,
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 20,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      spaceBetween: 20,
      grid: {
        fill: 'row',
        rows: 2,
      },
    },
  }
});

var swiper = new Swiper(".swiper3", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 4
    },
    768: {
      slidesPerView: 3
    },
    425: {
      slidesPerView: 2
    },
    280: {
      slidesPerView: 1
    }
  },
});

var swiper = new Swiper(".swiper4", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 1
    },
    280: {
      slidesPerView: 1
    }
  },
});
var swiper = new Swiper(".swiper5", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 2
    },
    425: {
      slidesPerView: 1
    },
    280: {
      slidesPerView: 1
    }
  },
});