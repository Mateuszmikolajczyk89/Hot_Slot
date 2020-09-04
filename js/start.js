import {
    randomNumber
} from './randomNumber.js';

import {
    replacement
} from './replacemanetImg.js'

import {
    clickEffects,
} from './buttonEffect.js';

function start() {
    const roll = document.querySelectorAll('.arcadeGame__roll')
    const startButton = document.querySelector('.start');
    const [
        rollOne,
        rollTwo,
        rollThree
    ] = roll


    function startRoll() {
        clickEffects(startButton)

        setTimeout(replacement, 500);
        rollOne.style.animation = `rolling ${randomNumber(3.5,1.2)}s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollTwo.style.animation = `rolling ${randomNumber(4,1.2)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `
        rollThree.style.animation = `rolling ${randomNumber(4.5,1.2)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `




        startButton.removeEventListener('click', startRoll);

        roll.forEach((el) => {
            el.addEventListener('animationend', () => {
                el.style.animation = '';

                setTimeout(() => {

                    startButton.addEventListener('click', startRoll)

                }, 3000);
            })
        })
    }

    startButton.addEventListener('click', startRoll)





}






export {
    start

};