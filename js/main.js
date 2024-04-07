const links = document.querySelectorAll(".scrollTo");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({ behavior: "smooth", block: "end" });
  });
});
