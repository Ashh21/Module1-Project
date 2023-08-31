

let queryString = window.location.search;

queryString = queryString.substring(1);


let queryParams = queryString.split('&');

let params = {};


for (let i = 0; i < queryParams.length; i++) {
  let param = queryParams[i].split('=');
  let key = decodeURIComponent(param[0]);
  let value = decodeURIComponent(param[1]);
  params[key] = value;
}

const rockImg = `<img src="/images/icons8-fist-67 1.png" />`
const scissorImg = `<img src="/images/16.42.45.jpg" />`
const paperImg =  `<img src="/images/icons8-hand-64 1.png" />`

const youPicked = params.choice;
const compPicked = params.compChoice;
const gameResult = params.gameResult;

const youPickedEle = document.getElementById("you-picked")
const computerPickedEle = document.getElementById("computer-picked")

youPickedEle.innerHTML = youPicked === "rock" ? rockImg : youPicked === "paper"? paperImg : scissorImg 

computerPickedEle.innerHTML = compPicked === "rock" ? rockImg : compPicked === "paper" ? paperImg : scissorImg 

const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices");
const rulesButton = document.getElementById("rules");
const rulesPopup = document.getElementById("rules-popup"); 
const closeButton = document.getElementById("close");
const res = document.getElementById("result")


let userScore = localStorage.getItem("userScore");
let computerScore = localStorage.getItem("computerScore");
document.getElementById("userScore").innerHTML = ` ${userScore}`;
document.getElementById("computerScore").innerHTML = ` ${computerScore}`;

res.innerText = gameResult;


rulesPopup.style.display = "none"
  rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
  })
  closeButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
  })