(function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");

  let curSlide = 0;
  const maxSlide = slides.length;

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  goToSlide(0);

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArrowRight" && nextSlide();
  });
})();

(function () {
  const homeSection = document.querySelector("#home");
  const aboutSection = document.querySelector("#about");
  const neighborhoodSection = document.querySelector("#neighborhood");
  const gallerySection = document.querySelector("#gallery");

  document.querySelector("#homeBtn").addEventListener("click", () => {
    homeSection.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#aboutBtn").addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#neighborhoodBtn").addEventListener("click", () => {
    neighborhoodSection.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector("#galleryBtn").addEventListener("click", () => {
    gallerySection.scrollIntoView({ behavior: "smooth" });
  });
  document.querySelector(".arrow-down").addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
  });
})();
