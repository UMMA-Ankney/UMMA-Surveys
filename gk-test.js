document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".glance-details-toggle");

  toggles.forEach(function (toggleBlock) {
    const button = toggleBlock.querySelector("button");
    const details = toggleBlock.querySelector(".glance-details-content");

    if (!button || !details) return; // exit if either element is missing

    button.addEventListener("click", function () {
      const isHidden = details.style.display === "none" || details.style.display === "";
      details.style.display = isHidden ? "block" : "none";
      button.textContent = isHidden ? "Hide Details" : "View More Details";
    });
  });
});

