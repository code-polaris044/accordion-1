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
