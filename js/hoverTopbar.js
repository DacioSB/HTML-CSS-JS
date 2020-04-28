var login = document.querySelector(".mymarketplace");
var pop = document.querySelector(".popover-content");
var sell = document.querySelector(".start-selling");
var popSell = document.querySelector(".popover2-content");


login.addEventListener("mouseenter", visivel, false);
setTimeout(() => {
    pop.addEventListener("mouseleave", invisivel, false);
}, 1000);
function visivel() {
    setTimeout(() => {
        pop.classList.add("visivel");
    }, 200);   
}
function invisivel() {
    pop.classList.remove("visivel"); 
}

sell.addEventListener("mouseenter", visivelSell, false);
setTimeout(() => {
    popSell.addEventListener("mouseleave", invisivelSell, false);
}, 1000);
function visivelSell() {
    setTimeout(() => {
        popSell.classList.add("visivel2");
    }, 200);   
}
function invisivelSell() {
    popSell.classList.remove("visivel2"); 
}







