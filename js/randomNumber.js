function randomNumber(toHowMany, minimum = 0) {

    return Math.random() * toHowMany + minimum;

};

export {
    randomNumber
};