// ===================== DATA =====================
const clues = [
  {
    number: 16,
    question: "Which continent is Spain in?",
    answer: "europe",
    image: "images/clue16.jpg"
  },
  {
    number: 17,
    question: "What is the capital of France?",
    answer: "paris",
    image: "images/clue17.jpg"
  }
];

let currentIndex = 0;

// ===================== ELEMENTS =====================
const welcome = document.getElementById("welcome");
const clueScreen = document.getElementById("clueScreen");

const titleEl = document.getElementById("clueTitle");
const questionEl = document.getElementById("clueQuestion");
const imageEl = document.getElementById("clueImage");
const form = document.getElementById("clueForm");
const answerInput = document.getElementById("answer");
const nopeBox = document.getElementById("nopeBox");
const submitBtn = form.querySelector("button");

// ===================== LOAD CLUE =====================
function loadClue(i){
  currentIndex = i;
  const c = clues[i];

  titleEl.textContent = "Clue " + c.number;
  questionEl.textContent = c.question;
  imageEl.textContent = c.image ? "" : "Image placeholder";
  if(c.image) imageEl.style.backgroundImage = `url(${c.image})`;

  answerInput.value = "";
  nopeBox.classList.remove("is-on");
  submitBtn.disabled = false;
}

// ===================== START =====================
document.getElementById("startBtn").addEventListener("click", () => {
  welcome.style.display = "none";
  clueScreen.style.display = "block";
  loadClue(0); // start at clue 16
});

// ===================== SUBMIT =====================
form.addEventListener("submit", e => {
  e.preventDefault();

  const user = answerInput.value.trim().toLowerCase();
  const correct = clues[currentIndex].answer.toLowerCase();

  if(user === correct){
    nopeBox.classList.remove("is-on");

    if(currentIndex + 1 < clues.length){
      loadClue(currentIndex + 1);
    }
  } else {
    nopeBox.classList.add("is-on");
  }
});
