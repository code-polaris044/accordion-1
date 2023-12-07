// @ts-check
"use strict";

const parentMenu = document.querySelectorAll(".menu > li > a");

// for (let i = 0; i < parentMenu.length; i++) {
//     parentMenu[i].addEventListener("click", function (e) {
//         e.preventDefault();
//         this.classList.toggle("active");
//         this.nextElementSibling.classList.toggle("active");
//     });
// }

function toggleMenu(e) {
    e.preventDefault();
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("active");
}

function addEventListeners() {
    const parentMenu = document.querySelectorAll(".menu > li > a");
    for (let i = 0; i < parentMenu.length; i++) {
        parentMenu[i].addEventListener("click", toggleMenu);
    }
}

function removeEventListeners() {
    const parentMenu = document.querySelectorAll(".menu > li > a");
    for (let i = 0; i < parentMenu.length; i++) {
        parentMenu[i].removeEventListener("click", toggleMenu);
    }
}

// 初期状態での設定
if (window.innerWidth <= 750) {
    addEventListeners();
}

// ウィンドウのリサイズ時に条件を判定し、イベントリスナーを追加・削除
window.addEventListener("resize", function () {
    if (window.innerWidth <= 750) {
        addEventListeners();
    } else {
        removeEventListeners();
    }
});
