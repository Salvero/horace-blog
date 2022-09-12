// Sidebar functionality
document.querySelectorAll(".sidebar-toggle").forEach((sidebarToggle) => {
  sidebarToggle.addEventListener("click", (event) => {
    document.body.classList.toggle("sidebar--opened");
    event.preventDefault();
  });
});
const siteOverlay = document.querySelector(".site-overlay");
if (siteOverlay) {
  siteOverlay.addEventListener("click", function (e) {
    document.body.classList.remove("sidebar--opened");
    e.preventDefault();
  });
}
