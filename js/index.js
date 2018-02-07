var buttons = document.querySelectorAll("button");
var lastClick = "O";

function changeButton(event) {
  if (lastClick === "O") {
    event.target.innerText = "X";
    lastClick = "X";
  } else {
    event.target.innerText = "O";
    lastClick = "O";
  }

  checkForWin();
}

function checkForWin() {
  if (buttons[0].innerText === buttons[1].innerText && buttons[1].innerText === buttons[2].innerText) {
    console.log(buttons[0].innerText + " Wins!");
  }
  if (buttons[3].innerText === buttons[4].innerText && buttons[4].innerText === buttons[5].innerText) {
    console.log(buttons[3].innerText + " Wins!");
  }
  if (buttons[6].innerText === buttons[7].innerText && buttons[7].innerText === buttons[8].innerText) {
    console.log(buttons[6].innerText + " Wins!");
  }
  if (buttons[0].innerText === buttons[3].innerText && buttons[3].innerText === buttons[6].innerText) {
    console.log(buttons[0].innerText + " Wins!");
  }
  if (buttons[1].innerText === buttons[4].innerText && buttons[4].innerText === buttons[7].innerText) {
    console.log(buttons[1].innerText + " Wins!");
  }
  if (buttons[2].innerText === buttons[5].innerText && buttons[5].innerText === buttons[8].innerText) {
    console.log(buttons[2].innerText + " Wins!");
  }
  if (buttons[0].innerText === buttons[4].innerText && buttons[4].innerText === buttons[8].innerText) {
    console.log(buttons[0].innerText + " Wins!");
  }
  if (buttons[2].innerText === buttons[4].innerText && buttons[4].innerText === buttons[6].innerText) {
    console.log(buttons[2].innerText + " Wins!");
  }
}

// buttons[0].addEventListener("click", changeButton);
// buttons[1].addEventListener("click", changeButton);
// buttons[2].addEventListener("click", changeButton);
// buttons[3].addEventListener("click", changeButton);
// buttons[4].addEventListener("click", changeButton);
// buttons[5].addEventListener("click", changeButton);
// buttons[6].addEventListener("click", changeButton);
// buttons[7].addEventListener("click", changeButton);
// buttons[8].addEventListener("click", changeButton);

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", changeButton);
}
