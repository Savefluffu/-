const popularSwiper = new Swiper(".popular__swiper", {
  slidesPerView: "auto",
  spaceBetween: 15,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    900: {
      slidesPerView: 3
    },
  }
});
const blogSwiper = new Swiper(".blog__swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    901:{
      enabled:false
    },
  }
});
const gallerySwiper = new Swiper(".gallery__swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    769:{
      enabled:false,
    },
  }
});


const menu = document.querySelector(".header__list")
const menuBtn = document.querySelector(".burger__menu-btn");
const body = document.body

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle("active")
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    menuBtn.classList.remove("active")
    menu.classList.remove("active");
    body.classList.remove("lock");
  }
});


const multiSelect = () => {
  const elements = document.querySelectorAll('.js-choice');
  elements.forEach(el => {
  const choices = new Choices(el, {
  searchEnabled: false,
  itemSelectText: '',
  })
  });
};
  
multiSelect();