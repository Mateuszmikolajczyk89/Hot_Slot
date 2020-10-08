import {
    ImgRepl
} from './ImgRepl.js'

import {
    clickEffects,
} from './buttonEffect.js';

import {
    Bet
} from './Bet.js';

import {
    Credits
} from './Credits.js'

import {
    Win
} from './Win.js'

import {
    rollAnimation
} from './roll.js'







const imgRepl = new ImgRepl();
const credits = new Credits();
const bet = new Bet();
const win = new Win();
const startButton = document.querySelector('.arcadeGame__start');



export class StartGame {
    constructor(flag) {
        this.flag = flag;

    }
    startRoll() {
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()) return;

        clickEffects(startButton)

        rollAnimation();


        setTimeout(() => {
            imgRepl.replacement();
        }, 600);

        setTimeout(() => {
            win.makeTableOfAttributes();
            win.winCheck()
            this.flag = !this.flag;
            new Bet().betCheck();

        }, 5200);

        credits.valueCredit(bet.value());


    }



    inicialize() {
        new Bet().betCheck();
        startButton.addEventListener('click', () => {
            if (this.flag) {
                this.startRoll()
                this.flag = !this.flag;
            };
        });


    }













}