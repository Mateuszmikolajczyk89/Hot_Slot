const bid = document.querySelector('.bid');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
const bet = [1, 5, 10, 50, 100];
let betIndex = 0;
bid.textContent = bet[betIndex];
let bidValue = 1;

function betCheck() {

    plusButton.addEventListener('click', function () {

        if (betIndex === bet.length - 1) return;
        ++betIndex;
        bid.textContent = bet[betIndex]
        bidValue = bet[betIndex]
        console.log(betIndex);
    })

    minusButton.addEventListener('click', function () {

        if (betIndex === 0) return;
        --betIndex;
        bid.textContent = bet[betIndex]
        bidValue = bet[betIndex]
        console.log(betIndex);
    })

}

function value() {
    return bidValue;
}

export {
    betCheck,
    value

}

// class bid {
//     constructor() {




//     }
// }