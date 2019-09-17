var triviaQuestions = [{
    question: "Where in the world would you find Chelsea FC",
    answerList: {
        a: "Paris",
        b: "London",
        c: "Berlin",
        d: "Amsterdam"},
    correctAnswer: "b",
  }, {
    question: "What team does Cristiano Ronaldo play for?",
    answerList: {
        a: "FC Barcelona",
        b: "Manchester United",
        c: "Real Madrid",
        d: "Juventus"},
    correctAnswer: "d",
  }, {
    question: "Which player is notorious for the 'Hand of God' goal?",
    answerList: {
        a: "Diego Maradona",
        b: "Pele",
        c: "Lionel Messi",
        d: "Ronaldinho"},
    correctAnswer: "a",
  }, {
    question: "Which league is the highest professional level of futbol in France?",
    answerList: {
        a: "Bundesliga",
        b: "La Liga",
        c: "Ligue 1",
        d: "Liga NOS"},
    correctAnswer: "c",
  }, {
    question: "Which country has never won the FIFA World Cup?",
    answerList: {
        a: "Netherlands",
        b: "Germany",
        c: "Uruguay",
        d: "England"},
    correctAnswer: "a",
  }, {
    question: "Which country has won the most FIFA World Cups?",
    answerList: {
        a: "Argentina",
        b: "Brazil",
        c: "France",
        d: "Germany"},
    correctAnswer: "b",
  }, {
    question: "How many teams participate in the FIFA World Cup?",
    answerList: {
        a: "16",
        b: "48",
        c: "1",
        d: "32"},
    correctAnswer: "d",
  }, {
    question: "Where will the next FIFA World Cup be held?",
    answerList: {
        a: "USA/Canda/Mexico",
        b: "Russia",
        c: "Qatar",
        d: "Japan/South Korea"},
    correctAnswer: "c",
  }]

  var quizContainer = document.getElementById('quiz');
  var resultsContainer = document.getElementById('results');
  var startButton = document.getElementById('start');
  var submitButton = document.getElementById('submit');
  
  startButton.addEventListener('click', start);
  submitButton.addEventListener('click', showResults);

  function showResults(){
    var answerContainers = quizContainer.querySelectorAll('.answers');

  // keep track of user's answers
  var numCorrect = 0;
  var inCorrect

  triviaQuestions.forEach( (currentQuestion, questionNumber) => {

   var answerContainer = answerContainers[questionNumber];
    var selector = 'input[name=question'+questionNumber+']:checked';
    var userAnswer = (answerContainer.querySelector(selector) || {}).value;

    if(userAnswer===currentQuestion.correctAnswer){
      numCorrect++;

      answerContainers[questionNumber].style.color = 'darkgreen';
    }
    else{ 
      answerContainers[questionNumber].style.color = 'red';
    }
  });

  resultsContainer.innerHTML = numCorrect + ' out of ' + triviaQuestions.length;
}

function start(){
    buildQuiz();
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    setTimeout(function(){showResults()}, 100000);

}

function buildQuiz(){
    submitButton.style.display="block";
    // we'll need a place to store the HTML output
    var output = [];
  
    // for each question...
    triviaQuestions.forEach(
      (currentQuestion, questionNumber) => {
  
        // we'll want to store the list of answer choices
        var answers = [];
  
        // and for each available answer...
        for(letter in currentQuestion.answerList){
  
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answerList[letter]}
            </label>`
          );
        }
  
        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );
  
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }