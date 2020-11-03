import {
    DomEl
} from './DomEl.esm.js'

import {
    imgRepl
} from './ImgRepl.esm.js'

import {
    clickEffects,
} from './buttonEffect.js';

import {
    bet
} from './Bet.esm.js';

import {
    credits
} from './Credits.esm.js'

import {
    win
} from './Win.esm.js'

import {
    rollAnimation
} from './roll.js'










 export class StartGame extends DomEl{
    constructor(play) {
        super();
        this.play = play;
        this.inicialize();
    }
    startRoll() {
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()) return;

        clickEffects(this.DomElements.startButton)

        rollAnimation();


        setTimeout(() => {
            imgRepl.replacement();
        }, 700);

        setTimeout(() => {
            win.makeTableOfAttributes();
            bet.betCheck();
            win.winCheck()
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

