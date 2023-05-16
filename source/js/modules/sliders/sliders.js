import '../../vendor/swiper-bundle.min';
import Swiper from '../../vendor/swiper-bundle.min';
import {INTRO_DATA} from '../../mocks/homepage';

/* Hero banner main-page */

const initSlider = () => {
  if (document.querySelector('.swiper--intro') !== null) {
    const swiper = document.querySelector('.swiper--intro');
    const info = swiper.querySelector('.intro__text-pagination');
    const link = info.querySelector('a');
    const title = info.querySelector('h2');

    swiper.classList.remove('swiper--no-js');

    const swiperIntro = new Swiper('.swiper--intro', {

      loop: true,
      watchSlidesProgress: true,
      slidesPerView: 1,
      spaceBetween: 150,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },

      autoHeight: true,

      autoplay: {
        delay: 3000,
      },
    });

    swiperIntro.on('slideChange', function () {
      title.classList.add('fade');
      setTimeout(() => {
        const activeSlide = swiper.querySelector('.swiper-slide-active');
        link.href = INTRO_DATA[activeSlide.id].link;
        title.textContent = INTRO_DATA[activeSlide.id].title;
        title.classList.remove('fade');
      }, 300);
    });
  }
};

/* Modal gallery main-page */

const initModalSlider = () => {
  if (document.querySelector('.swiper--modal') !== null && document.querySelector('.swiper--modal-thumbs') !== null) {

    const modalSliderThumbs = new Swiper('.swiper--modal-thumbs', {
      grid: {
        rows: 4,
      },

      breakpoints: {
        768: {
          slidesPerView: 4,
          grid: {
            rows: 1,
          },
        },
      },
    });

    const swiperModal = new Swiper('.swiper--modal', {
      loop: true,
      slidesPerView: 1,

      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      thumbs: {
        swiper: modalSliderThumbs,
      },

      autoHeight: true,
    });
  }
};

export {initSlider, initModalSlider};
