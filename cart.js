/*function incrementValue() {

  var value = parseInt(document.getElemen('number').value,5);
    value= isNaN(value) ? 0 : value;
    if(value<5){
        value++;
        document.getElementsByClassName('number').value = value;
    }
}

function decrementValue() {

    var value = parseInt(document.getElementsByClassName('number').value,5);
    value= isNaN(value) ? 0 : value;
    if(value>1){
        value--;
        document.getElementsByClassName('number').value = value;
    }
}*/

// Get all the plus and minus buttons
const plusButtons = document.querySelectorAll(".plus-btn");
const minusButtons = document.querySelectorAll(".minus-btn");

// Add click event listeners to each button
plusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the product ID
    const productId = button.dataset.productId;

    // Get the current count and price
    const countElement = document.querySelector(`#number-${productId}`);
    const currentCount = parseInt(countElement.innerText);
    const priceElement = document.querySelector(`#total-price-5-${productId}`);
    const currentPrice = parseInt(priceElement.innerText.replace("$", ""));

    // Increment the count and update the price
    const newCount = currentCount + 1;
    const newPrice = currentPrice + 10; // Assuming each product costs $10
    countElement.innerText = newCount;
    priceElement.innerText = "$" + newPrice;
  });
});

minusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Get the product ID
    const productId = button.dataset.productId;


// Get the current count and price
const countElement = document.querySelector(`#product-count-${productId}`);
const currentCount = parseInt(countElement.innerText);
const priceElement = document.querySelector(`#product-price-${productId}`);
const currentPrice = parseInt(priceElement.innerText.replace("$", ""));

// Decrement the count and update the price
const newCount = Math.max(currentCount - 1, 0);
const newPrice = Math.max(currentPrice - 10, 0); // Assuming each product costs $10
countElement.innerText = newCount;
priceElement.innerText = "$" + newPrice;
  });
});