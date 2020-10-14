// const bid = document.querySelector('.bid');
// const plusButton = document.querySelector('.plus');
// const minusButton = document.querySelector('.minus');
import{DomEl}from './domEl.js';

const bet = [1, 2, 5, 10, 20, 30];
let betIndex = 0;
let bidValue = 1;




export class Bet extends DomEl {
    constructor(){
        super();
        this.DomElements.bid.textContent = bet[betIndex];
    }

    plus = () => {
        if (betIndex === bet.length - 1) return;
        ++betIndex;
        this.DomElements.bid.textContent = bet[betIndex];
        bidValue = bet[betIndex];
    }
     minus = () => {
        if (betIndex === 0) return;
        --betIndex;
        this.DomElements.bid.textContent = bet[betIndex];
        bidValue = bet[betIndex];
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