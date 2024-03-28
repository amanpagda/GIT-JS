const quizGame = [
    {
        question: " what dose HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Hyper Transfer Markup Language",
            "Hyper Machine Language",
            "Hyperlink and Markup Language",
        ],
        correct: 0,
    },
    {
        question: "Which CSS property is control the spacing between element",
        options: ["Margin", "Padding", "Spacing", "Border-spacing"],
        correct: 1,
    },
    {
        question: "what is javascript function used to select an HTML element by its id",
        options: [
            "document.query",
            "getElementById",
            "selectElement",
            "findElementById",
        ],
        correct: 1,
    },
    {
        question: "In react.js, which hook is used to perform side effects in a function component?",
        options: ["UseEffect", "useState", "useContext", "useReducer"],
        correct: 0,  
    },
    {
        question: "Which HTML tag is used to create an ordered list?",
        options: ["<ul>", "<li>", "<ol>", "<dl>"],
        correct: 2,
    },
]

// 

const ans = document.querySelectorAll(".ans");
const que = document.querySelector("#question");
const opt_1 = document.querySelector(".opt_1");
const opt_2 = document.querySelector(".opt_2");
const opt_3 = document.querySelector(".opt_3");
const opt_4 = document.querySelector(".opt_4");
const subBtn = document.querySelector("#sub");

const quiz = 0;
const score = 0;

// 

const load = () => {
    const {question, options} = quizGame[quiz];
    que.innerText = question;

    console.log(options);
    options.forEach(
        (curOption, index) => {window[`opt_${index + 1}`].innerText = curOption}
    );
};

load();