var swiper = new Swiper(".slide-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    centerSlide:"true",
    grabCursor:"true",
    fade:"true",
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets:true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const name = document.querySelectorAll(".name");
const price = document.querySelectorAll(".job");
const button = document.querySelectorAll("button");
const cart = []
const addToCart = () => {
    for (var i = 0; i < 1; i++) {
        cart.push(name[i].innerText)
        cart.push(parseInt(price[i].innerText))
    }
    console.log(cart)
}

