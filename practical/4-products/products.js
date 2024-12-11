// Array to store the cart items
const cart = [];

// Function to add a product to the cart
function addToCart(productName) {
    cart.push(productName);
    alert(`${productName} added to your cart!`);
    console.log(cart); // Debugging purposes
}

// Function to filter products
function filterProducts() {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchQuery)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}
