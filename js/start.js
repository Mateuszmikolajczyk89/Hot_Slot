import {
    randomTimeAnimation
} from './randomTimeAnimation.js';

function start() {
    const roll = document.querySelectorAll('.arcadeGame__roll')
    const startButton = document.querySelector('.start');
    const [
        rollOne,
        rollTwo,
        rollThree
    ] = roll

    function startRoll() {
        rollOne.style.animation = `rolling ${randomTimeAnimation(2)}s linear `
        rollTwo.style.animation = `rolling ${randomTimeAnimation(3)}s 0.5s linear `
        rollThree.style.animation = `rolling ${randomTimeAnimation(4)}s 0.7s linear `
        startButton.removeEventListener('click', startRoll);
        roll.forEach((el, index) => {
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