var triviaQuestions = [{
    question: "Where in the world would you find Chelsea FC?",
    answerList: ["Paris", "London", "Berlin", "Amsterdam"],
    correctAnswer: "London",
}, {
    question: "What team does Cristiano Ronaldo play for?",
    answerList: ["FC Barcelona", "Manchester United", "Real Madrid", "Juventus"],
    correctAnswer: "Juventus",
}, {
    question: "Which player is notorious for the 'Hand of God' goal?",
    answerList: ["Diego Maradona", "Pele", "Lionel Messi", "Ronaldinho"],
    correctAnswer: "Diego Maradona",
}, {
    question: "Which league is the highest professional level of futbol in France?",
    answerList: ["Bundesliga", "La Liga", "Ligue 1", "Liga NOS"],
    correctAnswer: "Ligue 1",
}, {
    question: "Which country has never won the FIFA World Cup?",
    answerList: ["Netherlands", "Germany", "Uruguay", "England"],
    correctAnswer: "Netherlands",
}, {
    question: "Which country has won the most FIFA World Cups?",
    answerList: ["Argentina", "Brazil", "France", "Germany"],
    correctAnswer: "Brazil",
}, {
    question: "How many teams participate in the FIFA World Cup?",
    answerList: ["16", "48", "1", "32"],
    correctAnswer: "32",
}, {
    question: "Where will the next FIFA World Cup be held?",
    answerList: ["USA/Canda/Mexico", "Russia", "Qatar", "Japan/South Korea"],
    correctAnswer: "Qatar",
}]

$("#start").on('click', function () {
    triviaGame.start();
})
$(document).on('click', '#submit', function () {
    triviaGame.over();
})
var triviaGame = {
    right: 0,
    wrong: 0,
    counter: 60,

    start: function () {
        $("#start").hide();
        $("#submit").show();

        timer = setInterval(triviaGame.countdown, 1000);
        $("#quiz").prepend('<h2>Time: <span id="counter">60</span> seconds </h2>');
        for (var i = 0; i < triviaQuestions.length; i++) {
            $("#quiz").append('<h5>' + triviaQuestions[i].question + '</h5>')
            for (var j = 0; j < triviaQuestions[i].answerList.length; j++) {
                $("#quiz").append("<input type='radio' name='question " + i + "' value='" + triviaQuestions[i].answerList[j] + "'>" + triviaQuestions[i].answerList[j])
            }
        }
        $("#quiz").append('<br><a class="btn btn-primary" href="#" id="submit" role="button">Submit</a>')
    },

    countdown: function () {
        triviaGame.counter--;
        $("#counter").html(triviaGame.counter);
        if (triviaGame.counter == 0) {
            triviaGame.over();
        }
    },
    over: function () {
        $.each($("input[name = 'question 0']:checked"), function () {
            if ($(this).val() == triviaQuestions[0].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 1']:checked"), function () {
            if ($(this).val() == triviaQuestions[1].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 2']:checked"), function () {
            if ($(this).val() == triviaQuestions[2].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 3']:checked"), function () {
            if ($(this).val() == triviaQuestions[3].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 4']:checked"), function () {
            if ($(this).val() == triviaQuestions[4].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 5']:checked"), function () {
            if ($(this).val() == triviaQuestions[5].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 6']:checked"), function () {
            if ($(this).val() == triviaQuestions[6].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });
        $.each($("input[name = 'question 7']:checked"), function () {
            if ($(this).val() == triviaQuestions[7].correctAnswer) {
                triviaGame.right++;
            } else {
                triviaGame.wrong++;
            }
        });

        this.result()
    },


    result: function () {
        clearInterval(timer);
        $("#quiz").html("<h1>Time's Up</h1>");
        $("#quiz").append("<h3>Correct: " + this.right + "</h3>");
        $("#quiz").append("<h3>Incorrect: " + this.wrong + "</h3>");
        $("#quiz").append("<h4>Blank: " + (triviaQuestions.length - (this.wrong + this.right)) + "</h4>");
    }


}