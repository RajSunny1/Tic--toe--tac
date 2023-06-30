//  var cells=document.querySelectorAll('.game_cell');
//  var gamestatusE1= document.querySelector('.game_status');
//  var gameRestartBtn =document.querySelector('.game_restart');
//  var gameundoBtn =document.querySelector('.game_undo');
//     var gameStarted= false;
//     var cellState=[
//         '','','',
//         '','','',
//         '','','',
//     ];
//     var nextPlayer='X';
//     var winningStates =[
//         [0,1,2],
//         [3,4,5],
//         [6,7,8],
//         [0,3,6],
//         [1,4,7],
//         [2,5,8],
//         [0,4,8],
//         [2,4,6],
//     ];
//     function showNextTurnMsg(){
//         gamestatusE1.innerHTML='Next turn: ' + nextPlayer;
//     }
//     function start(){
//         console.log('game on');
//         gameStarted =true;
//         cellState =[
//             '','','',
//             '','','',
//             '','','',
//         ];
//         nextPlayer ='X';
//         showNextTurnMsg();
//         cells.forEach(function(cell){
//             cell.innerHTML='';
//         });
//     }
//      function isGameover(){
//         for(let i=0; i< winningStates .length; i++ ) {
//             var winningStates =winningStates[i];
//             var x=winningStates[0];
//             var y=winningStates[1];
//             var z=winningStates[2];

//             if(cellState[x]!== '' && cellState[x] === cellState[y] && cellState[y] === cellState[z]) {
//                 gamestatusE1.innerHTML =cellState[x] + 'won' ;
//                 return true;
//             }
//         }
//         if (cellState.includes ('') === false ) {
//             gamestatusE1.innerHTML = 'gameover';
//             return true;
//         }
//         return false;
//      }
    
//   function onCellClick(){
//     console.log('cell was clicked');
//     console.log(this);
//     if(gameStarted){
//         var cell =this;
//         var idx= cell.getAttribute('data-cell-index');
//         console.log(idx);
//         if(cellState[idx] !==''){
//             alert('cell already taken');
//             return;
//         }
//         cellState[idx]=nextPlayer;
//         cell .innerHTML =nextPlayer;

//         if(isGameover()){
//             gameStarted =false;
//             return;
//         }
//         nextPlayer= nextPlayer ==='X'? 'O':'X';
//         showNextTurnMsg();
//     }
//   }
//  gameRestartBtn.addEventListener('click' ,start);
//  cells.forEach(function(cell){
//     cell.addEventListener('click',onCellClick)
//  });
var cells = document.querySelectorAll( '.game_cell' );
var gameStatusEl = document.querySelector( '.game_status' );
var gameRestartBtn = document.querySelector( '.game_restart' );
var gameUndoBtn = document.querySelector( '.game_undo' );

var gameStarted = false;
var cellState = [
    '', '', '',
    '', '', '',
    '', '', '',
];
var nextPlayer = 'X';
var winningStates = [
    [ 0, 1, 2 ],
    [ 3, 4, 5 ],
    [ 6, 7, 8 ],
    [ 0, 3, 6 ],
    [ 1, 4, 7 ],
    [ 2, 5, 8 ],
    [ 0, 4, 8 ],
    [ 2, 4, 6 ],
];

function showNextTurnMsg() {
    gameStatusEl.innerText = 'Next turn: ' + nextPlayer;
}

function start() {
    console.log( 'game on' );
    gameStarted = true;
    cellState = [
        '', '', '',
        '', '', '',
        '', '', '',
    ];
    nextPlayer = 'X';
    showNextTurnMsg();
    cells.forEach(function( cell ) {
        cell.innerText = '';
    });
}

function isGameOver() {
    // has a player won?
    for( let i = 0; i < winningStates.length; i++ ) {
        // winningState = [ 0, 1, 2 ]
        var winningState = winningStates[i];
        var x = winningState[0]; // 0
        var y = winningState[1]; // 1
        var z = winningState[2]; // 2

        if( cellState[x] !== '' && cellState[x] === cellState[y] && cellState[y] === cellState[z] ) {
            gameStatusEl.innerText = cellState[x] + ' won!';
            return true;
        }
    }

    // is game drawn?
    if( cellState.includes( '' ) === false ) {
        gameStatusEl.innerText = 'Game drawn';
        return true;
    }

    return false;
}

function onCellClick() {
    console.log('cell was clicked');
    console.log(this);

    if(gameStarted) {
        var cell = this;
        var idx = cell.getAttribute( 'data-cell-index' );
        console.log( idx );

        if(cellState[idx] !== '') {
            alert('Cell already taken');
            return;
        }

        cellState[idx] = nextPlayer;
        cell.innerText = nextPlayer;

        if(isGameOver()) {
            gameStarted = false;
            return;
        }

        nextPlayer = nextPlayer === 'X' ? 'O' : 'X';
        showNextTurnMsg();
    }
}

gameRestartBtn.addEventListener( 'click', start );

// cells.addEventListener will not work since cells is like an array and not a DOM node (object) itself
cells.forEach(function(cell) {
    // for event handlers (onCellClick), the "this" is the element on which the event (here 'click') occurs
    cell.addEventListener('click', onCellClick)
});
