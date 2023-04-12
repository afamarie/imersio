import '../../vendor/swiper-bundle.min';
import Swiper from '../../vendor/swiper-bundle.min';

const findSwipers = () => {
  if (document.querySelector('.swiper') !== null) {
    const swipers = document.querySelectorAll('.swiper');
    swipers.forEach((swiper) => {
      swiper.classList.remove('swiper--no-js');
    });
  } else {
    return;
  }
};

const swiperIntro = new Swiper('.swiper--intro', {

  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoHeight: true,
});

const swiperGallery = new Swiper('.swiper--gallery', {

  loop: true,
  watchSlidesProgress: true,
  slidesPerView: 1,

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  autoHeight: true,
});

findSwipers();

export {swiperIntro, swiperGallery};
