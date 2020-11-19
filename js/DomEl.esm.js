export class DomEl {

    domElements = {
        startButton: document.querySelector('.arcadeGame__start'),
        roll: document.querySelectorAll('.arcadeGame__roll'),
        replaceImg: document.querySelectorAll('.replace_begin'),
        replaceEnd: document.querySelectorAll('.replace_end'),
        endline: document.querySelectorAll('.end_line'),
        creditsValue :document.querySelector('.arcadeGame__credit div '),
        bid: document.querySelector('.bid'),
        plusButton: document.querySelector('.plus'),
        minusButton: document.querySelector('.minus'),
        winValueDiv: document.querySelector('.arcadeGame__winValue'),
        winSound: document.querySelector('.winSound'),
        gameSound: document.querySelector('.gameSound'),
        endBeep: document.querySelector('.endBeep'),
    };

};