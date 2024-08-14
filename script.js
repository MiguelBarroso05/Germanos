const heroDiv = document.getElementById('hero');
const imagens = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];
let index = 0;


function trocarBackground() {
    heroDiv.classList.remove('fade-in');
    heroDiv.classList.add('fade-out');

    setTimeout(() => {
        heroDiv.style.backgroundImage = `url(./assets/images/home/${imagens[index]})`;
        index = (index + 1) % imagens.length;

        heroDiv.classList.remove('fade-out');
        heroDiv.classList.add('fade-in');
    }, 700); // Tempo da transição (deve ser igual ao tempo definido em CSS)
}

setInterval(trocarBackground, 8000);
trocarBackground()