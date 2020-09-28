const bid = document.querySelector('.bid');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const bet = [1, 5, 10, 50, 100];
let betIndex = 0;
bid.textContent = bet[betIndex];
let bidValue = 1;

const plus = () => {
    if (betIndex === bet.length - 1) return;
    ++betIndex;
    bid.textContent = bet[betIndex]
    bidValue = bet[betIndex]
}
const minus = () => {
    if (betIndex === 0) return;
    --betIndex;
    bid.textContent = bet[betIndex]
    bidValue = bet[betIndex]
}


class Bet {



    betCheck() {

        plusButton.addEventListener('click', plus)

        minusButton.addEventListener('click', minus)

    }
    removeBetCheck() {
        plusButton.removeEventListener('click', plus)

        minusButton.removeEventListener('click', minus)
    }

    value() {
        return bidValue;
    }
}
export {
    Bet
}