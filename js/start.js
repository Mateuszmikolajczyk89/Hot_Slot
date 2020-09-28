import {
    ImgRepl
} from './imgReplacement.js'

import {
    clickEffects,
} from './buttonEffect.js';

import {
    Bet
} from './bet.js';

import {
    Credits
} from './credits.js'

import {
    Win
} from './win.js'

import {
    rollAnimation
} from './roll.js'







const imgRepl = new ImgRepl();
const credits = new Credits();
const bet = new Bet();
const win = new Win();
const startButton = document.querySelector('.arcadeGame__start');


function startGame() {

    new Bet().betCheck();



    function startRoll() {
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()) return;
        startButton.removeEventListener('click', startRoll);
        clickEffects(startButton)

        rollAnimation();


        setTimeout(() => {
            imgRepl.replacement();
        }, 600);





        setTimeout(() => {
            win.makeTableOfAttributes();
            win.winCheck()

            startButton.addEventListener('click', startRoll);
            
        }, 5200);




        credits.valueCredit(bet.value());


    }




    startButton.addEventListener('click', startRoll);











}






export {
    startGame,
    startButton

};