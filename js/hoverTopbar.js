var login = document.querySelector(".mymarketplace");
var pop = document.querySelector(".popover-content");
var sell = document.querySelector(".start-selling");
var popSell = document.querySelector(".popover2-content");

var catItemSubmenu = document.querySelectorAll(".cat-submenu");
var triangles = document.querySelectorAll(".cat-popover-triangle");
var contentTransition = document.querySelectorAll(".popover3-content");

var tile = document.querySelectorAll(".tile-regular");
var wish = document.querySelectorAll(".label-wishlist");

tile[0].addEventListener("mouseenter", function () {
    wish[0].classList.add("visivel4");
});
tile[0].addEventListener("mouseleave", function () {
    wish[0].classList.remove("visivel4");
});
tile[1].addEventListener("mouseenter", function () {
    wish[1].classList.add("visivel4");
});
tile[1].addEventListener("mouseleave", function () {
    wish[1].classList.remove("visivel4");
});
tile[2].addEventListener("mouseenter", function () {
    wish[2].classList.add("visivel4");
});
tile[2].addEventListener("mouseleave", function () {
    wish[2].classList.remove("visivel4");
});
tile[3].addEventListener("mouseenter", function () {
    wish[3].classList.add("visivel4");
});
tile[3].addEventListener("mouseleave", function () {
    wish[3].classList.remove("visivel4");
});
tile[4].addEventListener("mouseenter", function () {
    wish[4].classList.add("visivel4");
});
tile[4].addEventListener("mouseleave", function () {
    wish[4].classList.remove("visivel4");
});
tile[5].addEventListener("mouseenter", function () {
    wish[5].classList.add("visivel4");
});
tile[5].addEventListener("mouseleave", function () {
    wish[5].classList.remove("visivel4");
});

catItemSubmenu[0].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "51px";
    });
    //triangle.style.left = "51px";
    contentTransition[0].classList.add("visivel3");
    contentTransition[0].style.height = "280px";
    //contentTransition.style.transformOrigin = "51px 0px";
});

setTimeout(() => {
    catItemSubmenu[0].addEventListener("mouseleave",function () {
        contentTransition[0].classList.remove("visivel3");
    });
}, 500);

catItemSubmenu[1].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "178px";
    });
    //triangle.style.left = "51px";
    contentTransition[1].classList.add("visivel3");
    contentTransition[1].style.height = "230px";
    //contentTransition.style.transformOrigin = "51px 0px";
});

setTimeout(() => {
    catItemSubmenu[1].addEventListener("mouseleave",function () {
        contentTransition[1].classList.remove("visivel3");
    });
}, 500);

catItemSubmenu[2].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "315px";
    });
    //triangle.style.left = "51px";
    contentTransition[2].classList.add("visivel3");
    contentTransition[2].style.height = "300px";
    //contentTransition.style.transformOrigin = "51px 0px";
});
setTimeout(() => {
    catItemSubmenu[2].addEventListener("mouseleave",function () {
        contentTransition[2].classList.remove("visivel3");
    });
}, 500);

catItemSubmenu[3].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "443px";
    });
    //triangle.style.left = "51px";
    contentTransition[3].classList.add("visivel3");
    contentTransition[3].style.height = "80px";
    //contentTransition.style.transformOrigin = "51px 0px";
});

setTimeout(() => {
    catItemSubmenu[3].addEventListener("mouseleave",function () {
        contentTransition[3].classList.remove("visivel3");
    });
}, 500);

catItemSubmenu[4].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "580px";
    });
    //triangle.style.left = "51px";
    contentTransition[4].classList.add("visivel3");
    contentTransition[4].style.height = "80px";
    //contentTransition.style.transformOrigin = "51px 0px";
});

setTimeout(() => {
    catItemSubmenu[4].addEventListener("mouseleave",function () {
        contentTransition[4].classList.remove("visivel3");
    });
}, 500);

catItemSubmenu[5].addEventListener("mouseenter", function () {
    triangles.forEach(triangle => {
        triangle.style.left = "701px";
    });
    //triangle.style.left = "51px";
    contentTransition[5].classList.add("visivel3");
    contentTransition[5].style.height = "80px";
    //contentTransition.style.transformOrigin = "51px 0px";
});

setTimeout(() => {
    catItemSubmenu[5].addEventListener("mouseleave",function () {
        contentTransition[5].classList.remove("visivel3");
    });
}, 500);



login.addEventListener("mouseenter", visivel, false);

pop.addEventListener("mouseleave", invisivel, false);

function visivel() {
     pop.classList.add("visivel");
}
function invisivel() {
    pop.classList.remove("visivel"); 
}

sell.addEventListener("mouseenter", visivelSell, false);
popSell.addEventListener("mouseleave", invisivelSell, false);

function visivelSell() {
    popSell.classList.add("visivel2");
  
}
function invisivelSell() {
    popSell.classList.remove("visivel2"); 
}

function wishFunction() {
    var popup = document.getElementById("wpopup");
    var popup1 = document.getElementById("wpopup1");
    var popup2 = document.getElementById("wpopup2");
    var popup3 = document.getElementById("wpopup3");
    var popup4 = document.getElementById("wpopup4");
    var popup5 = document.getElementById("wpopup5");
    popup.classList.toggle("wish-popup-show");
    popup1.classList.toggle("wish-popup-show");
    popup2.classList.toggle("wish-popup-show");
    popup3.classList.toggle("wish-popup-show");
    popup4.classList.toggle("wish-popup-show");
    popup5.classList.toggle("wish-popup-show");
}







