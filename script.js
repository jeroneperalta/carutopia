smoothScroll();
function heroSlider() {
  tns({
    container: ".hero--slide",
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayButtonOutput: false,
    mode: "gallery",
    speed: 3000,
    controls: false,
  });
  const nextSlides = document.querySelectorAll(".hero--slide--item");
  nextSlides.forEach((element) => element.classList.remove("d-none"));
}
function reviewSlider() {
  tns({
    container: ".reviews--list",
    items: 1,
    navPosition: "bottom",
    edgePadding: 30,
    loop: false,
    rewind: true,
    speed: 800,
    controls: false,
    responsive: {
      1440: {
        items: 4,
        edgePadding: 70,
      },
      1024: {
        items: 3,
        edgePadding: 60,
      },
      768: {
        items: 2,
        edgePadding: 50,
      },
    },
  });
}
function lightBox() {
  const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    autoplayVideos: true,
  });
}

function smoothScroll() {
  window.addEventListener("load", function () {
    document
      .querySelector("#hero--anchor--link")
      .addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector("#services").scrollIntoView({
          behavior: "smooth",
        });
      });
  });
}
