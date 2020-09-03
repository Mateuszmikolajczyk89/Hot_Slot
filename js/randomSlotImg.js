import {
    randomNumber
} from './randomNumber.js'

const replaceImg = document.querySelectorAll('.replace_begin');
const repalceEnd = document.querySelectorAll('.replace_end')

const imgSlot = [{
        img: "./img/blackberry.jpg"
    },
    {
        img: "./img/cherry.jpg"
    },
    {
        img: "./img/clover.png"
    },
    {
        img: "./img/emerland.png"
    },
    {
        img: "./img/lemon.png"
    },
    {
        img: "./img/seven.png"
    }
]


function replacement() {
    const atrr = [];
    replaceImg.forEach((el) => {
        el.setAttribute('src', imgSlot[Math.floor(randomNumber(6))].img)
        atrr.push(el.getAttribute('src'));
    })

    repalceEnd.forEach((el, index) => {
        el.setAttribute('src', atrr[index]);
    })
}

export {
    replacement
}