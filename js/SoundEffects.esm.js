import {DomEl} from './DomEl.esm.js';


class SoundEffects extends DomEl {
    constructor(){
        super();
        this.winSound = new Audio('../sounds/winSound.mp3');
        this.endBeep = new Audio('../sounds/endBeep.wav');
        this.rollSound = new Audio('../sounds/gameSound.wav');
        this.rollSound.loop = true;
    }

    startRollSound(){
        this.rollSound.play();
    }

    stopRollSound(){
        this.rollSound.pause();
        this.rollSound.load();
    }

    stopRollBeep(){
        this.endBeep.play();
    }

    startWinSound(){
        this.winSound.play();
    }

    stopWinSound(){
        this.winSound.pause();
        this.winSound.load();
    }

} 

export const soundEffects = new SoundEffects();