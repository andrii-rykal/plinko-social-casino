const openMenu = document.getElementById("menu-open");
const closeMenu = document.getElementById("menu-close");
const header = document.querySelector(".header");
const slider = document.querySelector(".reviews-cards");
const sidebar = document.querySelector(".sidebar");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
let translate = 0;
const step = 246;

openMenu.addEventListener("click", () => {
  header.style.display = "none";
  sidebar.style.transform = "translateX(0)";
  document.body.style.overflow = "hidden";
});

closeMenu.addEventListener("click", () => {
  header.style.display = "flex";
  sidebar.style.transform = "translateX(100%)";
  document.body.style.overflow = "visible";
});

next.addEventListener("click", () => {
  const windowWidth = document.documentElement.clientWidth;
  const invisiblePart = 1240 - windowWidth - Math.abs(translate);

  console.log("translate", translate);
  console.log("invisiblePart", invisiblePart);

  if (invisiblePart >= step) {
    translate += step;
    slider.style.transform = `translateX(${-translate}px)`;
  } else {
    translate += invisiblePart;
    slider.style.transform = `translateX(${-translate}px)`;
  }
});

prev.addEventListener("click", () => {
  const windowWidth = document.documentElement.clientWidth;
  const invisiblePart = 1240 - windowWidth - Math.abs(translate);

  console.log("translate", translate);
  console.log("invisiblePart", invisiblePart);

  if (translate >= step) {
    translate -= step;
    slider.style.transform = `translateX(${-translate}px)`;
    console.log("translate>step", translate);
    console.log("invisiblePart", invisiblePart);
  } else {
    translate = 0;
    slider.style.transform = `translateX(${translate}px)`;
    console.log("translate<step", translate);
    console.log("invisiblePart", invisiblePart);
  }
});
