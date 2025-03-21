document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const sidebar = document.querySelector(".sidebar");
    const overlay = document.querySelector(".overlay");

    function toggleSidebar() {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        menuToggle.style.display = sidebar.classList.contains("active") ? "none" : "block";
    }

    menuToggle.addEventListener("click", toggleSidebar);
    overlay.addEventListener("click", toggleSidebar);

    // Cycling Services
    const services = [
        "Logo Design",
        "Brand Identity",
        "Social Media Management",
        "Marketing Consulting"
    ];
    let serviceIndex = 0;
    function cycleServices() {
        document.getElementById("cycling-services").textContent = services[serviceIndex];
        serviceIndex = (serviceIndex + 1) % services.length;
    }
    setInterval(cycleServices, 2500);
});
