import Auth from './auth.js';

const mylogin = new Auth();

const form = document.forms['login'];
form.addEventListener('submit', tryToLog, false);

function tryToLog(event) {
    event.preventDefault();
    mylogin.login();
}

/*makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
})*/

/*const answer = makeRequest('login', 'POST', {
    password: 'user1',
    email: 'user1@email.com'
});*/

//console.log("answer: ", answer);