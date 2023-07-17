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
//the blur effect on the txt clss
const txt_area = document.querySelectorAll(".txt");
const imge = document.querySelectorAll(".picc")
//the dots
const dotcont = document.querySelector('.dots');

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
let cursl = 1;

const mains = function (slide){
    slides.forEach((s, _) => s.classList.add('c_blur'));
    document.querySelector(`.slide[data-bur="${slide}"]`).classList.remove('c_blur');
}
const them_img = function (slide){
    imge.forEach((s, _) => s.classList.add('frc'));
    document.querySelector(`.picc[data-img="${slide}"]`).classList.remove('frc');
}
const txte = function (slide){
    txt_area.forEach((s, _) => s.classList.remove('mt'));
    txt_area.forEach((s, _) => s.style.transform = "scale(0.8)");
    document.querySelector(`.txt[data-txt="${slide}"]`).classList.add('mt');
    document.querySelector(`.txt[data-txt="${slide}"]`).style.transform = 'scale(1)';
}
txte(cursl)
them_img(cursl)
mains(cursl)
const createdot = function () {
    slides.forEach(function(_, i){
        dotcont.insertAdjacentHTML('beforeend', `<button class="dots_dot" data-slide="${i}"></button>`)
    })
}
createdot();
const active_dot = function(slide) {
    document.querySelectorAll('.dots_dot').forEach(dot => dot.classList.remove('dot_active'));
    document.querySelector(`.dots_dot[data-slide="${slide}"]`).classList.add('dot_active');
}
active_dot(cursl);
slides.forEach((s, i) => (
    s.style.transform = `translateX(${100 * (i - 1)}%)`
    ))
    
const move = function (curr){
    slides.forEach((s, i) => (
        s.style.transform = `translateX(${100 * (i - curr)}%)`
    ))
    mains(curr);
    them_img(curr);
    txte(curr);
    active_dot(curr);
}

const next = function (){
    if (cursl === maxl - 1){
        cursl = 0;
    }
    else {
        cursl++;
    }
    move(cursl);
}
const prev = function() {
    if (cursl === 0){
        cursl = maxl - 1;
    }
    else {
        cursl--;
    }
    move(cursl)
}
rbtn.addEventListener('click', function() {
    next()
})

lbtn.addEventListener('click', function() {
    prev()
})

document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft'){
        prev();
    }
    else if (e.key === 'ArrowRight'){
        next()
    }
})

//them dots

dotcont.addEventListener('click', function(e){
    if(e.target.classList.contains('dots_dot')){
        const slide = e.target.dataset.slide;
        move(slide);
        active_dot(slide);
    }
})