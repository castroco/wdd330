import Auth from './auth.js';

const mylogin = new Auth();

const form = document.forms['login'];
form.addEventListener('submit', tryToLog, false);

function tryToLog(event) {
    event.preventDefault();
    mylogin.login();
}
