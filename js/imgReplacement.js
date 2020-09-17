import {
    RandomNumber
} from './randomNumber.js'

import {
    Win
} from './win.js'

const win = new Win();
const randomNumber = new RandomNumber();
const replaceImg = document.querySelectorAll('.replace_begin');
const repalceEnd = document.querySelectorAll('.replace_end')
const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/clover.png", "./img/emerland.png", "./img/lemon.png", "./img/seven.png"]


class ImgRepl {

    replacement() {
        const atrr = [];
        replaceImg.forEach((el) => {
            el.setAttribute('src', imgSlot[Math.floor(randomNumber.random(6))])
            atrr.push(el.getAttribute('src'));
        })
        repalceEnd.forEach((el, index) => {
            el.setAttribute('src', atrr[index]);
        })
        win.makeTableOfAttributes();
        win.winCheck;
    }



}




export {
    ImgRepl,
    replaceImg
    


}