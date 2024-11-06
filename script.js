function payment() {
    window.location.href = "http://127.0.0.1:5500/payment.html"; 
}


document.addEventListener("DOMContentLoaded", function() {
document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const message = document.getElementById("message").value;

    
    if (name === "" || email === "" || phone === "" || date === "" || time === "" || guests === "") {
    alert("Please fill in this fields.");
    return;
    }

    document.getElementById("confirmation").innerText = `Thank you, ${name}! Your reservation for ${guests} guests on ${date} at ${time} has been confirmed. We look forward to serving you at Loreta's Diner & Bar.`;
    
    document.getElementById("reservation-form").reset();
});
});


let basket = [];
let totalPrice = 0;

function addToBasket(itemName, itemPrice) {
    basket.push({ name: itemName, price: itemPrice });
    updateBasketDisplay();
}

function updateBasketDisplay() {
    const basketItems = document.getElementById('basket-items');
    const totalPriceElement = document.getElementById('total-price');
    const paymentElement = document.getElementById('pay-amount');

    basketItems.innerHTML = '';

    basket.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - £${item.price.toFixed(2)}`;
    basketItems.appendChild(li);
    });
    
    totalPrice = basket.reduce((total, item) => total + item.price, 0);
    totalPriceElement.textContent = totalPrice.toFixed(2);
    
    if (paymentElement) {
    paymentElement.textContent = totalPrice.toFixed(2);
    }
}

function checkout() {
    document.querySelector('.basket-section').style.display = 'none';
    document.querySelector('.payment-section').style.display = 'block';
}

function processPayment(){
    const statusElement = document.getElementById('payment-status');
    statusElement.textContent = "Processing your payment . . .";

setTimeout(() => {
    statusElement.textContent = "Payment successful!";
    basket = [];
    updateBasketDisplay();
    document.querySelector('.payment-section').style.display = 'none';
    document.querySelector('.basket-section').style.display = 'black';
}, 2000);
}

document.addEventListener("DOMContentloaded", function (){
document.querySelectorAll('.custom-button').forEach(button => {
    button.addEventListener('click', () => {
    const itemName = button.getAttribute('data-name');
    const itemPrice = parseFloat(button.getAttribute('data-price'));
    addToBasket(itemName, itemPrice);
    });
});
});