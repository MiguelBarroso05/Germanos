const heroDiv = document.getElementById('hero');
const imagens = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];
let index = 0;

// Função para trocar o background
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

// Verificar se está na página principal
if (window.location.pathname === '/') {
    setInterval(trocarBackground, 8000);
    trocarBackground();
}


document.addEventListener('DOMContentLoaded', function () {
    // Obter o parâmetro da URL
    const urlParams = new URLSearchParams(window.location.search);
    const tabId = urlParams.get('tab');

    if (tabId) {
        // Encontrar o botão de aba que ativa a aba desejada
        const tabTrigger = document.querySelector(`button#${tabId}`);

        if (tabTrigger) {
            // Criar uma instância de Tab do Bootstrap e exibir
            const tab = new bootstrap.Tab(tabTrigger);
            tab.show();
        } else {
            console.error(`Aba com ID '${tabId}' não encontrada.`);
        }
    }
});