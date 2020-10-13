import {
    RandomNumber
} from './RandomNumber.js';

import {
    DomEl
} from './DomEl.js';



const randomNumber = new RandomNumber();
const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/lemon.png", "./img/clover.png", "./img/emerland.png", "./img/seven.png"];


export class ImgRepl extends DomEl{

    replacement() {
        const atrr = [];
        this.DomElements.replaceImg.forEach((el) => {
            el.setAttribute('src', imgSlot[Math.floor(randomNumber.random(randomNumber.random(6)))]);
            atrr.push(el.getAttribute('src'));
        })
        this.DomElements.replaceEnd.forEach((el, index) => {
            el.setAttribute('src', atrr[index]);
        })

    }

}




