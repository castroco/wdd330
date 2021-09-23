function exercise1() {
    const txtValue = document.querySelector('#txt1').value;
    showText (txtValue, "txtOutput");
}

function exercise2() {
    const value2 = document.querySelector('#number').value;
    let result = sumNumberUntil(value2);
    showText (result, "txtOutput2");
}
function exercise3() {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let result = parseFloat(number1) + parseFloat(number2);
    showText (result, "txtOutput3");
}

const multiply = () => {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let result = parseFloat(number1) * parseFloat(number2);
    showText (result, "txtOutput3");
}

const substract = function() {
    let number1 = document.querySelector('#number1').value;
    let number2 = document.querySelector('#number2').value;
    let result = parseFloat(number1) - parseFloat(number2);
    showText (result, "txtOutput3");
};

// what: is  text to show  where: is the id of the div to show the result
function showText(what, where) {
    const txtOutput = document.querySelector(`#${where}`);
    txtOutput.innerHTML = what;
}

function sumNumberUntil(number) {
    let total = 0;
    for (i=1; i<=number; i++) {
        total = total + i;
    }
    return total;
}
