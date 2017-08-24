var board;
name1=$("#name1").val();
name2=$("#name2").val();
var player1;
var player2;
var activePlayer;
function Player (name,symbol) {
  this.symbol = symbol;
  this.name = name;
}
function switchem(player1,player2){
if(activePlayer===player1){
  activePlayer=player2
} else {activePlayer=player1}
//activePlayer = (activePlayer === 'player1') ? 'player2' : 'player1';
//console.log(activePlayer.symbol);
return activePlayer;
}

function ticTacClick(){
switchem(player1,player2);
$(this).append('<p>'+activePlayer.symbol+'</p>');

};
$(".col-md-4").on("click",ticTacClick);

$(document).ready(function() {
  $('#players').submit(function() {
       event.preventDefault();
       name1=$("#name1").val();
       name2=$("#name2").val();
       player1=new Player(name1,'x');
       player2=new Player(name2,'o');
       activePlayer=player2;
       console.log(activePlayer+"playerswitchingstuff");
});
});
