document.addEventListener("DOMContentLoaded", function () {
  // Get all toggle blocks — one per event row
  const toggleBlocks = document.querySelectorAll(".glance-details-toggle");

  toggleBlocks.forEach(function (block) {
    const button = block.querySelector("button");
    const details = block.querySelector(".glance-details-content");

    if (!button || !details) return; // skip if either piece is missing

    button.addEventListener("click", function () {
      const isHidden = details.style.display === "none" || details.style.display === "";
      details.style.display = isHidden ? "block" : "none";
      button.textContent = isHidden ? "Hide Details" : "View More Details";
    });
  });
});
