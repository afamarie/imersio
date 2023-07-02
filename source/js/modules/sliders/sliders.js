import "../../vendor/swiper-bundle.min";
import Swiper from "../../vendor/swiper-bundle.min";
import { INTRO_DATA } from "../../mocks/homepage";

/* Hero banner main-page */

const initSlider = () => {
  if (document.querySelector(".swiper--intro") !== null) {
    const swiper = document.querySelector(".swiper--intro");
    const info = swiper.querySelector(".intro__text-pagination");
    const link = info.querySelector("a");

    swiper.classList.remove("swiper--no-js");

    const swiperIntro = new Swiper(".swiper--intro", {
      loop: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 150,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },

      autoHeight: true,

      autoplay: {
        delay: 3000,
      },
    });

    swiperIntro.on("slideChange", function () {
      info.classList.add("intro__text-pagination--fade");
      setTimeout(() => {
        const activeSlide = swiper.querySelector(".swiper-slide-active");
        link.href = INTRO_DATA[activeSlide.id].link;
        info.querySelector("h2").textContent = INTRO_DATA[activeSlide.id].title;
        info.classList.remove("intro__text-pagination--fade");
      }, 300);
    });
  }
};

/* Gallery page slider */

const initGallerySlider = () => {
  if (document.querySelector(".swiper--categories") !== null) {
    const swiper = document.querySelector(".swiper--categories");

    swiper.classList.remove("swiper--no-js");

    const swiperCategories = new Swiper(".swiper--categories", {
      direction: "vertical",
      effect: "coverflow",
      slidesPerView: 5,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      allowTouchMove: false,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
      },

      breakpoints: {
        768: {
          noSwiping: false,
          direction: "horizontal",
          slidesPerView: 4.4,
          spaceBetween: 30,
          coverflowEffect: {
            depth: 50,
            modifier: 1.1,
          },
        },
      },
    });
  }
};

/* Modal gallery main-page */

const initModalSlider = () => {
  if (
    document.querySelector(".swiper--modal") !== null &&
    document.querySelector(".swiper--modal-thumbs") !== null
  ) {
    const modalSliderThumbs = new Swiper(".swiper--modal-thumbs", {
      grid: {
        rows: 4,
      },

      setWrapperSize: true,

      breakpoints: {
        768: {
          slidesPerView: 4,
          grid: {
            rows: 1,
          },
        },
      },
    });

    const swiperModal = new Swiper(".swiper--modal", {
      loop: true,
      slidesPerView: 1,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      thumbs: {
        swiper: modalSliderThumbs,
      },

      autoHeight: true,
    });
  }
};

export { initSlider, initModalSlider, initGallerySlider };
