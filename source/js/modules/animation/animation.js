const animation = () => {
  if (document.querySelector('.gallery__list') !== null) {
    const parent = document.querySelector('.gallery__list');
    parent.classList.add('gallery__list--hide');

    const onEntry = () => {
      parent.classList.remove('gallery__list--hide');
      parent.classList.add('gallery__list--animate');
    };

    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          onEntry();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(parent);
  } else {
    return;
  }
};

animation();
