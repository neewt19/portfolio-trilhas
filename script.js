document.querySelectorAll(".navItem").forEach((item) => {
  item.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(item.getAttribute("href"));
    const offset = 100;
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: targetPosition - offset,
      behavior: "smooth",
    });
  });
});
