// Definer Quiz Data
const quizData = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    options: ["<javascript>", "<js>", "<src>", "<script>"],
    correct: 3,
  },
  {
    question: "Where is the preferred place to insert JavaScript?",
    options: [
      "Inside the <head> tag",
      "At the end of the <body> tag",
      "Anywhere in the file",
      "Outside the HTML file altogether",
    ],
    correct: 1,
  },
  {
    question:
      "Is it necessary for the external script file to contain a <script> tag?",
    options: [
      "Yes",
      "No",
      "Depends on the type of include",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question:
      "What is the correct syntax for referring to an external script called 'gfg.js'?",
    options: [
      "<script name='gfg.js'>",
      "<script href='gfg.js'>",
      "<script src='gfg.js'>",
      "None of the above",
    ],
    correct: 2,
  },
  {
    question: "JavaScript is a:",
    options: [
      "<Compiled language'>",
      "Interpreted Language",
      "Both compiled and interpreted language",
      "None of the above",
    ],
    correct: 1,
  },
  {
    question: "Is a variable named 'apple' same as 'Apple' in javascript?",
    options: ["Yes", "No", "Only when we use 'strict'", "None of the above"],
    correct: 1,
  },
  {
    question:
      "What will be the output of the following code?< script >document.write( typeof( '1' + 2) );</ script >",
    options: ["boolean", "string", "number", "None of the above"],
    correct: 1,
  },

  {
    question: "What is the correct precedence of the operator in javascript",
    options: ["() [] . ++", "++ . [] ()", ". ++ [] ()", "() ++ . ["],
    correct: 0,
  },
  {
    question:
      "What will be the output of the following code snippet let gfg = ”GeeksforGeeks” console.log(gfg.charAt(4))",
    options: ["o", "f", "k", "s"],
    correct: 3,
  },
  {
    question:
      "What will be the output of the following code snippet let gfg=”GeeksforGeeks” console.log(gfg.indexOf(‘G’))",
    options: ["8", "0", "-1", "2"],
    correct: 1,
  },
];
// Initialize all variables
const quiz = document.querySelector(".quiz");
const answerElement = document.querySelectorAll(".answer");
const [questionElm, option_1, option_2, option_3, option_4] =
  document.querySelectorAll(
    "#question, #option_1 ,#option_2,#option_3,#option_4"
  );
const submitBtn = document.querySelector("#submit");
let currentQuiz = 0;
let score = 0;

// load Questions

const loadQuestion = () => {
  const { question, options } = quizData[currentQuiz];
  console.log(question);
  questionElm.innerText = question;

  options.forEach((curentOption, index) => {
    window[`option_${index + 1}`].innerText = curentOption;
  });
};

loadQuestion();

// Get selected Answer function on Button click

const getSelectedOption = () => {
  let ans_index;
  answerElement.forEach((curentOption, index) => {
    if (curentOption.checked) {
      ans_index = index;
    }
  });
  return ans_index;
};

const deselected = () => {
  answerElement.forEach((currentQuiz) => {
    currentQuiz.checked = false;
  });
};
const nextQuestion = () => {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    deselected();
    loadQuestion();
  } else {
    quiz.innerHTML = `
    <div class="flex flex-col gap-2">
        <h2 class="text-[#2E294E] text-3xl p-3">Your Score : ${score}/${quizData.length} Correct Answers.</h2>
        <p class="text-xl text-white ] w-fit p-2">Congratulations on completing the Quiz.</p>
        <buttion class="w-40 h-14 px-6 py-3 bg-[#2E294E] text-white rounded-2xl cursor-pointer" onclick="location.reload()">Play Again</button>
    </div>
    `;
  }
};
submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();
  if (selectedOptionIndex === quizData[currentQuiz].correct) {
    score++;
  }
  nextQuestion();
});
