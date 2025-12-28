// Initials
const name = "Adv. Ajay Kumar";
document.getElementById("initials").textContent = name
  .replace("Adv.", "")
  .trim()
  .split(" ")
  .map(w => w[0])
  .join(" ");

// Tabs logic – NO auto scrolling to content
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".tab-panel");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    // remove active state
    tabs.forEach(t => t.classList.remove("active"));
    panels.forEach(p => p.classList.remove("active"));

    // activate selected tab
    tab.classList.add("active");
    document
      .getElementById(tab.dataset.tab)
      .classList.add("active");

    // OPTIONAL: keep tab visible in horizontal slider
    tab.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
  });
});
