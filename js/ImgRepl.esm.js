import {
    randomNumber
} from './RandomNumber.esm.js';

import {
    DomEl
} from './DomEl.esm.js';




const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/lemon.png", "./img/clover.png", "./img/emerland.png", "./img/seven.png"];



 class ImgRepl extends DomEl{

    replacement() {
        const atrr = [];
     

        this.DomElements.replaceEnd.forEach((el) => {
           el.setAttribute('src', imgSlot[Math.floor(randomNumber.random(randomNumber.random(2)))]);
            atrr.push(el.getAttribute('src'));
        })
        this.DomElements.replaceImg.forEach((el,index) => {
            el.setAttribute('src', atrr[index]);
        })

        this.DomElements.endline.forEach((el,index) => {
            el.setAttribute('src', atrr[index]);
        })
    }

}

export const imgRepl = new ImgRepl();


