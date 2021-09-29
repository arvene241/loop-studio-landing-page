const menu_btn = document.getElementsByClassName("menu-btn");
const mobile_nav = document.getElementsByClassName("mobile-nav");
const icon = document.querySelector(".icon1");

menu_btn[0].addEventListener("click", () => {
    if (icon.classList == "icon1") {
        icon.classList.remove("icon1");
        mobile_nav[0].classList.add("active");
        icon.classList.add("icon2");
    } else {
        icon.classList.remove("icon2");
        mobile_nav[0].classList.remove("active");
        icon.classList.add("icon1");
    }
});