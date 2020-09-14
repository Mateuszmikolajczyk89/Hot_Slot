import {
    RandomNumber
} from './randomNumber.js';

import {
    ImgRepl
} from './imgReplacement.js'

import {
    clickEffects,
} from './buttonEffect.js';

import {
    value
} from './bet.js';

import {
    Credits
} from './credits.js'

const imgRepl = new ImgRepl();
const randomNumber = new RandomNumber();
const wallet = new Credits();
const roll = document.querySelectorAll('.arcadeGame__roll')
const startButton = document.querySelector('.arcadeGame__start');
const [
    rollOne,
    rollTwo,
    rollThree
] = roll

function startGame() {





    function startRoll() {
        if (wallet.valueNumber() < value()) return;
        startButton.removeEventListener('click', startRoll);
        clickEffects(startButton)


        setTimeout(imgRepl.replacement, 620);
        rollOne.style.animation = `rolling ${randomNumber.random(2.1,1.2)}s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollTwo.style.animation = `rolling ${randomNumber.random(2.3,1.3)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollThree.style.animation = `rolling ${randomNumber.random(2.7,2.6)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `





        roll.forEach((el) => {
            roll[2].addEventListener('animationend', () => {
                el.style.animation = '';

                setTimeout(() => {


                    startButton.addEventListener('click', startRoll);

                }, 500);
            })
        })
        wallet.valueCredit(value());
    }




    startButton.addEventListener('click', startRoll);











}






export {
    startGame,
    startButton

};