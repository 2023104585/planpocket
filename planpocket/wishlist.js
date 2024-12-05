const sidebar = document.querySelector(".sidebar");
const sidebarToggler = document.querySelector(".sidebar-toggler");
const logo = document.querySelector(".header-logo");

sidebarToggler.addEventListener("click", () => {
    sidebar.classList.toggle("collapsed");
    if (sidebar.classList.contains("collapsed")) {
        logo.style.display = "none";
    } else {
        logo.style.display = "block";
    }
});

document.querySelector('#calculate-btn').addEventListener('click', function () {
    const priceInput = document.querySelector('#price').value;
    const purchaseDateInput = document.querySelector('#purchase-date').value;
    const popup = document.querySelector('#popup');
    const popupMessage = document.querySelector('#popup-message');
    const popupClose = document.querySelector('#popup-close');

    // Parse the price and date input
    const price = parseFloat(priceInput);
    const purchaseDate = new Date(purchaseDateInput);
    const today = new Date();

    // Check if inputs are valid
    if (isNaN(price) || !purchaseDateInput || purchaseDate <= today) {
        popupMessage.textContent = "Please enter a valid price and a future purchase date.";
        popup.style.display = 'flex';
        return;
    }

    // Calculate the number of days from today to the target purchase date
    const timeDiff = purchaseDate - today; // Difference in milliseconds
    const daysRemaining = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // Convert to days

    // Calculate daily savings required
    const dailySavings = (price / daysRemaining).toFixed(2);

    // Format the result in PHP currency format
    const formattedDailySavings = `₱${parseFloat(dailySavings).toLocaleString('en-PH', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    // Display the result in the popup
    popupMessage.textContent = `You need to save ${formattedDailySavings} per day to buy your item in ${daysRemaining} days.`;
    popup.style.display = 'flex';
});

// Close the popup when the close button is clicked
document.querySelector('#popup-close').addEventListener('click', function () {
    document.querySelector('#popup').style.display = 'none';
});

// Close the popup when clicking outside the popup content
document.querySelector('#popup').addEventListener('click', function (e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
