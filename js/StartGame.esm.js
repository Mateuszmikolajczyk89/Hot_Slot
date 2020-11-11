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

import {
    soundEffects
}from './SoundEffects.esm.js'










 export class StartGame extends DomEl{
    constructor(play) {
        super();
        this.play = play;
        this.inicialize();
    }

    inicialize() {
        this.domElements.creditsValue.textContent = 100;
        bet.betCheck();
        this.domElements.startButton.addEventListener('click', () => {
            if (this.play) {
                this.startRoll();
            };
            
        });
    }



    startRoll() {
        soundEffects.startRollSound();
        this.play = !this.play;
     
        bet.removeBetCheck();
        if (credits.valueNumber() < bet.value()){

            //tutaj blokowanie kręcenia kiedy stawka wieksza od kredytów, bez returna bo blokuje gre
            
        } 
        clickEffects(this.domElements.startButton)
        this.rollAnimation();
        setTimeout(() => {
            imgRepl.replacement();
        }, 550);
        
    }



 

   rollAnimation() {
        
           
    
    const [
        rollOne,
        rollTwo,
        rollThree
    ] = this.domElements.roll;

    this.domElements.roll.forEach((el) => {
        el.addEventListener('animationend', ()=> soundEffects.stopRollBeep());
    })



        credits.valueCredit(bet.value());
        rollOne.style.animation = `rolling ${randomNumber.random(1.3,0.9)}s cubic-bezier(.2, 0.2, 0, 1.3) `;
        rollTwo.style.animation = `rolling ${randomNumber.random(1.7,1.5)}s 0.2s cubic-bezier(.2, 0.2, 0, 1.3) `;
        rollThree.style.animation = `rolling ${randomNumber.random(3.0,2.5)}s 0.4s cubic-bezier(.2, 0.2, 0, 1.3) `;


       
        rollThree.addEventListener('animationend', () =>{
            
            this.domElements.roll.forEach((el) => {
               
                el.style.animation = '';
            })
                win.makeTableOfAttributes();
                win.winCheck();
                bet.betCheck(); 
                soundEffects.stopRollSound();
                this.play = true;
                
            });
          
        }
    }

