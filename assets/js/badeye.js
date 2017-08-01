function init() {
    let badeye_cookie = getCookie('badeye');
    console.log(badeye_cookie);

    if(badeye_cookie === 'yes') {

        let badeye = document.querySelector(".badeye");
        badeye.classList.toggle('visible');

        let tobadeye = document.querySelector(".tobadeye");
        tobadeye.classList.toggle('unvisible');

        let size = localStorage.getItem("size");
        let black = localStorage.getItem("black");
        let hide = localStorage.getItem("hide");

        let font_size = document.querySelectorAll("nav, li, div, p, footer");

        //console.log(elle); console.log(black); console.log(size); console.log(hide);

        for (let node of font_size) {
            if(node.nodeType === 1)node.style.fontSize = size;
        }


        if (black) {
            backColor();

            ToggleButtonVal('fon-color', "чёрный", "белый");
        }

        if (hide) {
            ToggleButtonVal('hide-img', 'скрыть', 'показать');
            let images = document.querySelectorAll('img');

            for (let node of images) {

                if (node.nodeType === 1) node.classList.toggle('hide');

            }
        }

    }
}
function Hide() {

    let hide = localStorage.getItem('hide');

    if (!hide) {
        localStorage.setItem('hide', 'hide');
    }else{
        localStorage.removeItem('hide');
    }

    ToggleButtonVal('hide-img', 'скрыть', 'показать');

    let images = document.querySelectorAll('img');

    for (let node of images) {

        if (node.nodeType === 1) node.classList.toggle('hide');

    }


}

function Normal() {
    let size = localStorage.getItem('size');

    let sm = document.querySelectorAll("nav, ul, li, div, p, footer");
    for (let node of sm) {
        if(node.nodeType === 1) node.style.fontSize = "large";
    }
    if (size) {localStorage.removeItem('size');}
    localStorage.setItem('size', 'large');
}

function Middle() {
    let size = localStorage.getItem('size');

    let md = document.querySelectorAll("nav, ul, li, div, p, footer");
    for (let node of md) {
        if(node.nodeType === 1) node.style.fontSize = "x-large";
    }

    if (size) {localStorage.removeItem('size');}
    localStorage.setItem('size', 'x-large');
}

function Big() {
    let size = localStorage.getItem('size');

    let lg = document.querySelectorAll("nav, ul, li, div, p, footer");
    console.log(lg);
    for (let node of lg) {
        if(node.nodeType === 1) node.style.fontSize = "xx-large";
    }
    if (size) {localStorage.removeItem('size');}
    localStorage.setItem('size', 'xx-large');

}

function Black() {

    let black = localStorage.getItem('black');

    backColor();


    ToggleButtonVal('fon-color', "чёрный", "белый");

    if (!black) {
        localStorage.setItem('black', 'black');
    }
    else {
        localStorage.removeItem('black');
    }
}

function Back() {

    let badeye_cookie = getCookie('badeye');

    if (badeye_cookie === 'yes')
    {
        document.cookie = "badeye = no; path = /";

        window.location.reload();
    }
}

function Badeye() {

    document.cookie = "badeye = yes; path = /";

    document.getElementById("badeye").classList.toggle('visible');
    document.getElementById("tobadeye").classList.toggle('unvisible');

    let size = localStorage.getItem("size");
    let black = localStorage.getItem("black");
    let hide = localStorage.getItem("hide");

    let font_size = document.querySelectorAll("nav, ul, li, div, p, footer");
    for (let i = 0; i < font_size.length; i++) {
        font_size[i].style.fontSize = size;
    }

    if (black) {
        backColor();
        ToggleButtonVal('fon-color', "чёрный", "белый");
    }

    if (hide) {
        ToggleButtonVal('hide-img', 'скрыть', 'показать');
        let images = document.querySelectorAll('img');

        for (let i = 0; i < images.length; i++) {
            images[i].classList.toggle('hide');
        }
    }
}

function getCookie(name) {

    let cookie = " " + document.cookie;
    console.log(cookie);

    let search = " " + name + "=";

    let setStr = null;

    let offset = 0;

    let end = 0;

    if (cookie.length > 0) {
        offset = cookie.indexOf(search);

        if (offset !== -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);

            if (end === -1) {
                end = cookie.length;
            }
            setStr = cookie.substring(offset, end);
        }
    }
    return(setStr);
}

function  ToggleButtonVal(id, first, second) {

    let button = document.getElementById(id);

    let first_val = first;

    // console.log(button);

    if (button.innerHTML === first_val) {

        button.innerHTML = second;

    }
    else {

        button.innerHTML = first_val;

    }

}

function backColor() {
    // let header = document.querySelector('header');
    let body = document.querySelector('body');
    let footer = document.querySelector('footer');

    //  header.classList.toggle('black');
    body.classList.toggle('black');
    footer.classList.toggle('black');
}


//получаем эелементы кнопок и вешаем обработчики onclick

let tb = document.getElementById("tobadeye");
tb.addEventListener("click", Badeye);

let fontNormal = document.getElementById("font_normal");
fontNormal.addEventListener("click", Normal);

let fontMiddle = document.getElementById("font_middle");
fontMiddle.addEventListener("click", Middle);

let fontBig = document.getElementById("font_big");
fontBig.addEventListener("click", Big);

let fonColor = document.getElementById("fon-color");
fonColor.addEventListener("click", Black);

let hideImg = document.getElementById("hide-img");
hideImg.addEventListener("click", Hide);

let back = document.getElementById("back");
back.addEventListener("click", Back);