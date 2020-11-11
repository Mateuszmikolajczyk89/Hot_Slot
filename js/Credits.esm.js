import {
    DomEl
} from './DomEl.esm.js';

import {
    soundEffects
} from './SoundEffects.esm.js';




let creditsNumber = 100;


export class Credits extends DomEl {

    valueCredit(bidValue) {
        if (creditsNumber == 0) {
            return this.domElements.creditsValue.textContent = 0;
        }
        this.domElements.creditsValue.textContent -= bidValue;
        creditsNumber = parseInt(this.domElements.creditsValue.textContent);

    }

    winCredit(winCheck) {
       setTimeout(() => {
        this.counterOfCredits = 0;
        if (winCheck) {
            const clear = setInterval(() => {
                this.domElements.creditsValue.textContent = (creditsNumber + ++this.counterOfCredits);
            
                if (this.counterOfCredits === winCheck) {
                    clearInterval(clear);
                    this.counterOfCredits = 0;
                    soundEffects.stopWinSound();
                }
            }, 25);

            creditsNumber = parseInt(this.domElements.creditsValue.textContent);
            
        } else return;
      }, 1000);

    }

    valueNumber() {
        return creditsNumber;
    }

}

export const credits = new Credits();