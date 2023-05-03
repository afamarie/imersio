import '../../vendor/swiper-bundle.min';
import Swiper from '../../vendor/swiper-bundle.min';
import {INTRO_DATA} from '../../mocks/homepage';

const findSwiper = () => {
  if (document.querySelector('.swiper') !== null) {
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach((swiper) => {
      swiper.classList.remove('swiper--no-js');
    });
  } else {
    return;
  }
};

/* Hero banner main-page */

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

const swiper = document.querySelector('.swiper--intro');
const info = swiper.querySelector('.intro__text-pagination');
const link = info.querySelector('a');
const title = info.querySelector('h2');

swiperIntro.on('slideChange', function () {
  title.classList.add('fade');
  setTimeout(() => {
    const activeSlide = swiper.querySelector('.swiper-slide-active');
    link.href = INTRO_DATA[activeSlide.id].link;
    title.textContent = INTRO_DATA[activeSlide.id].title;
    title.classList.remove('fade');
  }, 300);
});

findSwiper();

export {swiperIntro};
