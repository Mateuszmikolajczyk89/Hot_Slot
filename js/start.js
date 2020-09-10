import {
    randomNumber
} from './randomNumber.js';

import {
    replacement
} from './replacemanetImg.js'

import {
    clickEffects,
} from './buttonEffect.js';

import {
    value


} from './bet.js';


import {
    credits,
    valueCredit
} from './credits.js'


const roll = document.querySelectorAll('.arcadeGame__roll')
const startButton = document.querySelector('.arcadeGame__start');
const [
    rollOne,
    rollTwo,
    rollThree
] = roll

function startGame() {




    function startRoll() {
        // console.log(betIndex);




        startButton.removeEventListener('click', startRoll);
        clickEffects(startButton)


        setTimeout(replacement, 700);
        rollOne.style.animation = `rolling ${randomNumber(3.5,1.2)}s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollTwo.style.animation = `rolling ${randomNumber(4,1.2)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollThree.style.animation = `rolling ${randomNumber(4.5,1.3)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `






        roll.forEach((el) => {
            el.addEventListener('animationend', () => {
                el.style.animation = '';

                setTimeout(() => {

                    startButton.addEventListener('click', startRoll)

                }, 2000);
            })
        })

    }

    startButton.addEventListener('click', () => {
        credits(value());
        startRoll();

    })






}






export {
    startGame,
    startButton

};