const mobilemenu = document.querySelector('#mobileMenu');
const hamburgerBTTN = document.querySelector('#hamburgerButton');
const xbutton = document.querySelector('#xSymbol');

hamburgerBTTN.addEventListener('click', function (evt) {
    mobilemenu.style.maxHeight = '100%';
});

xbutton.addEventListener('click', function (evt) {
    mobilemenu.style.maxHeight = '0';
})