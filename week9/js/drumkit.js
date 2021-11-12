
pressedKeys = [];

function addNewKey(numberOfKey) {
    newKey = {
        keyNumber: numberOfKey,
        timesPressed: 1
    }
    pressedKeys.push(newKey);
}

function addPressedKeys(numberOfKey) {
    let timesPressed = findKey(numberOfKey);
    return timesPressed;
}

function findKey(keyNumber) {
    let numberFound = false;
    let result = 0;
    pressedKeys.some(key => { 
        if (key.keyNumber == keyNumber) { 
            result = key.timesPressed + 1;
            key.timesPressed = result;
            numberFound = true;
            return result; 
        }
    } );
    if (numberFound == false) {
        addNewKey(keyNumber);
        result = 1;
    }
    
    return result;
}

function transitionBack(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener('keydown', function(e) {
    var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    //key.classList.add('pressed');
    console.dir(key);
    let numberOfTimePressed = addPressedKeys(e.keyCode);
    let movePX = 10*numberOfTimePressed;
    key.style.transform = `translateY(${movePX}px)`;
    if (numberOfTimePressed >= 10) {
        key.classList.remove('pressed');
    }
});


var keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', transitionBack));