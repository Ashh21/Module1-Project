const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices");
const rulesButton = document.getElementById("rules");
const rulesPopup = document.getElementById("rules-popup"); 
const closeButton = document.getElementById("close")

;let userScore = 0;
let computerScore = 0;


buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      let result = "";
  
      if (userChoice === computerChoice) {
        result = "Tie up!";
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);
      } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
      ) {
        (result = "You Win Against PC!"), userScore++;
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);
      } else {
        (result = "You Lost Against PC!"), computerScore++;
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);
      }
  
      // document.getElementById("res").innerText = `You chose ${userChoice}. Computer chose ${computerChoice}`

        

        document.getElementById("userScore").innerHTML = ` ${userScore}`;
        document.getElementById("computerScore").innerHTML = ` ${computerScore}`;
      
    });
  });

  const savedScore = localStorage.getItem("userScore" , "computerScore");
  if (savedScore != null){
    userScore = savedScore;
    computerScore = savedScore;
    document.getElementById("userScore").innerHTML = ` ${userScore}`;
    document.getElementById("computerScore").innerHTML = ` ${computerScore}`;
  }


  rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
  })

  closeButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
  })



const rock = document.getElementById("rock")
const scissor = document.getElementById("scissor")
const paper = document.getElementById("paper")

rock.addEventListener("click", () => {
  console.log("button clicked");
if(result === "You Win Against PC!"){
document.location.href = "Win.html";
document.getElementById("result").innerText = `${result}`;
} 
})

scissor.addEventListener("click", () => {
  console.log("button clicked");
if(result === "You Lost Against PC!"){
document.location.href = "Lost.html";
document.getElementById("result").innerText = `${result}`;
} 
})

paper.addEventListener("click", () => {
  console.log("button clicked");
if(result === "Tie up!"){
document.location.href = "Tied.html";
document.getElementById("result").innerText = `${result}`;
} 
})