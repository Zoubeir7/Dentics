

let small_menu = document.querySelector('.toggle_menu')
let menu = document.querySelector('.menu')
small_menu.onclick=function(){
    small_menu.classList.toggle('active');
    menu.classList.toggle('responsive');
}
document.getElementById("button").addEventListener("click", function() {
    window.location.href = "login.html";
});
