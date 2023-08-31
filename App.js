const choices = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".choices");
const rulesButton = document.getElementById("rules");
const rulesPopup = document.getElementById("rules-popup"); 
const closeButton = document.getElementById("close");


let userScore = 0;
let computerScore = 0;

let compPicked = ""

let result = ""

buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const userChoice = button.id;
      const computerChoice = choices[Math.floor(Math.random() * choices.length)];
      compPicked = computerChoice

      console.log({userChoice,computerChoice})
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


        document.getElementById("userScore").innerHTML = ` ${userScore}`;
        document.getElementById("computerScore").innerHTML = ` ${computerScore}`;
      
    });
  });

  const savedScore = localStorage.getItem("userScore");
  const compScore = localStorage.getItem("computerScore")
  if (savedScore != null){
    userScore = savedScore;
    computerScore = compScore;
    document.getElementById("userScore").innerText = ` ${userScore}`;
    document.getElementById("computerScore").innerHTML = ` ${computerScore}`;
  }

  rulesPopup.style.display = "none"

  rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
  })

  closeButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
  })



const rock = document.getElementById("rock")
const scissor = document.getElementById("scissors")
const paper = document.getElementById("paper")



function handleChoiceClick(choice) {
  const isWon = result === "You Win Against PC!";
  const isDraw = result === "Tie up!";
  const gameResult = isDraw ? "Tie up!" : isWon ? "You Win Against PC!" : "You Lost Against PC!";
  const resultPage = isDraw ? "Tied.html" : isWon ? "Win.html" : "Lost.html";
  window.location.href = `${resultPage}?choice=${choice}&gameResult=${gameResult}&compChoice=${compPicked}`;
}

rock.addEventListener("click", () => {
  handleChoiceClick("rock");
});

scissor.addEventListener("click", () => {
  handleChoiceClick("scissors");
});

paper.addEventListener("click", () => {
  handleChoiceClick("paper");
});

 
rock.addEventListener("click", () => {
  const isWon = result === "You Win Against PC!";
  const isDraw = result === "Tie up!";
  const gameResult = isDraw ? "Tie up!" : isWon ? "You Win Against PC!":"You Lost Against PC!";
  const resultPage = isDraw ? "Tied.html" : isWon ? "Win.html":"Lost.html";
  window.location.href = `${resultPage}?choice=rock&gameResult=${gameResult}&compChoice=${compPicked}`;
})

scissor.addEventListener("click", () => {
  const isWon = result === "You Win Against PC!";
  const isDraw = result === "Tie up!";
  const gameResult = isDraw ? "Tie up!" : isWon ? "You Win Against PC!":"You Lost Against PC!";
  const resultPage = isDraw ? "Tied.html" : isWon ? "Win.html":"Lost.html";
  window.location.href = `${resultPage}?choice=scissors&gameResult=${gameResult}&compChoice=${compPicked}`;
})

paper.addEventListener("click", () => {
  const isWon = result === "You Win Against PC!";
  const isDraw = result === "Tie up!";
  const gameResult = isDraw ? "Tie up!" : isWon ? "You Win Against PC!":"You Lost Against PC!";
  const resultPage = isDraw ? "Tied.html" : isWon ? "Win.html":"Lost.html";
  window.location.href = `${resultPage}?choice=paper&gameResult=${gameResult}&compChoice=${compPicked}`;
})













