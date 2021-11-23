import QuakesController from "./QuakesController.js";

//adding dates to the web page at the beggining, today and 30 days back
let today = new Date();
document.querySelector("#endtime").value = formatDate(today);
substractDays(today, 30);
document.querySelector("#starttime").value = formatDate(today);
document.querySelector("#radius").value = 100;


const myQuakesController = new QuakesController('#quakeList');
myQuakesController.init();

const form = document.forms['radiusForm'];
form.addEventListener('submit', processRadius, false);



function substractDays(dateToChange, daysToSubstract = 1) {
    let dateInMiliseconds = dateToChange.getTime();
    dateInMiliseconds = dateInMiliseconds - (84400000 * daysToSubstract);
    dateToChange.setTime(dateInMiliseconds);
}

function processRadius(event) {
    event.preventDefault();
    myQuakesController.init();
}

function formatDate(today) {
    let dd = String(today.getDate()).padStart(2, "0");
    let mm = String(today.getMonth() + 1).padStart(2, "0");
    let yyyy = today.getFullYear();
    today = yyyy + "-" + mm + "-" + dd;
    return today;
}
