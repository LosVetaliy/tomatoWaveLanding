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
