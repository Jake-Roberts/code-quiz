// Get a timer to start
// When I click "Start", The welcome form hides and Question 1 is displayed
// When I click "Submit", Question 1 hides and Question 2 displays ect..
// When Question 1 displays start a timer countdown (setInterval)


// add the variables needed for later
var timeEL = document.getElementById("#clock")
var timeLeft = 50;
var btn = document.getElementById("#go-quiz")
var startEl = document.querySelector("#start-quiz")
var questions = document.querySelector("#question")
var answersEl = document.querySelector("#answers")


// creat an object with the question properties
const myQuestions = [
    {
        question: 'What is the greatest video game of all time?',
        choice: ['Halo 3', 'The Witcher 3', 'Destiny 1', 'Skyrim'],
        answer: 'Halo'
    },
    {
        question: 'What is the best Movie of all time?',
        choice: ['Bourne Identity', 'The Sandlot', 'Iron Man', 'Inception'],
        answer: 'Iron Man'
    },
    {
        question: 'Who is the best boxer of all time?',
        choice: ['Muhammid Ali', 'Mike Tyson', 'Jake Paul LOL', 'Floyd Mayweather'],
        answer: 'Muhammid Ali'
    },
    {
        question: 'What is the best coding language of all time?',
        choice: ['JavaScript', 'Python', 'C#', 'Go'],
        answer: 'JavaScript'
        },
];

