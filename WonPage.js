const rulesButton = document.getElementById("rules");
const rulesPopup = document.getElementById("rules-popup"); 
const closeButton = document.getElementById("close");


rulesPopup.style.display = "none"
  rulesButton.addEventListener("click", () => {
    rulesPopup.style.display = "block";
  })
  closeButton.addEventListener("click", () => {
    rulesPopup.style.display = "none";
  })