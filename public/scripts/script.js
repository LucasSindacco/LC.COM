const scrollEffect = () => {
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('header .container');
        const updownControl = document.querySelector('.updown');
        const scroll = this.scrollY;
        if (scroll > 10) {
            navbar.classList.add('active');
            updownControl.classList.add("active");
        } else {
            navbar.classList.remove('active');
            updownControl.classList.remove("active");
        }
    });
}
scrollEffect();

const buttonUpDown = document.querySelector('#button-updown');
const upDownPage = () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    })
}

const responsiveButtonNav = document.querySelector("#responsiveNavButton");
const responsiveNavbar = document.querySelector('#responsive-nav');

const openNavbar = () => {
    responsiveNavbar.classList.toggle('active');
}

const buttonCloseNavbar = document.querySelector('#close');
const closeNavbar = () => {
    responsiveNavbar.classList.remove('active');
}

const buttonSettings = document.querySelector('.buttonSettings');
const boxSettings = document.querySelector('.box-settings');
const buttonPower = document.querySelector('#buttonPower');
const buttonPlayEffects = document.querySelector("#button-play");

const configurationsPage = () => {
    // All Animations Website
    boxSettings.classList.toggle('active');
}

const removeBoxSettings = () => {
    setTimeout(() => {
        boxSettings.classList.remove('active');
    }, 3000);
}

const buttonChecked = (click) => {
    const hyperLinks = document.querySelectorAll('.social-medias > ul > li');
    if (click === 'stop') {
        window.alert("Animações desligadas");
        clearInterval(timerText);
        clearInterval(imagesAnimations);
        clearInterval(changeColors);
        removeBoxSettings();
    }
    if (click === 'play') {
        window.alert("Animações ligadas");
        setInterval(textServicesAnimation, 100);
        setInterval(changeIntervalColor, 500);
        removeBoxSettings();
    }
}

const shutDownEffects = () => {
    buttonChecked('stop');
}

const playEffects = () => {
    buttonChecked('play')
}

var indexText = 0;
const textServicesAnimation = () => {
    const uiux = document.querySelector('.ui-ux');
    const frontEnd = document.querySelector('.front-end');
    const webDesigner = document.querySelector('.web-design');
    const servicesSubtittles = document.querySelectorAll('.services > p');
    const textServices = [
        'Ui-UX',
        'WebDesign',
        'Front-End',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel arcu nisi. Vivamus ipsum diam, pulvinar vel leo in.'
    ];

    uiux.textContent = textServices[0].slice(0, indexText);
    webDesigner.textContent = textServices[1].slice(0, indexText);
    frontEnd.textContent = textServices[2].slice(0, indexText);
    servicesSubtittles.forEach((subtitles) => {
        subtitles.textContent = textServices[3].slice(0, indexText);
    });
    indexText++;
    if (indexText === 125) {
        indexText = 0;
    }
}

const timerText = setInterval(textServicesAnimation, 100);

const buttonDoubt = document.querySelector('#button-doubt-services');

const modalDoubtOpen = () => {
    const modalDoubt = document.querySelector('.modal-doubt');
    modalDoubt.classList.toggle('active');
}

const allImages = document.querySelectorAll('img');

const mouseHover = () => {
    allImages.forEach((images) => {
        images.addEventListener('mouseover', () => {
            images.src = './public/images/' + parseInt(Math.random() * allImages.length) + '.png';
        })
    })
}
const technologysText = document.querySelectorAll('[data-target]');

const buttonViewSkills = document.querySelector('#view-technology');

const viewSkills = () => {
    technologysText.forEach((skillsTechnology) => {
        document.querySelector(skillsTechnology.dataset.target).classList.add("active");
        animationProgressBar("javascript", "40%", 250);
        animationProgressBar("html", "70%", 300);
        animationProgressBar("css", "70%", 150);
        animationProgressBar("bootstrap", "50%", 200);
        animationProgressBar("csharp", "40%", 210);
    });
}

const progressBar = document.querySelectorAll('.progressBar');
const animationProgressBar = (itens, porcentage, speed) => {
    setInterval(() => {
        const element = document.getElementById(itens);
        const progress = element.querySelector('.progressBar');
        progress.style.width = porcentage;
    }, speed)
}

const changeProgessBarColor = () => {
    const teste = document.querySelectorAll('.progressBar');
    teste.forEach((kakak) => {
        kakak.style.backgroundColor = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
    })
};

const changeIntervalColor = () => {
    changeProgessBarColor();
}


const feedback = () => {
    const modalFeedback = document.querySelector('.modal-feedback');
    modalFeedback.classList.toggle('active');
}

const feedbacks = document.querySelectorAll('.feedbacks > i');
const btnOpenFeedback = document.querySelector('.userFeedback');
const textFeedback = document.querySelector('.feedback');
var scoreWebsite = 0;

const greatFeedback = () => {
    textFeedback.classList.add('active');
    textFeedback.style.color = "#67FF6D";
    scoreWebsite = scoreWebsite + 1;
    textFeedback.textContent = "Obrigado que gostou 💚";
}

const rageFeedback = () => {
    textFeedback.classList.add('active');
    textFeedback.textContent = "Farei melhor na próxima vez 😟"
    textFeedback.style.color = "#FF6767";
}

const buttonDonate = document.querySelector('.button-donate');
const donate = () => {
    alert("Pix para doação: web.designluckas@gmail.com");
}


let loadPorcentage = 0;
const load = () => {
    const textLoad = [
        'Carregando algumas coisas...',
        'Nos dê um minuto...',
        'Estamos quase lá...',
        'Quase tudo pronto...',
        'Tudo pronto. Vamos lá!!!'
    ]
    const porcentage = document.querySelector('.load-progress > p');
    const textPorcentage = document.querySelector('.load > span');
    const buttonContract = document.querySelectorAll('button');
    const load = document.querySelector('.load');
    buttonContract.forEach((buttons) => {
        buttons.addEventListener('click', () => {
            load.classList.add('active');
            const timeLoad = setInterval(() => {
                loadPorcentage++;
                porcentage.textContent = `${loadPorcentage}%`;
                switch (loadPorcentage) {
                    case 25:
                        textPorcentage.textContent = textLoad[1];
                        break;
                    case 50:
                        textPorcentage.textContent = textLoad[2];
                        break;
                    case 75:
                        textPorcentage.textContent = textLoad[3];
                        break;
                    case 100:
                        textPorcentage.textContent = textLoad[4];
                        clearInterval(timeLoad)
                        setInterval(() => {
                            window.location.href = "contract.html";
                        }, 1000);
                        break
                }
            }, 50);
        });
    });
}

load();

// Animations Active
mouseHover();
const changeColors = setInterval(changeIntervalColor, 500);

// Clicks 
buttonCloseNavbar.addEventListener('click', closeNavbar);
buttonViewSkills.addEventListener('click', viewSkills);
buttonUpDown.addEventListener('click', upDownPage);
buttonDonate.addEventListener('click', donate)
feedbacks[0].addEventListener('click', greatFeedback);
feedbacks[1].addEventListener('click', rageFeedback);
btnOpenFeedback.addEventListener('click', feedback);
responsiveButtonNav.addEventListener('click', openNavbar)
buttonDoubt.addEventListener('click', modalDoubtOpen)
buttonPlayEffects.addEventListener('click', playEffects);
buttonPower.addEventListener('click', shutDownEffects);
buttonSettings.addEventListener('click', configurationsPage);
