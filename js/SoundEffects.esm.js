import {DomEl} from './DomEl.esm.js';


class SoundEffects extends DomEl {
    constructor(){
        super();
        this.winSound = this.domElements.winSound;
        this.winSound.crossOrigin = "anonymous";
        this.endBeep = this.domElements.endBeep;
        this.endBeep.crossOrigin = "anonymous";
        this.rollSound = this.domElements.gameSound;
        this.rollSound.crossOrigin = "anonymous";
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