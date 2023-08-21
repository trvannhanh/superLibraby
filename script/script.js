/* MAIN SCRIPT */
/* SCROLL to top */
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
})




/* JSON books data */
function loadBooks() {
    fetch("/asset/books.json").then(res => res.json()).then(data => {
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

function loadNews() {
    fetch("/asset/news.json").then(res => res.json()).then(data => {
        let n = "";
        for (let q of data)
        {
          n += `<div class="new">
                    <div class="new-image">
                        <img src="${q.newscover}" alt="">
                    </div>
                    <div class="new-description">
                        <p class="new-title">${q.title}</p>
                        <p class="time">${q.day} ${q.month} ${q.year}</p>
                    </div>
                </div>
            `;
            document.getElementById('news').innerHTML = n;
        }
    })
}

window.onload = function(){
    loadBooks();
    loadNews();
}

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

const readMoreText = document.querySelector('.read-more-text');
const readMoreButton = document.querySelector('.read-more-button');
const readLessButton = document.querySelector('.read-less-button');


readMoreButton.onclick = () =>{
    readMoreText.classList.add('show');
    readMoreButton.classList.add('hidden');
    readLessButton.classList.add('show');
}

readLessButton.onclick = () =>{
    readMoreText.classList.remove('show');
    readMoreButton.classList.remove('hidden');
    readLessButton.classList.remove('show');
}
/* book script end */

/* MAIN SCRIPT END */


