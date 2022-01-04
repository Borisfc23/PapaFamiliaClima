var btnPrograma = document.getElementById("btn-programa");
var btnPonentes = document.getElementById("btn-ponentes");
var btnVideo = document.getElementById("btn-video");
var btnMateriales = document.getElementById("btn-materiales");
var btnForo = document.getElementById("btn-foro");
var btnConclusion = document.getElementById("btn-conclusion");

var contTabla = document.getElementById("cont-tabla");
var contPonentes = document.getElementById("cont-ponentes");
var contVideo = document.getElementById("cont-video");
var contMateriales = document.getElementById("cont-materiales");
var contConlusion = document.getElementById("cont-conclusion");
var contForo = document.getElementById("cont-foro");

var secciones = document.querySelectorAll(".seccion");

contTabla.style.display = "block";
contPonentes.style.display = "none";
contVideo.style.display = "none";
contMateriales.style.display = "none";
contForo.style.display = "none";
contConlusion.style.display = "none";

secciones.forEach((element) => {
  element.classList.remove("select");
});
btnPrograma.classList.add("select");

btnPrograma.addEventListener("click", () => {
  contTabla.style.display = "block";
  contPonentes.style.display = "none";
  contVideo.style.display = "none";
  contMateriales.style.display = "none";
  contConlusion.style.display = "none";
  contForo.style.display = "none";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnPrograma.classList.add("select");
});
btnPonentes.addEventListener("click", () => {
  contTabla.style.display = "none";
  contPonentes.style.display = "block";
  contVideo.style.display = "none";
  contMateriales.style.display = "none";
  contConlusion.style.display = "none";
  contForo.style.display = "none";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnPonentes.classList.add("select");
});
btnVideo.addEventListener("click", () => {
  contTabla.style.display = "none";
  contPonentes.style.display = "none";
  contVideo.style.display = "block";
  contMateriales.style.display = "none";
  contConlusion.style.display = "none";
  contForo.style.display = "none";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnVideo.classList.add("select");
});
btnMateriales.addEventListener("click", () => {
  contTabla.style.display = "none";
  contPonentes.style.display = "none";
  contVideo.style.display = "none";
  contMateriales.style.display = "block";
  contForo.style.display = "none";
  contConlusion.style.display = "none";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnMateriales.classList.add("select");
});
btnConclusion.addEventListener("click", () => {
  contTabla.style.display = "none";
  contPonentes.style.display = "none";
  contVideo.style.display = "none";
  contMateriales.style.display = "none";
  contForo.style.display = "none";
  contConlusion.style.display = "block";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnConclusion.classList.add("select");
});
btnForo.addEventListener("click", () => {
  contTabla.style.display = "none";
  contPonentes.style.display = "none";
  contVideo.style.display = "none";
  contMateriales.style.display = "none";
  contConlusion.style.display = "none";
  contForo.style.display = "block";
  secciones.forEach((element) => {
    element.classList.remove("select");
  });
  btnForo.classList.add("select");
});
