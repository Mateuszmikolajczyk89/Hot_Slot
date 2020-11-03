import {
    RandomNumber
} from './RandomNumber.esm.js';



const randomNumber = new RandomNumber();
const roll = document.querySelectorAll('.arcadeGame__roll')

const [
    rollOne,
    rollTwo,
    rollThree
] = roll



function rollAnimation() {
    rollOne.style.animation = `rolling ${randomNumber.random(1.9,1.5)}s cubic-bezier(.2, 0.2, 0, 1.3) `;
    rollTwo.style.animation = `rolling ${randomNumber.random(2.3,2.1)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `;
    rollThree.style.animation = `rolling ${randomNumber.random(3.3,3.1)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `;


    rollThree.addEventListener('animationend', () => {

        roll.forEach((el) => {
            el.style.animation = '';
        })
        


    });
}


export {
    rollAnimation,
    
};