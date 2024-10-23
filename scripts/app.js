 


let typingText = document.querySelector(".first");

let typeText = () => {
  setTimeout(() => {
    typingText.textContent = "a Data Scientist";
  }, 0);
  setTimeout(() => {
    typingText.textContent = "a Data Analyst";
  }, 4000);
  setTimeout(() => {
    typingText.textContent = "an AI Enthusiast";
  }, 8000);
    setTimeout(() => {
        typingText.textContent = "a gamer ;)";
    }, 12000);
};

typeText();
setInterval(typeText, 16000);