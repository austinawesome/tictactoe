var board;
name1=$("#name1").val();
name2=$("#name2").val();
var player1;
var player2;
var activePlayer;
var value;


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
winConditions = [a0,a1,a2],[b0,b1,b2],[c0,c1,c2],[a0,b0,c0],[a1,c1,b1],[a2,c2,b2],[a0,b1,c2],[c0,b1,a2];

// function winConditionChecker {
// for()
// ($(this).attr('value'));
// }

function getValues() {
  var row='a';
  for(i=0;i<=4;i++){
    for(i=0;i<=3;i++) {
      current=row.concat(i);
      console.log("current as name"+current);
      current=row[i];
      current=$(current).attr('value');
      console.log("current as value"+current);
    } if(row==='a') {
      row='b';
    } else if(row==='b') {
      row='c';
    } else {
      break;
    }
  }
};
function ticTacClick(){ //disable those already clicked
switchem(player1,player2);
$(this).append('<p>'+activePlayer.symbol+'</p>');
this.setAttribute("value", activePlayer.value);
console.log(parseInt($(this).attr('value')));
getValues();
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
