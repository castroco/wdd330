
let player1Turn = true;
let player2Turn = false;
const winArray = [[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 4, 6], [2, 5, 8], [3, 4, 5], [6, 7, 8]]


// document.querySelector('#addPlayers').addEventListener('click', addPlayers());

function addPlayers() {
    const player1 = document.querySelector('#player1name').value;
    const player2 = document.querySelector('#player2name').value;
};

function checkWin(excel, index) {
    console.log(index)
}

function addMark(event) {
    const square = event.target
    if (player1Turn) {
        square.innerText = 'X';
        player1Turn = false;
        player2Turn = true;
    }
    else if (player2Turn) {
        square.innerText = 'O';
        player2Turn = false;
        player1Turn = true;
    };
    console.log(parseInt(square.getAttribute('id')));
};

function resetBoard() {
   const tdList = document.querySelectorAll("td");
   for (let i=0; i < tdList.length; i++) {
       tdList[i].textContent = '';
   };
   player1Turn = true;
   player2Turn = false;
};
document.querySelectorAll('.square').forEach(square => square.addEventListener('click', addMark));

