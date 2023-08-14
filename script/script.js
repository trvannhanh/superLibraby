/* MAIN SCRIPT */

/* dark mode script */

var icon = document.getElementById("dark-mode-icon");
icon.onclick = function (){
    document.body.classList.toggle("dark-theme");
}

/* dark mode script end */

/* sidebar script */
const sideBar = document.getElementById('sidebar');
document.getElementById("sidebar-button").onclick = () =>{
    sideBar.classList.add('show');
}
document.getElementById('close-button').onclick = () =>{
    sideBar.classList.remove('show');
}

/* sidebar script end */

/* header&navbar script*/
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
/* header&navbar script end*/

/* book script */
document.getElementById("next").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft += widthItem;
}
document.getElementById("prev").onclick = function(){
    const widthItem = document.querySelector('.item').offsetWidth;
    document.getElementById("formList").scrollLeft -= widthItem;
}
/* book script end */

/* MAIN SCRIPT END */