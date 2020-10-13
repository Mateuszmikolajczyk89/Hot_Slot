import {
    DomEl
} from './DomEl.js'

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




export class StartGame extends DomEl{
    constructor(play) {
        super();
        this.play = play;

    }
    startRoll() {
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()) return;

        clickEffects(this.DomElements.startButton)

        rollAnimation();


        setTimeout(() => {
            imgRepl.replacement();
        }, 600);

        setTimeout(() => {
            win.makeTableOfAttributes();
            win.winCheck()
            bet.betCheck();
            this.play = !this.play;
        }, 5200);

        credits.valueCredit(bet.value());


    }



    inicialize() {
        bet.betCheck();
        this.DomElements.startButton.addEventListener('click', () => {
            if (this.play) {
                this.startRoll()
                this.play = !this.play;
            };
        });


    }













}