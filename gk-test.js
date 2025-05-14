document.addEventListener("DOMContentLoaded", function () {
  function toggleDetails(button) {
    const details = button.nextElementSibling;
    const isHidden = details.style.display === "none";
    details.style.display = isHidden ? "block" : "none";
    button.textContent = isHidden ? "Hide Details" : "View More Details";
  }

  // Attach click event to all matching buttons
  const buttons = document.querySelectorAll(".glance-details-toggle button");
  buttons.forEach((btn) => {
    btn.addEventListener("click", function () {
      toggleDetails(this);
    });
  });
});
