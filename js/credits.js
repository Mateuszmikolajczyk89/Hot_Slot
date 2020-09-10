const creditsValue = document.querySelector('.arcadeGame__credit div ');
let creditsNumber = 500

function credits(bidValue) {

    creditsValue.textContent -= bidValue;
    creditsNumber = parseInt(creditsValue.textContent);
    if (creditsNumber <= 0) {
        return creditsValue.textContent = 0;
    }

}

function valueCredit() {
    return creditsNumber;

}
export {
    credits,
    valueCredit
};