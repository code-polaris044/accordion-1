// @ts-check
"use strict";

const parentMenu = document.querySelectorAll(".menu > li > a");

/**
 * Toggle menu visibility.
 * @param {MouseEvent} e - The click event.
 */
const toggleMenu = (e) => {
    e.preventDefault();

    const target = e.currentTarget;

    if (target instanceof HTMLElement) {
        target.classList.toggle("active");

        const nextSibling = target.nextElementSibling;
        if (nextSibling instanceof HTMLElement) {
            nextSibling.classList.toggle("active");
        }
    }
};

/**
 * Add click event listeners to menu items.
 */
const addEventListeners = () => {
    parentMenu.forEach((item) => {
        // @ts-ignore
        item.addEventListener("click", toggleMenu);
    });
};

/**
 * Remove click event listeners from menu items.
 */
const removeEventListeners = () => {
    parentMenu.forEach((item) => {
        // @ts-ignore
        item.removeEventListener("click", toggleMenu);
    });
};

// Initial setup based on window width
if (window.innerWidth <= 750) {
    addEventListeners();
}

// Add or remove event listeners on window resize
window.addEventListener("resize", () => {
    if (window.innerWidth <= 750) {
        addEventListeners();
    } else {
        removeEventListeners();
    }
});

// HTML文書内の最初のimg要素を取得し、myImageに割り当てる
const myImage = document.querySelector("img");

// myImageをコンソールに出力
window.console.log(myImage);

// myImageがクリックされたときに実行される関数を定義
myImage.onclick = () => {
    // 現在の画像のソース（src属性）を取得
    const mySrc = myImage.getAttribute("src");

    // 現在の画像のソースによって条件分岐
    if (mySrc === "img/ll.jpg") {
        // もし現在のソースが"img/ll.jpg"なら、ソースを"img/pp.jpg"に変更
        myImage.setAttribute("src", "img/pp.jpg");
    } else {
        // それ以外の場合は、ソースを"img/ll.jpg"に変更
        myImage.setAttribute("src", "img/ll.jpg");
    }
};
