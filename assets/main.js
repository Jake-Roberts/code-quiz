// Get a timer to start
// When I click "Start", The welcome form hides and Question 1 is displayed
// When I click "Submit", Question 1 hides and Question 2 displays ect..
// When Question 1 displays start a timer countdown (setInterval)


// add the variables needed for later
var timeEL = document.querySelector("#clock")
var timeLeft = 70;
var scores = 0;
var btn = document.querySelector("#go-quiz")
var startEl = document.querySelector("#start-quiz")
var questions = document.querySelector("#question")
var answersEl = document.querySelector("#answers")
var count = 0
var countInterval;
timeEL.innerHTML = "You have " + timeLeft + " Seconds left!!!!";
console.log(timeEL)



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

console.log(myQuestions);
var count = 0
var countInterval;
// create function that is triggered once btn is clicked
// function(){
// countInterval.setInterval(function(){
//     if (timeLeft > 0 ){
//         timeLeft--;
//         timeEL.textContent = timeLeft + "Seconds left"
//     } else (
//         clearInterval()
//     )
// console.log(startQuiz)
    
// })
// }
// call back for startQuiz
btn.addEventListener('click', function(){
    console.log("hey you click me")
    countInterval = setInterval(function(){
        if (timeLeft > 0 ){
            timeLeft--;
            timeEL.innerHTML = timeLeft + "Seconds left"
        } else {
            // clearInterval();
        }
    10000});
    start(btn)
})

// questions after button has been clicked
var start = function(btn){
    startEl.innerHTML = "";
    questions.innerHTML = myQuestions[count].question
}