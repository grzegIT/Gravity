
window.onload = function(){  
    function setClass(yourElement, yourClass){
        var element = document.getElementById(yourElement);
        element.classList.toggle(yourClass); //metoda dodawania i usuwania klasy.
    };
    document.getElementById("hamburger").onclick = function(){
        setClass("nav_menu_id", "visible")};
}