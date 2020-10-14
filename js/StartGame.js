import {
    DomEl
} from './domEl.js'

import {
    ImgRepl
} from './imgRepl.js'

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
        this.DomElements.creditsValue.textContent = 200;
        bet.betCheck();
        this.DomElements.startButton.addEventListener('click', () => {
            if (this.play) {
                this.startRoll()
                this.play = !this.play;
            };
        });


    }













}