import {
    randomNumber
} from './RandomNumber.esm.js';

import {
    DomEl
} from './DomEl.esm.js';




const imgSlot = ["./img/blackberry.png", "./img/cherry.jpg", "./img/lemon.png", "./img/clover.png", "./img/emerland.png", "./img/seven.png"];



 class ImgRepl extends DomEl{

    replacement() {
        const randomPicture = [];
     

        this.domElements.replaceEnd.forEach((el) => {
           el.setAttribute('src', imgSlot[Math.floor(randomNumber.random(randomNumber.random(6)))]);
           randomPicture.push(el.getAttribute('src'));
        })
        this.domElements.replaceImg.forEach((el,index) => {
            el.setAttribute('src', randomPicture[index]);
        })

        this.domElements.endline.forEach((el,index) => {
            el.setAttribute('src', randomPicture[index]);
        })
    }

}

export const imgRepl = new ImgRepl();


