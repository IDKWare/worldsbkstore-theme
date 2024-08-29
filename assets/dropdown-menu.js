let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
items.forEach(item => {
  item.addEventListener("mouseover", () => {
    item.setAttribute("open", true);
    item.querySelector("ul").addEventListener("mouseleave", () => {
      item.removeAttribute("open");
    });
    item.addEventListener("mouseleave", () => {
      item.removeAttribute("open");
    });
  });
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    const viewAll = item.querySelector("a[id*='-view-all']")
    item.removeAttribute("open");
    viewAll.click();
  })
});
