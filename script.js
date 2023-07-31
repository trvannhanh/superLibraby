document.getElementById("next").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
}
document.getElementById("prev").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem;
}



const navBar = document.getElementById('nav-bar-container');
const logo = document.querySelector('#nav-bar-container .logo-fullscreen');
window.addEventListener('scroll', function(){
    const scrollY = window.scrollY;
    if (scrollY === 0) {
        navBar.classList.remove('fixed');
        logo.style.visibility = "hidden";
    } else{
        navBar.classList.add('fixed');
        logo.style.visibility = "inherit";
    }
});