const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const navLinks = document.getElementById("nav-links");

mobileMenuToggle.addEventListener("click", () => {
    if(navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "90px";
        navLinks.style.left = "0";
        navLinks.style.width = "100%";
        navLinks.style.background = "#fff";
        navLinks.style.padding = "20px";
        navLinks.style.boxShadow = "0 10px 30px rgba(0,0,0,0.08)";
    }
});