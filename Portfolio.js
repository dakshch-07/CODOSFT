
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay:{
         delay:2500
      },
      breakpoints:{
         1200:{
          slidesPerView:3,
         },
         800:{
          slidesPerView:2,
         },
         500:{
          slidesPerView: 1,
         }
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
