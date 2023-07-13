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


// carousel
// const btn = document.querySelector('#btn');
const slides = document.querySelectorAll(".slide");
const lbtn = document.querySelector('.slider__btn--left');
const rbtn = document.querySelector('.slider__btn--right');
const slider = document.querySelector('.slider');

lbtn.addEventListener('click', function() {
    lbtn.classList.add('clicked');
    console.log(`okk`);
    setTimeout(function() {
        lbtn.classList.remove('clicked');
    }, 200);
});
rbtn.addEventListener('click', function() {
    rbtn.classList.add('clickedr');
    console.log(`okk`);
    setTimeout(function() {
        rbtn.classList.remove('clickedr');
    }, 200);
});
const maxl = slides.length;
let cursl = 0;
slides.forEach((s, i) => (
    s.style.transform = `translateX(${100 * i}%)`
))

const move = function (curr){
    slides.forEach((s, i) => (
        s.style.transform = `translateX(${100 * (i - curr)}%)`
    ))
}

rbtn.addEventListener('click', function() {
    if (cursl === maxl - 1){
        cursl = 0;
    }
    else {
        cursl++;
    }
    move(cursl)
})
lbtn.addEventListener('click', function() {
    if (cursl === 0){
        cursl = maxl - 1;
    }
    else {
        cursl--;
    }
    move(cursl)
})