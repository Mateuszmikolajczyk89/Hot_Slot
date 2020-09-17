import {
    replaceImg
} from './imgReplacement.js'


class Win {

    constructor() {
        this.table = [];
        this.winAmount = 10;
    }


    makeTableOfAttributes() {
        this.table = [];
        replaceImg.forEach((el) => {
            this.table.push(el.getAttribute('src'))

        });
    }
    winCheck() {
        if (this.table[0] === this.table[3] && this.table[3] === this.table[6]) return this.winAmount;

        if (this.table[1] === this.table[4] && this.table[4] === this.table[7]) return this.winAmount;

        if (this.table[2] === this.table[5] && this.table[5] === this.table[8]) return this.winAmount;





    }





}





export {
    Win
}