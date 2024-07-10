let listMenu = document.querySelectorAll(".menu li");
let sideBar = document.querySelector(".sidebar");
let btnMenu = document.querySelector(".icon-menu i");
function addClassToList() {
  listMenu.forEach((list) => {
    this.classList.add("foc-us");
    list.classList.remove("foc-us");
  });
}
listMenu.forEach((list) => {
  list.addEventListener("mouseover", addClassToList);
});
btnMenu.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});
