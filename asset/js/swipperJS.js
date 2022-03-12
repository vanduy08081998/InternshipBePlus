// Slider for Team-Section
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          // console.log("STOPED");
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          // console.log('GO')
        });
      }
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        769: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        1242: {
          slidesPerView: 3,
          spaceBetween: 30
        }
      }
});
// Slide for Status-section
var swiperStatusSection = new Swiper(".mySwiperStatus", {
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          // console.log("STOPED");
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          // console.log('GO')
        });
      }
    },
});
// Slide for New-section
var swiperNewsSection = new Swiper(".mySwiperNews", {
    slidesPerView: 3,
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
          // console.log("STOPED");
        });
  
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
          // console.log('GO')
        });
      }
    },
    breakpoints: {
        // when window width is >= 320px
         320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 30
        },
        // when window width is >= 640px
        776: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 40
        }
      }
});