let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector(".newbtn")
let NewGame = document.querySelector("#reset-btn");
let msgcontainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg");

let turnO = true; //turn playerX or playerO
let count = 0;

const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [6, 7, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const newgame = ()=>{
  turnO = true;
  count = 0;
  enableboxes();
  msgcontainer.classList.add("hide");
  newBtn.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
      if (turnO) {
        //playerO
        box.innerText = "O";
        turnO = false;
      } else {
        //playerX
        box.innerText = "X";
        turnO = true;
      }
      box.disabled = true;
      count++;
      let iswinner = checkWinner();
      if (count === 9 && !iswinner) {
        gameDraw();
      }
    });
});
const enableboxes = ()=>{
  for(let box of boxes){
    box.disabled = false;
    box.innerText = "";
  }
}
const disableboxes = ()=>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgcontainer.classList.remove("hide");
  newBtn.classList.remove("hide");
  disableboxes();
};
const showwinner = (winner)=>{
  msg.innerText = `congratulations! winner is ${winner}`
  msgcontainer.classList.remove("hide");
  newBtn.classList.remove("hide");
  disableboxes();
}
const checkWinner = () => {
    for (let pattern of winpatterns) {
      let pos1Val = boxes[pattern[0]].innerText;
      let pos2Val = boxes[pattern[1]].innerText;
      let pos3Val = boxes[pattern[2]].innerText;
  
      if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
        if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showwinner(pos1Val);
        }
      }
    }
  };
  
NewGame.addEventListener("click", newgame);