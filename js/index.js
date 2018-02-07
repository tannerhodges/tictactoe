var buttons = document.querySelectorAll("button");
//var resetButton = document.querySelectorAll("#resetButton");
var lastClick = "O";
//var startingBoard = $("#div").html();

function changeButton(event) {
  if (lastClick === "O") {
    event.target.innerText = "X";
    event.target.style.fontSize = "120px";
    lastClick = "X";
  } else {
    event.target.innerText = "O";
    event.target.style.fontSize = "120px";
    lastClick = "O";
  }

  checkForWin();
}

function checkForWin() {
  if (buttons[0].innerText === buttons[1].innerText && buttons[1].innerText === buttons[2].innerText) {
    alert(buttons[0].innerText + " Wins!");
  }
  if (buttons[3].innerText === buttons[4].innerText && buttons[4].innerText === buttons[5].innerText) {
    alert(buttons[3].innerText + " Wins!");
  }
  if (buttons[6].innerText === buttons[7].innerText && buttons[7].innerText === buttons[8].innerText) {
    alert(buttons[6].innerText + " Wins!");
  }
  if (buttons[0].innerText === buttons[3].innerText && buttons[3].innerText === buttons[6].innerText) {
    alert(buttons[0].innerText + " Wins!");
  }
  if (buttons[1].innerText === buttons[4].innerText && buttons[4].innerText === buttons[7].innerText) {
    alert(buttons[1].innerText + " Wins!");
  }
  if (buttons[2].innerText === buttons[5].innerText && buttons[5].innerText === buttons[8].innerText) {
    alert(buttons[2].innerText + " Wins!");
  }
  if (buttons[0].innerText === buttons[4].innerText && buttons[4].innerText === buttons[8].innerText) {
    alert(buttons[0].innerText + " Wins!");
  }
  if (buttons[2].innerText === buttons[4].innerText && buttons[4].innerText === buttons[6].innerText) {
    alert(buttons[2].innerText + " Wins!");
  }
}

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeButton);
}

//function resetBoard(){
//  $("#div").html(startingBoard);
//}
//
//resetbutton.addEventListener("click", resetBoard);
