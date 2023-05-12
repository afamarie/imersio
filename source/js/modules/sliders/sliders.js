import '../../vendor/swiper-bundle.min';
import Swiper from '../../vendor/swiper-bundle.min';
import {INTRO_DATA} from '../../mocks/homepage';

const findSwiper = () => document.querySelector('.swiper') !== null;

/* Hero banner main-page */

const initSlider = () => {
  if (findSwiper()) {
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

export {initSlider};
