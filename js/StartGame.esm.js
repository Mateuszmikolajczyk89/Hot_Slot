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
    credits,
} from './Credits.esm.js'

import{
    win
} from './Win.esm.js'

import {
    randomNumber
} from './RandomNumber.esm.js';










 export class StartGame extends DomEl{
    constructor(play) {
        super();
        this.play = play;
        this.inicialize();
    }

    inicialize() {
        this.DomElements.creditsValue.textContent = 100;
        bet.betCheck();
        this.DomElements.startButton.addEventListener('click', () => {
            if (this.play) {
                this.startRoll();
            };
            
        });
    }



    startRoll() {
        this.play = !this.play;
     
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()) return;
        clickEffects(this.DomElements.startButton)
        this.rollAnimation();
        setTimeout(() => {
            imgRepl.replacement();
        }, 700);
        
    }



 

   rollAnimation() {
    const [
        rollOne,
        rollTwo,
        rollThree
    ] = this.DomElements.roll;

        credits.valueCredit(bet.value());
        rollOne.style.animation = `rolling ${randomNumber.random(1.9,1.5)}s cubic-bezier(.2, 0.2, 0, 1.3) `;
        rollTwo.style.animation = `rolling ${randomNumber.random(2.3,2.1)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `;
        rollThree.style.animation = `rolling ${randomNumber.random(3.6,3.2)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `;
    
    
        rollThree.addEventListener('animationend', () =>{
    
            this.DomElements.roll.forEach((el) => {
                el.style.animation = '';
            })
                win.makeTableOfAttributes();
                win.winCheck();
                bet.betCheck(); 
                this.play = true;
                console.log('listener na koniec animacji');
                
            });
          
        }
    }

