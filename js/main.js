import data from '../fixtures/files.js'

const postForm = document.getElementById('app')

data.forEach(post => {
    const html = `
        <li class="post">
            <img class="albumCover" src="${post.imgPath}" alt="album cover">
            <div class="post-description">
                <h2 class="title">${post.title}</h2>
                <p class="description">${post.description}</p>
                <iframe class="player" style="border-radius:12px" src="${post.spotify}" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe> 
            </div>
        </li>
    `
  postForm.innerHTML += html
})


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    document.querySelector('.logoText').onmouseover = event => {  
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
    .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 10)]
        })
        .join("");
        if (iteration >= event.target.dataset.value.length){ 
            clearInterval(interval);
        }
    iteration += 1 / 3;
    }, 20);
}
           

function myFunction() {
    const bodyEl = document.body;
    bodyEl.classList.toggle("light-mode");
    const navEl = document.querySelector('.nav-link');
    navEl.classList.toggle("light-mode");
    const greyEl = document.querySelector('.grey');
    navEl.classList.toggle("lightModeForGrey");
}