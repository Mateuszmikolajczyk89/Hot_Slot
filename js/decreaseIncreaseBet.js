const bet = [1, 5, 10, 50, 100];
const bid = document.querySelector('.bid');
const plusButton = document.querySelector('.plus');
const minusButton = document.querySelector('.minus');
let betIndex = 0;
bid.textContent = bet[betIndex]

function betCheck() {


    plusButton.addEventListener('click', function () {
        ++betIndex;
        if (betIndex === bet.length) betIndex = 0;
        bid.textContent = bet[betIndex]
        console.log(bid.textContent);
    })

    minusButton.addEventListener('click', function () {
        if (betIndex === 0) betIndex = bet.length;
        --betIndex;
        bid.textContent = bet[betIndex]
        console.log(bid.textContent);

    })
    console.log(bid.textContent);
}
export {
    betCheck
}