// Update totals dynamically
document.addEventListener("DOMContentLoaded", () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const totalItems = document.getElementById("total-items");
    const totalPrice = document.getElementById("total-price");

    const updateTotals = () => {
        let totalItemCount = 0;
        let totalItemPrice = 0;

        cartItems.forEach(item => {
            const quantity = parseInt(item.querySelector(".item-quantity").value, 10);
            const price = parseFloat(item.querySelector("p").innerText.replace("Price: $", ""));
            totalItemCount += quantity;
            totalItemPrice += quantity * price;
        });

        totalItems.textContent = totalItemCount;
        totalPrice.textContent = totalItemPrice.toFixed(2);
    };

    // Add event listeners for quantity buttons
    cartItems.forEach(item => {
        const decreaseBtn = item.querySelector(".decrease");
        const increaseBtn = item.querySelector(".increase");
        const quantityInput = item.querySelector(".item-quantity");

        decreaseBtn.addEventListener("click", () => {
            if (quantityInput.value > 1) {
                quantityInput.value = parseInt(quantityInput.value, 10) - 1;
                updateTotals();
            }
        });

        increaseBtn.addEventListener("click", () => {
            quantityInput.value = parseInt(quantityInput.value, 10) + 1;
            updateTotals();
        });

        quantityInput.addEventListener("change", updateTotals);

        // Remove item functionality
        const removeBtn = item.querySelector(".remove-item");
        removeBtn.addEventListener("click", () => {
            item.remove();
            updateTotals();
        });
    });

    updateTotals();
});
