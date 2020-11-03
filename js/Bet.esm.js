// const bid = document.querySelector('.bid');
// const plusButton = document.querySelector('.plus');
// const minusButton = document.querySelector('.minus');
import{DomEl}from './DomEl.esm.js';



let bidValue = 1;




 class Bet extends DomEl {
    betIndex = 0;
    bet = [1, 2, 5, 10, 20, 30];
    constructor(){
        super();
        this.DomElements.bid.textContent = this.bet[this.betIndex];
    }

    plus = () => {
        if (this.betIndex === this.bet.length - 1) return;
        ++this.betIndex;
        this.DomElements.bid.textContent = this.bet[this.betIndex];
        bidValue = this.bet[this.betIndex];
    }
     minus = () => {
        if (this.betIndex === 0) return;
        --this.betIndex;
        this.DomElements.bid.textContent = this.bet[this.betIndex];
        bidValue = this.bet[this.betIndex];
    }




    betCheck() {

        this.DomElements.plusButton.addEventListener('click', this.plus);

        this.DomElements.minusButton.addEventListener('click', this.minus);

    }
    removeBetCheck() {
        this.DomElements.plusButton.removeEventListener('click', this.plus);

        this.DomElements.minusButton.removeEventListener('click', this.minus);
    }

    value() {
        return bidValue;
    }
}

export const bet = new Bet();