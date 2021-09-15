  var dice1 = (Math.floor(Math.random()*6)+1);
  var dice2 = (Math.round(Math.random()*5)+1);
  var dice3 = (Math.floor(Math.random()*6)+1);
  var dice4 = (Math.round(Math.random()*5)+1);
  var dice5 = (Math.floor(Math.random()*6)+1);
  var dice6 = (Math.round(Math.random()*5)+1);
  var dice7 = (Math.floor(Math.random()*6)+1);
  var dice8 = (Math.round(Math.random()*5)+1);

function getNumber (number) {
  var dice;
  switch (number) {
    case 1:
      dice = "one";
      break;
    case 2:
      dice = "two"
      break;
    case 3:
      dice = "three"
      break;
    case 4:
      dice = "four"
      break;
    case 5:
      dice = "five"
      break;
    case 6:
      dice = "six"
      break;
    default:
      dice = "Sorry"
    }
  return dice
}

document.querySelectorAll("i")[1].setAttribute("class", "fas fa-dice-"+(getNumber(dice1))+" fa-9x fadsf "+(getNumber(dice5)));
document.querySelectorAll("i")[2].setAttribute("class", "fas fa-dice-"+(getNumber(dice2))+" fa-9x fadsft "+(getNumber(dice6)));
document.querySelectorAll("i")[3].setAttribute("class", "fas fa-dice-"+(getNumber(dice3))+" fa-9x fadsf "+(getNumber(dice7)));
document.querySelectorAll("i")[4].setAttribute("class", "fas fa-dice-"+(getNumber(dice4))+" fa-9x fadsft "+(getNumber(dice8)));


if ((dice1 + dice2) > (dice3 + dice4)) {
  document.querySelector("h1").innerHTML = "<i class='fas fa-flag-usa fads'></i> Player 1 Wins!";
  document.querySelectorAll("h6")[0].innerHTML = (dice1 + dice2);
  document.querySelectorAll("h6")[1].innerHTML = (dice3 + dice4);
} else if ((dice1 + dice2) < (dice3 + dice4)) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! <i class='fas fa-flag-usa fads'></i>";
  document.querySelectorAll("h6")[0].innerHTML = (dice1 + dice2);
  document.querySelectorAll("h6")[1].innerHTML = (dice3 + dice4);
} else {
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelectorAll("h6")[0].innerHTML = (dice1 + dice2);
  document.querySelectorAll("h6")[1].innerHTML = (dice3 + dice4);
}


// function count(i){
//   document.querySelectorAll("h6")[0].innerHTML = i
//   i++;
//
// }
