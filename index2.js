// @ts-check
"use strict";

const button = document.querySelectorAll(".js-button");
const openClass = "is-expand";
Array.prototype.forEach.call(button, (el) => {
    const contents = el.nextElementSibling;
    el.addEventListener("click", (e) => {
        e.preventDefault();
        el.classList.toggle(openClass);
        contents.classList.toggle(openClass);
    });
});
