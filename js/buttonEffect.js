function clickEffects(button) {

    button.classList.toggle('click')
    setTimeout(() => {
        button.classList.toggle('click')
    }, 400);

}



export { 
    clickEffects,

};