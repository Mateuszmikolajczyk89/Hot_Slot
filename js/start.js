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

    startButton.addEventListener('click', () => {
        console.log(randomTimeAnimation(2));
        rollOne.style.animation = `rolling ${randomTimeAnimation(2)}s linear `
        rollTwo.style.animation = `rolling ${randomTimeAnimation(3)}s 0.5s linear `
        rollThree.style.animation = `rolling ${randomTimeAnimation(4)}s 0.7s linear `
        roll.forEach((el, index) => {
            el.addEventListener('animationend', () => {
                el.style.animation = '';
                setTimeout(() => {}, 1500);
            })
        })
    })
}

export {
    start
};