// Прокрутка страницы и навигация
document.addEventListener("DOMContentLoaded", function () {
  const navInit = () => {
    const nav = document.querySelector(".nav"); // ищем блок навигации
    const links = document.querySelectorAll(".nav__link"); // ищем все навигационные ссылки
    const sections = document.querySelectorAll("section"); // ищем все секции
    sections.forEach((section) => {
      // для каждой секции
      if (window.pageYOffset >= section.offsetTop) {
        // проверяем, если страница прокручена больше, чем расстояние секции от начала страницы
        links.forEach((link) => {
          // для каждой ссылки
          link.classList.remove("nav__link_active"); // удаляем активный класс
          if (link.dataset.section === section.dataset.section) {
            // проверяем, если data-атрибуты ссылки и секции совпадают
            link.classList.add("nav__link_active"); // добавляем ссылке активный класс
          }
        });
      }
    });
  };
  navInit(); // запускаем функцию при загрузке страницы
  window.addEventListener("scroll", () => {
    navInit(); // запускаем функцию при скролле страницы
  });
  window.addEventListener("resize", () => {
    navInit(); // запускаем функцию при ресайзе страницы
  });
});

//Главное меню close
const menu = document.querySelector(".info-menu");
const closeMenuIcon = document.querySelector(".info-menu__icon-close");
closeMenuIcon.addEventListener("click", () => {
  menu.style.display = "none";
  header.style.display = "block";
});
// open
const burger = document.querySelector(".menu__burger");
const header = document.querySelector("header");
burger.addEventListener("click", () => {
  menu.style.display = "block";
  header.style.display = "none";
});

// Селекшн
const selectSingle = document.querySelector(".__select");
const selectSingle_title = selectSingle.querySelector(".__select__title");
const selectSingle_labels = selectSingle.querySelectorAll(".__select__label");

// Менюшка селекшн
selectSingle_title.addEventListener("click", () => {
  if ("active" === selectSingle.getAttribute("data-state")) {
    selectSingle.setAttribute("data-state", "");
  } else {
    selectSingle.setAttribute("data-state", "active");
  }
});

// Закрываем меню когда выбрали пункт
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute("data-state", "");
  });
}

// Аккордеон
const accordeon = document.getElementsByClassName("accordeon__title");

for (let i = 0; i < accordeon.length; i++) {
  accordeon[i].addEventListener("click", function () {
    this.classList.toggle("accordeon__title_active"); // Управление иконкой аккордеона

    // Показываем / скрываем блок с текстом
    const accordeonItem = this.nextElementSibling;
    if (
      (accordeonItem.style.height === "0px",
      accordeonItem.style.opacity === "0",
      accordeonItem.style.padding === "0px")
    ) {
      accordeonItem.style.height = "100%";
      accordeonItem.style.opacity = "1";
      accordeonItem.style.padding = "25px 0 30px 0";
    } else {
      accordeonItem.style.height = "0px";
      accordeonItem.style.opacity = "0";
      accordeonItem.style.padding = "0px";
    }
  });
}

//Switch block
const switchDesk = document.querySelector(".switch-desk");
const switchMob = document.querySelector(".switch-mob");
const switchDeskBlock = document.querySelector(".block-desk");
const switchMobBlock = document.querySelector(".block-mob");
const switches = document.querySelectorAll(".switch");

//Меняем активные классы переключателей
for (const switchh of switches) {
  switchh.addEventListener("click", () => {
    clearActiveClass();

    switchh.classList.add("switches-row__switch_active");
  });
}
function clearActiveClass() {
  switches.forEach((switchh) => {
    switchh.classList.remove("switches-row__switch_active");
  });
}
//Скрываем/проказываем блоки
switchDesk.addEventListener("click", () => {
  switchMobBlock.style.display = "none";
  switchDeskBlock.style.display = "block";
});
switchMob.addEventListener("click", () => {
  switchDeskBlock.style.display = "none";
  switchMobBlock.style.display = "block";
});

//Валидация поля с емайл
const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector(".input-text");
const errorTitle = document.querySelector(".error-title");
const errorText = document.querySelector(".error-text");

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
    errorText.classList.remove("error-text_active");
    errorTitle.classList.remove("error-title_active");
  } else {
    input.style.borderColor = "red";
    errorText.classList.add("error-text_active");
    errorTitle.classList.add("error-title_active");
  }
}

input.addEventListener("input", onInput);

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
