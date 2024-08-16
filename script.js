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
    }, 700); // Tempo da transição (deve ser igual ao tempo definido em CSS!!)
}

// Verifica se está na página principal
if (window.location.pathname === '/') {
    setInterval(trocarBackground, 8000);
    trocarBackground();
}


document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const tab = urlParams.get('tab');
    const tabButton = document.querySelector(`#${tab}-tab`);
    const tabContent = document.querySelector(`#${tab}`);
    const sideButtonRemove = document.querySelector(`#list-servicos-list`);
    const sideContentRemove = document.querySelector(`#servicos`);

    if (tab == "servico-rodoviario" || tab == "servico-maritimo" || tab == "servico-aereo" || tab == "servico-concierge" || tab == "servico-golf") {
        const tabButtonRemove = document.querySelector(`#servico-rodoviario-tab`);
        const tabContentRemove = document.querySelector(`#servico-rodoviario`);

        tabButtonRemove.classList.remove('show', 'active');
        tabButtonRemove.setAttribute('aria-selected', 'false');
        tabContentRemove.classList.remove('show', 'active');

        tabButton.classList.add('show', 'active');
        tabButton.setAttribute('aria-selected', 'true');
        tabContent.classList.add('show', 'active');
    }
    else if (tab == "transfer-vip"){
        const sideButton = document.querySelector(`#list-transfers-list`);
        const sideContent = document.querySelector(`#transfers`);

        sideButtonRemove.classList.remove('show', 'active');
        sideButtonRemove.setAttribute('aria-selected', 'false');
        sideContentRemove.classList.remove('show', 'active');

        sideButton.classList.add('show', 'active');
        sideButton.setAttribute('aria-selected', 'true');
        sideContent.classList.add('show', 'active');

        tabButton.classList.add('show', 'active');
        tabButton.setAttribute('aria-selected', 'true');
        tabContent.classList.add('show', 'active');
    }
    else if (tab == "tour-lisboa" || tab == "tour-sintra" || tab == "tour-estoril" || tab == "tour-fatima" || tab == "tour-tomar" || tab == "tour-arrabida" || tab == "tour-evora"){
        const tabButtonRemove = document.querySelector(`#tour-lisboa-tab`);
        const tabContentRemove = document.querySelector(`#tour-lisboa`);
        const sideButton = document.querySelector(`#list-tours-list`);
        const sideContent = document.querySelector(`#tours`);

        sideButtonRemove.classList.remove('show', 'active');
        sideButtonRemove.setAttribute('aria-selected', 'false');
        sideContentRemove.classList.remove('show', 'active');

        sideButton.classList.add('show', 'active');
        sideButton.setAttribute('aria-selected', 'true');
        sideContent.classList.add('show', 'active');

        tabButtonRemove.classList.remove('show', 'active');
        tabButtonRemove.setAttribute('aria-selected', 'false');
        tabContentRemove.classList.remove('show', 'active');

        tabButton.classList.add('show', 'active');
        tabButton.setAttribute('aria-selected', 'true');
        tabContent.classList.add('show', 'active');
    }

    if (window.location.pathname.endsWith("index.html")) {
        const newUrl = window.location.pathname.replace("index.html", "");
    
        history.replaceState(null, "", newUrl);
    }
});