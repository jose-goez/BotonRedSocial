const boton = document.getElementById("boton");
const cerrar = document.getElementById("cerrar");
const menu = document.getElementById("menuRedes");

boton.addEventListener("click", () => {
  menu.style.display = "block";
  cerrar.style.display = "block";
  boton.style.display = "none";
});
cerrar.addEventListener("click", () => {
  menu.style.display = "none";
  cerrar.style.display = "none";
  boton.style.display = "block";
});

menu.addEventListener("click", () =>{
    menu.style.display = "none";
    cerrar.style.display = "none";
    boton.style.display = "block";
});
