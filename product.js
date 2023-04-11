function imageupdate(bhu){
  document.querySelector('.selected_product_img').src=bhu
}



gsap.from('nav', {opacity:0, delay:1.6, duration:2.5, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.search', {opacity:0, delay:1.8, duration:2.8, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.brand_type', {opacity:0, delay:2.2, duration:3, ease: "elastic.out(1,0.3)", y:-100});

gsap.from('.discount', {opacity:0, delay:1, scale:.1, duration:2.4, rotation:180,
 ease: "expo.inOut", x:100});

gsap.from('.bottom_tea_card', {opacity:0, delay:2.6, duration:3.5, ease: "elastic.out(1,0.3)", x:100});

gsap.from('.selected_product_img', {opacity:0, delay:3, duration:4, ease:"elastic.out(1,0.3)", y:100});

gsap.from('.size_product', {opacity:0, delay:3.5, duration:0.5, ease:"Expo.In", y:100});

gsap.from('.circle1', {opacity:0, delay:4.5, scale:.1, duration:.7, ease:"expo.In"});

gsap.from('.circle2', {opacity:0, delay:4.8, scale:.1, duration:.7, ease:"expo.In"});


























let products = {
  data: [
    {
      productName: "Regular White T-Shirt",
      category: "Topwear",
      price: "30",
      image: "cofe_1.jpg",
    },
    
    {
      productName: "Sporty SmartWatch",
      category: "Watch",
      price: "99",
      image: "sporty-smartwatch.jpg",
    },
    {
      productName: "Basic Knitted Top",
      category: "Topwear",
      price: "29",
      image: "knitted-top.jpg",
    },
    {
      productName: "Black Leather Jacket",
      category: "Jacket",
      price: "129",
      image: "black-leather-jacket.jpg",
    },
    
    {
      productName: "Comfy Gray Pants",
      category: "Bottomwear",
      price: "49",
      image: "comfy-gray-pants.jpg",
    },
  ],
};






for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}
//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}
//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");
  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};

