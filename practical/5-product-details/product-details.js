// Change the main product image
function changeImage(imageUrl) {
    document.getElementById("mainImage").src = imageUrl;
}

// Update selected options
function updateSelection(optionType, value) {
    console.log(`${optionType} selected: ${value}`);
}

// Add product to cart
function addToCart() {
    const selectedColor = document.getElementById("color").value;
    const selectedSize = document.getElementById("size").value;
    alert(`Added to cart: Product Name\nColor: ${selectedColor}\nSize: ${selectedSize}`);
}
