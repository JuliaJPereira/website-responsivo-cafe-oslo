const nav = document.getElementById("btn-menu");
nav.addEventListener("click", onclickNav);

const menuItens = document.querySelectorAll("#nav>ul>li>a");

menuItens.forEach((item) => {
  item.addEventListener("click", onclickNav);
});

function onclickNav() {
  const element = document.getElementById("nav");

  if (element.classList.contains("menu-open")) {
    //remove
    element.classList.remove("menu-open");
  } else {
    //adiciona
    element.classList.add("menu-open");
  }
}
