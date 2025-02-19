function selectOffer(offer) {
    // Hide all dropdowns
    document.querySelectorAll('.options').forEach(option => {
        option.style.display = 'none';
    });

    // Show size & color options for the selected offer
    document.getElementById(`options${offer}`).style.display = 'block';

    // Update total price
    let totalPrice = "$10.00 USD";
    if (offer === 2) totalPrice = "$18.00 USD";
    if (offer === 3) totalPrice = "$24.00 USD";

    document.getElementById('totalPrice').innerText = totalPrice;
}
