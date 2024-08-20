window.onload = function() {
    setTimeout(function() {
        let run = document.querySelector('.promoInfo');
        if (run) {
            run.classList.add('show');
        }
    }, 600); // 1000ms = 1s

    ajustarFooter();
};


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
    else if (tab == "tour-lisboa" || tab == "tour-sintra" || tab == "tour-estoril" || tab == "tour-fatima" || tab == "tour-tomar" || tab == "tour-arrabida" || tab == "tour-evora" || tab == "tour-gastronomico"){
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

    const path = window.location.pathname.toLowerCase();
    if (path.endsWith('index.html')) {
        const newUrl = window.location.pathname.replace("index.html", "");
        history.replaceState(null, "", newUrl);
    }
});


function trocarBackground() {
    const heroDiv = document.getElementById('hero');
    const imagens = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg'];
    let index = 0;

    heroDiv.classList.remove('fade-in');
    heroDiv.classList.add('fade-out');
    let regex = /\/EN/;

    setTimeout(() => {
        if(regex.test(window.location.pathname)) {
            heroDiv.style.backgroundImage = `url(../assets/images/home/${imagens[index]})`;
            console.log("teste1");
        } else {
            heroDiv.style.backgroundImage = `url(./assets/images/home/${imagens[index]})`;
            console.log("teste2");
        }

        index = (index + 1) % imagens.length;

        heroDiv.classList.remove('fade-out');
        heroDiv.classList.add('fade-in');
    }, 400); // Tempo da transição (deve ser igual ao tempo definido em CSS!!)
}


function ajustarFooter() {
    const navList = document.querySelector('.nav.col-md-5');

    if (navList) {
        if (window.innerWidth < 1200) {
            navList.classList.remove('justify-content-end');
        } 
        else {
            navList.classList.add('justify-content-end');
        }
    }
}

// Verifica se está na página principal
let run = document.querySelector('.promoInfo');

if (run) {
    setInterval(trocarBackground, 8000);
    trocarBackground();    
}

window.addEventListener('load', ajustarFooter);
window.addEventListener('resize', ajustarFooter);