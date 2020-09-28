import {
    RandomNumber
} from './randomNumber.js'


const randomNumber = new RandomNumber();
const roll = document.querySelectorAll('.arcadeGame__roll')

const [
    rollOne,
    rollTwo,
    rollThree
] = roll


function rollAnimation() {
    rollOne.style.animation = `rolling ${randomNumber.random(2.1,1.2)}s cubic-bezier(.2, 0.2, 0, 1.3) `;
    rollTwo.style.animation = `rolling ${randomNumber.random(2.3,1.3)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `;
    rollThree.style.animation = `rolling ${randomNumber.random(2.8,2.7)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `;


    rollThree.addEventListener('animationend', () => {

        roll.forEach((el) => {
            el.style.animation = '';
        })



    });
}


export {
    rollAnimation,

};