/* Link */

const linkButtonElement = document.querySelector('.main-header__nav-button--link');
const messageElement = document.querySelector('.main-header__copy-message');

const copyLink = () => {
  if (!messageElement.classList.contains('main-header__copy-message--active')) {
    messageElement.classList.add('main-header__copy-message--active');
    setTimeout(() => {
      messageElement.classList.remove('main-header__copy-message--active');
    }, 3000);
  }
}

linkButtonElement.addEventListener('click', copyLink);

/* Swiper */

const swiper = new Swiper('.main-achievements__slider', {
  navigation: {
    nextEl: '.main-achievements__button--next',
    prevEl: '.main-achievements__button--prev',
  },
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  breakpoints: {
    320: {
      spaceBetween: 24,
    },
    768: {
      spaceBetween: 50,
    },
    1440: {
      spaceBetween: 50,
    }
  },
});

/* Scroll */

const scrollButtonElement = document.querySelector('.main-achievements__next-button');
const achievementsElement = document.querySelector('.achievements');

scrollButtonElement.addEventListener('click', ()=>{
  achievementsElement.scrollIntoView({
    block: "start",
    behavior: "smooth"
  });
});
