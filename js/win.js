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
let counterOfWins = 1;
class Win {

    constructor() {
        this.table = [];
        this.winAmount = 5;
        this.winValueDiv = document.querySelector('.arcadeGame__winValue')
    };


    makeTableOfAttributes() {
        this.table = [];
        replaceImg.forEach((el) => {
            this.table.push(el.getAttribute('src'));

        });
    }
    winCheck() {

        if (this.table[0] === this.table[3] && this.table[3] === this.table[6]) {
            this.winValue();
            ++counterOfWins;

        };

        if (this.table[1] === this.table[4] && this.table[4] === this.table[7]) {
            this.winValue();
            ++counterOfWins;

        };

        if (this.table[2] === this.table[5] && this.table[5] === this.table[8]) {
            this.winValue();
            ++counterOfWins;

        };

        if (this.table[0] === this.table[4] && this.table[4] === this.table[8]) {
            this.winValue();
            ++counterOfWins;

        };

        if (this.table[2] === this.table[4] && this.table[4] === this.table[6]) {
            this.winValue();
            ++counterOfWins;

        };
    }

    winValue() {

        this.winValueDiv.textContent = this.winAmount * bet.value() * counterOfWins;
        setTimeout(() => {

            this.winValueDiv.textContent = 0;
            credits.winCredit(this.winAmount * bet.value());
            counterOfWins = 1;
        }, 1000);

    }








}





export {
    Win
}