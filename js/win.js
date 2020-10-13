import {
    DomEl
} from './DomEl.js'

import {
    Bet
} from './Bet.js';

import {
    Credits
} from "./Credits.js";


const credits = new Credits();
const bet = new Bet();
let counterOfWins = 0;
export class Win extends DomEl {

    constructor() {
        super();
        this.table = [];
        this.winValueDiv = document.querySelector('.arcadeGame__winValue');
    };


    makeTableOfAttributes() {
        this.table = [];
        this.DomElements.replaceImg.forEach((el) => {
            this.table.push(el.getAttribute('src'));

        });
    }
    winCheck() {

        if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/blackberry.png")) {
            for (let i = 0; i < 2; i++) {
                ++counterOfWins;
            };



        } else if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/cherry.jpg")) {
            for (let i = 0; i < 3; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/lemon.png")) {
            for (let i = 0; i < 4; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/clover.png")) {
            for (let i = 0; i < 6; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/emerland.png")) {
            for (let i = 0; i < 8; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[3] && this.table[3] === this.table[6]) && (this.table[0] === "./img/seven.png")) {
            for (let i = 0; i < 20; i++) {
                ++counterOfWins;
            };

        };



        if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/blackberry.png")) {
            for (let i = 0; i < 2; i++) {
                ++counterOfWins;
            };



        } else if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/cherry.jpg")) {
            for (let i = 0; i < 3; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/lemon.png")) {
            for (let i = 0; i < 4; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/clover.png")) {
            for (let i = 0; i < 6; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/emerland.png")) {
            for (let i = 0; i < 8; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[1] === this.table[4] && this.table[4] === this.table[7]) && (this.table[1] === "./img/seven.png")) {
            for (let i = 0; i < 20; i++) {
                ++counterOfWins;
            };


        };

        if ((this.table[2] === this.table[5] && this.table[5] === this.table[8]) && (this.table[2] === "./img/blackberry.png")) {
            for (let i = 0; i < 2; i++) {
                ++counterOfWins;
            };



        } else if ((this.table[2] === this.table[5] && this.table[5] === this.table[8]) && (this.table[2] === "./img/cherry.jpg")) {
            for (let i = 0; i < 3; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[5] && this.table[5] === this.table[8]) && (this.table[2] === "./img/lemon.png")) {
            for (let i = 0; i < 4; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[5] && this.table[5] === this.table[8]) && (this.table[2] === "./img/clover.png")) {
            for (let i = 0; i < 6; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[5] && this.table[5] === this.table[8]) && (this.table[2] === "./img/emerland.png")) {
            for (let i = 0; i < 8; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[5] && this.table[5] === this.table[8] && (this.table[2]) === "./img/seven.png")) {
            for (let i = 0; i < 20; i++) {
                ++counterOfWins;
            };


        };

        if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/blackberry.png")) {
            for (let i = 0; i < 2; i++) {
                ++counterOfWins;
            };



        } else if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/cherry.jpg")) {
            for (let i = 0; i < 3; i++) {
                ++counterOfWins;
            };

        } else if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/lemon.png")) {
            for (let i = 0; i < 4; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/clover.png")) {
            for (let i = 0; i < 6; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/emerland.png")) {
            for (let i = 0; i < 8; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[0] === this.table[4] && this.table[4] === this.table[8]) && (this.table[0] === "./img/seven.png")) {
            for (let i = 0; i < 20; i++) {
                ++counterOfWins;
            };


        };


        if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/blackberry.png")) {
            for (let i = 0; i < 2; i++) {
                ++counterOfWins;
            };



        } else if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/cherry.jpg")) {
            for (let i = 0; i < 3; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/lemon.png")) {
            for (let i = 0; i < 4; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/clover.png")) {
            for (let i = 0; i < 6; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/emerland.png")) {
            for (let i = 0; i < 8; i++) {
                ++counterOfWins;
            };


        } else if ((this.table[2] === this.table[4] && this.table[4] === this.table[6]) && (this.table[2] === "./img/seven.png")) {
            for (let i = 0; i < 20; i++) {
                ++counterOfWins;
            };


        };
        this.winValue();
    };

    winValue() {
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



            credits.winCredit(bet.value() * counterOfWins);

            counterOfWins = 0;
        }, 1000);

    }








}