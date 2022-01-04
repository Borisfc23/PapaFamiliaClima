/*Aparecer el menu  */
let btnMenu = document.getElementById("btn-menu");
let mainNav = document.getElementById("main-nav");
btnMenu.addEventListener("click", function () {
  mainNav.classList.toggle("mostrar");
});
/*==================== SHOW SCROLL TOP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
