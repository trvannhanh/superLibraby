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