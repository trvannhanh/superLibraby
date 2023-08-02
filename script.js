document.getElementById("next").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
}
document.getElementById("prev").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem;
}



const navBar = document.getElementById('nav-bar-container');
const sticky = navBar.offsetTop;
const logo = document.querySelector('#nav-bar-container .logo-fullscreen');
window.addEventListener('scroll', function(){
    if (window.scrollY >= sticky){
        logo.style.visibility = "inherit";
        navBar.classList.add('fixed');
    } else {
        logo.style.visibility = "hidden";
        navBar.classList.remove('fixed');
    }
});