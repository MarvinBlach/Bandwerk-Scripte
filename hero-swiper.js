var swiper = new Swiper(".is-hero", {
    spaceBetween: 30,
    centeredSlides: true,
     effect: 'slide', // Add slide effect
     speed: 800,
    autoplay: {
      delay: 7000,
      disableOnInteraction: false
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
      bulletClass: "wb-swiper-bullet",
      bulletActiveClass: "is-active",
      renderBullet: function (index, className) {
        return `<span class="${className}">
                  <div class="wb-progress-wrapper">
                    <div class="wb-progressbar"></div>
                  </div>
                </span>`;
      }
    },
    navigation: {
      nextEl: "#hero-next",
      prevEl: "#hero-prev"
    },
    on: {
      autoplayTimeLeft(swiper, timeLeft, progress) {
        const activeBullet = document.querySelector(".swiper-pagination .is-active .wb-progressbar");
        if (activeBullet) {
          activeBullet.style.transform = `scaleX(${1 - progress})`;
        }
      },
      slideChange(swiper) {
        // Reset all progress bars
        const progressBars = document.querySelectorAll(".swiper-pagination .wb-progressbar");
        progressBars.forEach((bar) => {
          bar.style.transform = `scaleX(0)`;
        });
      },
      autoplayStop(swiper) {
        // Reset all progress bars to 0 when autoplay stops
        const progressBars = document.querySelectorAll(".swiper-pagination .wb-progressbar");
        progressBars.forEach((bar) => {
          bar.style.transform = `scaleX(0)`;
        });
      }
    }
  });