const creditsValue = document.querySelector('.arcadeGame__credit div ');
let creditsNumber = 500;
import {
    Bet
} from './bet.js';

class Credits {

    valueCredit(bidValue) {
        if (creditsNumber == 0) {
            return creditsValue.textContent = 0;
        }
        creditsValue.textContent -= bidValue;
        creditsNumber = parseInt(creditsValue.textContent)

    }

    winCredit(winCheck) {
        this.counterOfCredits = 0
        if (winCheck) {
            const clear = setInterval(() => {
                creditsValue.textContent = (creditsNumber + ++this.counterOfCredits);
                if (this.counterOfCredits === winCheck) {
                    clearInterval(clear)
                    this.counterOfCredits = 0;
                }
            }, 25);
            
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