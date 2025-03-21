document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");

        // Hide menu toggle button when sidebar is open
        if (sidebar.classList.contains("active")) {
            menuToggle.style.display = "none";
        } else {
            menuToggle.style.display = "block";
        }
    }

    menuToggle.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);

    // Ensure sidebar closes when a link is clicked
    document.querySelectorAll(".sidebar ul li a").forEach(link => {
        link.addEventListener("click", toggleSidebar);
    });
});
