
import{DomEl}from './DomEl.esm.js';



export let bidValue = 1;




 class Bet extends DomEl {
    betIndex = 0;
    bet = [1, 2, 5, 10, 20, 30];
    constructor(){
        super();
        this.domElements.bid.textContent = this.bet[this.betIndex];
    }

    plus = () => {
        if (this.betIndex === this.bet.length - 1) return;
        ++this.betIndex;
        this.domElements.bid.textContent = this.bet[this.betIndex];
        bidValue = this.bet[this.betIndex];
    }
     minus = () => {
        if (this.betIndex === 0) return;
        --this.betIndex;
        this.domElements.bid.textContent = this.bet[this.betIndex];
        bidValue = this.bet[this.betIndex];
    }




    betCheck() {

        this.domElements.plusButton.addEventListener('click', this.plus);

        this.domElements.minusButton.addEventListener('click', this.minus);

    }
    removeBetCheck() {
        this.domElements.plusButton.removeEventListener('click', this.plus);

        this.domElements.minusButton.removeEventListener('click', this.minus);
    }

    value() {
        return bidValue;
    }
}

export const bet = new Bet();