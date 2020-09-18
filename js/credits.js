const creditsValue = document.querySelector('.arcadeGame__credit div ');
let creditsNumber = 500;


class Credits {

    valueCredit(bidValue) {
        if (creditsNumber == 0) {
            return creditsValue.textContent = 0;
        }
        creditsValue.textContent -= bidValue;
        creditsNumber = parseInt(creditsValue.textContent)

    }

    winCredit(winCheck) {
        if (winCheck) {
            creditsValue.textContent = (creditsNumber + winCheck);
            creditsNumber = parseInt(creditsValue.textContent);
        }

    }

    valueNumber() {
        return creditsNumber;
    }

}

export {
    Credits
}