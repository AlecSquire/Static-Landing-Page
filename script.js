document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".mySwiper", {
    autoplay: {
      delay: 4000,
    },
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    speed: 800,
    effect: "ease",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
