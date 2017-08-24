var board;
name1=$("#name1").val();
name2=$("#name2").val();

function Player (name,symbol) {
  this.symbol = symbol;
  this.name = name;
}

function ticTacClick(){
  alert(this.id);
  $(this).append('<p>'+player1.symbol+'</p>');
// check active player
// append value to this div
};

$(".col-md-4").on("click",ticTacClick);
// var winConditions = [[0,1,2], [3,4,5], [6,7,8],
//                        [0,3,6], [1,4,7], [2,5,8],
//                        [0,4,8], [6,4,2]]



// below window refers to global, square brackets indicate that activePlayer is a variable
 $("#"+activePlayer+"-score").text(window[activePlayer].name);

activePlayer = (activePlayer === 'player1') ? 'player2' : 'player1';
// ternary - (condition) ? conditionTrueCase : conditionFalseCase;
//ie... whoactive = if(activePlayer is player1) ? 'then' : 'else';

//
// $('#'+ m).click(function(){
// 						turnCount += 1;
// 						if (board[k][l] === "" && !gameOver) {
// 							board[k][l] = currPlayer;
// 							$('#' + m).append('<p>'+currPlayer+'</p>');
// 							checkForWin();
// 							if(currPlayer === "X") {
// 								currPlayer = "O";
// 							} else {
// 								currPlayer = "X";
// 							};
$(document).ready(function() {
  $('#players').submit(function() {
       event.preventDefault();
       name1=$("#name1").val();
       name2=$("#name2").val();
       player1=new Player(name1,'x');
       player2=new Player(name2,'o');

console.log(player1);
});
});
