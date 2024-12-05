
// Sidebar Toggle Functionality
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

// Money and Progress Bar Update Functionality
document.addEventListener("DOMContentLoaded", function() {
    const addButton = document.querySelector(".AddBtn");
    const currentMoneyElem = document.querySelector(".current-money");
    const totalMoneyElem = document.querySelector(".total-money");
    const progressBar = document.querySelector(".progress-bar");
    const progressText = document.querySelector(".progress-text p");

    let totalMoney = 0;
    let currentMoney = 0;
    let initialized = false; // Flag to check if initial amounts are set

    // Function to prompt user for total money
    function promptTotalMoney() {
        totalMoney = parseFloat(prompt("Enter the total amount of money you have:")) || 0;
        if (totalMoney <= 0) {
            alert("Please enter a valid total amount.");
            promptTotalMoney();
        } else {
            totalMoneyElem.textContent = `₱${totalMoney.toLocaleString()}`;
            initialized = true;
        }
    }

    // Function to update progress bar
    function updateProgress() {
        const percentage = totalMoney > 0 ? Math.min((currentMoney / totalMoney) * 100, 100).toFixed(2) : 0;
        progressBar.style.strokeDashoffset = calcStrokeDashoffset(percentage);
        progressText.innerHTML = `${percentage}%<br>left`;
    }

    // Function to calculate stroke-dashoffset
    function calcStrokeDashoffset(percentage) {
        const circumference = 2 * Math.PI * 50;
        return circumference - (circumference * percentage) / 100;
    }

    // Event listener for add button
    addButton.addEventListener("click", function() {
        if (!initialized) {
            promptTotalMoney();
        }
        currentMoney = parseFloat(prompt("Enter the amount of money you currently have:")) || 0;
        if (currentMoney > totalMoney) {
            alert("Current money cannot exceed total money. Please enter a valid amount.");
        } else {
            currentMoneyElem.textContent = `₱${currentMoney.toLocaleString()}`;
            updateProgress();
        }
    });

    updateProgress(); // Initialize the progress on load
});
