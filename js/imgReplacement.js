import {
    RandomNumber
} from './randomNumber.js'




const randomNumber = new RandomNumber();
const replaceImg = document.querySelectorAll('.replace_begin');
const repalceEnd = document.querySelectorAll('.replace_end')
const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/lemon.png", "./img/clover.png", "./img/emerland.png", "./img/seven.png"]


class ImgRepl {

    replacement() {
        const atrr = [];
        replaceImg.forEach((el) => {
            el.setAttribute('src', imgSlot[Math.floor(randomNumber.random(randomNumber.random(2)))])
            atrr.push(el.getAttribute('src'));
        })
        repalceEnd.forEach((el, index) => {
            el.setAttribute('src', atrr[index]);
        })

    }

}




export {
    ImgRepl,
    replaceImg



}