import {
    DomEl
} from './DomEl.esm.js'

import {
    bet,
} from './Bet.esm.js';

import {
    Credits
} from "./Credits.esm.js";

import{
    soundEffects
} from './SoundEffects.esm.js';


let counterOfWins = [];


class Win extends DomEl {

    constructor() {
        super();
        this.table = [];
        this.winValueDiv = this.domElements.winValueDiv;
    };


    makeTableOfAttributes() {
        this.table = [];
        this.domElements.replaceImg.forEach((el) => {
            this.table.push(el.getAttribute('src'));

        });
    }
    winCheck() {

        if((this.table[0] === this.table[3] && this.table[3] === this.table[6])){
            if(this.table[0] === "./img/blackberry.png") {

                    counterOfWins.push(1);
                
            }  else if(this.table[0] === "./img/cherry.jpg") {

                    counterOfWins.push(2);

            }  else if(this.table[0] === "./img/lemon.png") {
               
                    counterOfWins.push(3);

            }  else if(this.table[0] === "./img/clover.png") {

                    counterOfWins.push(5);

            }    else if(this.table[0] === "./img/emerland.png") {
                
                    counterOfWins.push(7);

            }   else if(this.table[0] === "./img/seven.png") {
                 
                    counterOfWins.push(20);

            }

        }

        if((this.table[1] === this.table[4] && this.table[4] === this.table[7])){
            if(this.table[1] === "./img/blackberry.png") {

                    counterOfWins.push(1);

            }  else if(this.table[1] === "./img/cherry.jpg") {

                    counterOfWins.push(2);

            }  else if(this.table[1] === "./img/lemon.png") {

                    counterOfWins.push(3);

            }  else if(this.table[1] === "./img/clover.png") {

                    counterOfWins.push(5);

            }    else if(this.table[1] === "./img/emerland.png") {

                    counterOfWins.push(7);

            }   else if(this.table[1] === "./img/seven.png") {

                    counterOfWins.push(20);

            }
        }

        if((this.table[2] === this.table[5] && this.table[5] === this.table[8])){
            if(this.table[2] === "./img/blackberry.png") {

                    counterOfWins.push(1);

            }  else if(this.table[2] === "./img/cherry.jpg") {

                    counterOfWins.push(2);

            }  else if(this.table[2] === "./img/lemon.png") {

                    counterOfWins.push(3);

            }  else if(this.table[2] === "./img/clover.png") {

                    counterOfWins.push(5);

            }    else if(this.table[2] === "./img/emerland.png") {

                    counterOfWins.push(7);

            }   else if(this.table[2] === "./img/seven.png") {

                    counterOfWins.push(20);
            }

        }

        if((this.table[0] === this.table[4] && this.table[4] === this.table[8])){
            if(this.table[0] === "./img/blackberry.png") {

                    counterOfWins.push(1);

            }  else if(this.table[0] === "./img/cherry.jpg") {

                    counterOfWins.push(2);

            }  else if(this.table[0] === "./img/lemon.png") {

                    counterOfWins.push(3);

            }  else if(this.table[0] === "./img/clover.png") {

                    counterOfWins.push(5);

            }    else if(this.table[0] === "./img/emerland.png") {

                    counterOfWins.push(7);

            }   else if(this.table[0] === "./img/seven.png") {

                    counterOfWins.push(20);
            }

        }


        if((this.table[2] === this.table[4] && this.table[4] === this.table[6])){
            if(this.table[2] === "./img/blackberry.png") {

                    counterOfWins.push(1);

            }  else if(this.table[2] === "./img/cherry.jpg") {

                    counterOfWins.push(2);

            }  else if(this.table[2] === "./img/lemon.png") {

                    counterOfWins.push(3);

            }  else if(this.table[2] === "./img/clover.png") {

                    counterOfWins.push(5);

            }    else if(this.table[2] === "./img/emerland.png") {

                    counterOfWins.push(7);

            }   else if(this.table[2] === "./img/seven.png") {

                    counterOfWins.push(20);
            }  

        }
            if(counterOfWins[0]) {
            counterOfWins = counterOfWins.reduce((sum, value)=> sum += value);
            this.winValue(counterOfWins);
        }
            counterOfWins = [];
    };

    winValue(counterOfWins) {
        console.log(counterOfWins);
        soundEffects.startWinSound();
        this.winValueDiv.textContent = bet.value() * counterOfWins;
        this.win = this.winValueDiv.textContent;
        this.counter = this.winValueDiv.textContent;

        setTimeout(() => {

            const clears = setInterval(() => {
                this.winValueDiv.textContent = --this.counter;
                if (this.counter <= 0) {
                    clearInterval(clears);
                    this.winValueDiv.textContent = 0;

                }
            }, 30);






        }, 1000);
        new Credits().winCredit(bet.value() * counterOfWins);
    }

}

export const win = new Win();