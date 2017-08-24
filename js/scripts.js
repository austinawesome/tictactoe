var board;
name1=$("#name1").val();
name2=$("#name2").val();
var player1;
var player2;
var activePlayer;
var value;
var row;
var placement;
function Player (name,symbol,value) {
  this.symbol = symbol;
  this.name = name;
  this.value = value;
}
function switchem(player1,player2){
if(activePlayer===player1){
  activePlayer=player2
} else {activePlayer=player1}
//activePlayer = (activePlayer === 'player1') ? 'player2' : 'player1';
//console.log(activePlayer.symbol);
return activePlayer;
}
var winConditions = [[a0,a1,a2],[b0,b1,b2],[c0,c1,c2]]//[a0,b0,c0],[a1,c1,b1],[a2,c2,b2],[a0,b1,c2],[c0,b1,a2];

function winConditionChecker() {

// for()
// ($(this).attr('value'));
// }
if( 9=== row) {
  alert("win");
}
}

function ticTacClick(){ //disable those already clicked
switchem(player1,player2);
$(this).append('<p>'+activePlayer.symbol+'</p>');
this.setAttribute("value", activePlayer.value);
console.log(parseInt($(this).attr('value')));
var placement=($(this).attr('id'));
winConditions[placement]=(parseInt($(this).attr('value')));
// getValues();

// row=row+
console.log(($('#a0').attr('value')))


winConditionChecker();
};
$(".col-md-4").on("click",ticTacClick);

$(document).ready(function() {
  $('#players').submit(function() {
       event.preventDefault();
       name1=$("#name1").val();
       name2=$("#name2").val();
       player1=new Player(name1,'x',5);
       player2=new Player(name2,'o',3);
       activePlayer=player2;

});
});
