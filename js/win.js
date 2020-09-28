import {
    replaceImg
} from './imgReplacement.js';

import {
    Bet
} from './bet.js';

import {
    Credits
} from "./credits.js";


const credits = new Credits();
const bet = new Bet();
let counterOfWins = 0;
class Win {

    constructor() {

        this.table = [];
        this.winAmount = 3;
        this.winValueDiv = document.querySelector('.arcadeGame__winValue');
        this.oldTime = 0;
    };


    makeTableOfAttributes() {
        this.table = [];
        replaceImg.forEach((el) => {
            this.table.push(el.getAttribute('src'));

        });
    }
    winCheck() {

        if (this.table[0] === this.table[3] && this.table[3] === this.table[6]) {
            ++counterOfWins;
            this.winValue();


        };

        if (this.table[1] === this.table[4] && this.table[4] === this.table[7]) {
            ++counterOfWins;
            this.winValue();


        };

        if (this.table[2] === this.table[5] && this.table[5] === this.table[8]) {
            ++counterOfWins;
            this.winValue();


        };

        if (this.table[0] === this.table[4] && this.table[4] === this.table[8]) {
            ++counterOfWins;
            this.winValue();


        };

        if (this.table[2] === this.table[4] && this.table[4] === this.table[6]) {
            ++counterOfWins;
            this.winValue();


        };
    }

    winValue() {
        this.winValueDiv.textContent = this.winAmount * bet.value() * counterOfWins;
        this.counter = this.winValueDiv.textContent;


        setTimeout(() => {

            const clears = setInterval(() => {
                this.winValueDiv.textContent = --this.counter;
                if (this.counter <= 0) {
                    clearInterval(clears)
                    this.winValueDiv.textContent = 0;
                }
            }, 30);



            credits.winCredit(this.winAmount * bet.value() * counterOfWins);
            counterOfWins = 0;
        }, 1000);
        
    }








}





export {
    Win
}