const open_menu = document.querySelector(".open_menu");
const menu_img = document.querySelector("#menu_img");
const mob_menu = document.getElementById("mob_menu");
const blurry = document.querySelector(".blur");
const blurryx = document.querySelector(".blurx");
const overlay = document.querySelector(".overlay");
const overlayx = document.querySelector(".overlayx");
const waves = document.getElementById("waves");

let check_open = false;
open_menu.addEventListener('click', function() {
    if (check_open){
        menu_img.setAttribute("src", "images/menu.svg");
        if (window.innerWidth <= 767){
            mob_menu.style.right = "-100vw";
        }
        else{
            mob_menu.style.right = "-60vw";
        }
        check_open = false;
        document.body.classList.remove("no-scroll");
        blurry.classList.remove("blur-body");
        blurryx.classList.remove("blur-body");
        overlay.style.display = "none";
        overlayx.style.display = "none";
        waves.style.display = "block";

    }
    else{
        waves.style.display = "none";
        menu_img.setAttribute("src", "images/cancel.svg");
        mob_menu.style.right = "0";
        check_open = true;
        document.body.classList.add("no-scroll");
        blurry.classList.add("blur-body");
        blurryx.classList.add("blur-body");
        overlay.style.display = "block";
        overlayx.style.display = "block";
    }
})


// console.log(width);