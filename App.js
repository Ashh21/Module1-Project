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
        (result = "You Win Against PC!"), userScore++, computerScore--;
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);
      } else {
        (result = "You Lost Against PC!"), userScore--, computerScore++;
        localStorage.setItem("userScore", userScore);
        localStorage.setItem("computerScore", computerScore);
      }
  
      document.getElementById("res").innerText = `You chose ${userChoice}. Computer chose ${computerChoice}`

        document.getElementById("result").innerHTML = `${result}`;
      
    });
  });


  rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
  })

  closeButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
  })


