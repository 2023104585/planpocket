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

