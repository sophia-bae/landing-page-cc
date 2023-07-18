let hamburger = document.querySelector(".bars");
let navBar = document.querySelector(".nav-bar");

hamburger.onclick = function(){
    navBar.classList.toggle("active");
}
