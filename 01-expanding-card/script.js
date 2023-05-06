const panles = document.querySelectorAll(".panel");
console.log(panles);
panles.forEach((panel) => {
  panel.addEventListener("click", () => {
    panles.forEach((pan) => {
      pan.classList.remove("active");
    });
    panel.classList.add("active");
  });
});
