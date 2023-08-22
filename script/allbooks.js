function loadBooks() {
    fetch("/superLibrary/asset/books.json").then(res => res.json()).then(data => {
        let b = "";
        let h = "";
        for (let p of data)
        {
            h += `<div class="item"><a href="/superLibrary/index/book.html">
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
            b += `<div class="arrivals_card"><a href="/superLibrary/index/book.html">
                    <div class="arrivals_image">
                        <img src="${p.bookcover}">
                    </div>
                    <div class="arrivals_tag">
                        <p>${p.name}</p>
                        <div class="arrivals_icon">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                        <p "class="arrivals_author">${p.author}</p>
                    </div>
                    </a>
                </div>
            `;
            document.getElementById('list').innerHTML = h;
            document.querySelector('.arrivals_box').innerHTML = b;
        }
    })
}
function loadReviews() {
    fetch("/superLibrary/asset/reviews.json").then(res => res.json()).then(data => {
       let r="";
        for (let p of data)
        {
            r += `  <div class="review_card">
                        <i class="fa-solid fa-quote-right"></i>
                        <div class="card_top">
                            <img src="${p.avatar}">
                        </div>
                        <div class="card">
                            <h2>${p.name}</h2>
                            <p>${p.review}
                            </p>
                            <div class="review_icon">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star-half-stroke"></i>
                            </div>
                        </div>
                    </div>
            `;

           document.querySelector('.review_box').innerHTML = r;
        }
    })
}



window.onload = function(){
    loadBooks();
    loadReviews();
}
