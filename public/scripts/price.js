const buttonCalculatePrice = document.querySelector('.calculate');
const buttonReset = document.querySelector('.reset');
const inputPrice = document.querySelector('input');
const textPrice = document.querySelector('.text-price');
const buttonHomePage = document.querySelector('#home-button');

const formatter = (price) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(price);
}
const calculate = () => {
    const price = 200;
    textPrice.textContent = `${formatter(inputPrice.value * price)}`
}

const reset = () => {
    inputPrice.value = "";
    textPrice.textContent = `${formatter(0)}`
}

const homePage = () => {
    return window.location.href = "index.html";
}

buttonReset.addEventListener('click', reset);
buttonCalculatePrice.addEventListener('click', calculate);
buttonHomePage.addEventListener('click', homePage);