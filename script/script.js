/* MAIN SCRIPT */

/* JSON data */
function loadBooks() {
    fetch("/asset/data.json").then(res => res.json()).then(data => {
        let h = "";
        for (let p of data)
        {
          h += `<div class="item"><a href="../index/book.html">
                            <img src="${p.bookcover}" class="avatar" alt="book-cover">
                            <div class="content">
                                <div class="nameBook">
                                    <p>${p.name}</p>
                                </div>
                                <div class="nameAuthor">
                                    <p>${p.author}</p>
                                </div>
                            </div>
                        </a>
                        </div>
      `;
            document.getElementById('list').innerHTML = h;
        }
    })
  }

window.onload = function(){
    loadBooks();
}
/* JSON data */
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
    if (window.scrollY > 0){
        logo.classList.remove('hidden-vision');
        navBar.classList.add('fixed');
    } else {
        logo.classList.add('hidden-vision');
        navBar.classList.remove('fixed');
    }
});

/* search up */
const searchContainer = document.getElementById('search-part');
document.getElementById("search-button").onclick = () =>{
    searchContainer.classList.add('show');
}
document.getElementById('search-close-button').onclick = () =>{
    searchContainer.classList.remove('show');
}

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


