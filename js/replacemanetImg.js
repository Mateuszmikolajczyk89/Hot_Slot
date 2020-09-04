import {
    randomNumber
} from './randomNumber.js'

const replaceImg = document.querySelectorAll('.replace_begin');
const repalceEnd = document.querySelectorAll('.replace_end')

const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/clover.png", "./img/emerland.png", "./img/lemon.png", "./img/seven.png"]


function replacement() {
    const atrr = [];
    replaceImg.forEach((el) => {
        el.setAttribute('src', imgSlot[Math.floor(randomNumber(6))])
        atrr.push(el.getAttribute('src'));
    })

    repalceEnd.forEach((el, index) => {
        el.setAttribute('src', atrr[index]);
    })
}

export {
    replacement
}