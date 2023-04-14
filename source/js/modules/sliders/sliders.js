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

/* Hero banner main-page */

const INTRO_DATA = [
  {
    id: 'concept',
    link: '#',
    title: 'concept art',
  },
  {
    id: 'cover',
    link: '##',
    title: 'cover art',
  },
  {
    id: 'assets',
    link: '###',
    title: 'game assets',
  }
];

const GALLERY_DATA = [
  {
    title: 'krastorio',
    link: '#',
    category: 'concept art',
    description: 'Game mod. Over 30 buildings and hundreds of icons',
  },
  {
    title: 'krastorio-2',
    link: '##',
    category: 'cover art',
    description: '":Lsdf lskdf kdj;fldj fksdj;fkldjf ldjf;ldkf ;ldkfj',
  },
  {
    title: 'krastorio-3',
    link: '###',
    category: 'game assets',
    description: 'poioiquweiu ;ldskfjdshf jalsdklm;lk sdfjlfhks fjh kj',
  }
];

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

const swiper1 = document.querySelector('.swiper--intro');
const info = swiper1.querySelector('#intro-info');
const link = info.querySelector('a');
const title = info.querySelector('h2');

swiperIntro.on('slideChange', function () {
  title.classList.add('fade');
  setTimeout(() => {
    const activeSlide = swiper1.querySelector('.swiper-slide-active');
    link.href = INTRO_DATA[activeSlide.id].link;
    title.textContent = INTRO_DATA[activeSlide.id].title;
    title.classList.remove('fade');
  }, 300);
});

/* Gallery banner main-page */

const swiperGallery = new Swiper('.swiper--gallery', {

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

const swiper2 = document.querySelector('.swiper--gallery');
const info2 = swiper2.querySelector('#gallery-info');
const title2 = info2.querySelector('h3');
const category2 = info2.querySelector('h4');
const description = info2.querySelector('p');

swiperGallery.on('slideChange', function () {
  setTimeout(() => {
    const activeSlide = swiper2.querySelector('.swiper-slide-active');
    info2.href = GALLERY_DATA[activeSlide.id].link;
    title2.textContent = GALLERY_DATA[activeSlide.id].title;
    category2.textContent = GALLERY_DATA[activeSlide.id].category;
    description.textContent = GALLERY_DATA[activeSlide.id].description;
  }, 300);
});

/* Full-page scroll main-page */

findSwipers();

export {swiperIntro, swiperGallery};
