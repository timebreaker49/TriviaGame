$(document).ready(function() {

    var image = $('<img>');
    image.attr('src', 'assets/images/shonen_lineup.png');
    image.addClass('logo')
    $('#message').append(image);
    $('#realAnswer').append("It's time to play the game: Guess this anime!!")

});


function answerWhenZero() {
    if (number === 0 && index > 0 && !event) {
        var motivationImage = $('<img>');
        motivationImage.attr('src', 'assets/images/Hey-you-can-do-it.jpg');
        $('#message').append(motivationImage);
        numWrong++;
        $('#realAnswer').append('The right answer is: ' + questionsArray[index].correctTitle);
    }
    finalScore();
}

function countdown() {
    number--;
    $("#timer").html(number);
    if (number === 0) {
        clearInterval(intervalId);
        emptyQuestion();
        index++;
        setTimeout(renderQuestion, 1000 * 3);
    }
    answerWhenZero();

}

function emptyQuestion() {
    $('#question').empty();
    $('#questionPic').empty();
    $('#clickedAnswer').empty();
    $('#message').empty();
    $('#realAnswer').empty();
}

function renderQuestion() {
  

    //populates questions
    for (let i = 0; i < 1; i++) {
        var questionPic = $('<img>');
        questionPic.addClass('qp');
        questionPic.attr('src', questionsArray[index].src);
        $('#questionPic').append(questionPic);


        var questionPrompt = $('<h2>');
        questionPrompt.addClass('question');
        // questionPrompt.attr('value', questionsArray[index].question[i]);
        questionPrompt.text(questionsArray[index].question);
        $('#question').append(questionPrompt);

    }

    //populates answers
    for (let i = 0; i < 4; i++) {
        var qa = $('<button>');
        qa.addClass('col, answer');
        //value of the answer I"m populating, viewable in console
        qa.attr('value', questionsArray[index].answers[i]);
        //.text is text to display
        qa.text(questionsArray[index].answers[i]);
        //creates a value that can be linked to the .onClick button 
        qa.attr('data-number', i);
        $('#clickedAnswer').append(qa);
        // $('#answer-' + (i + 1)).append(qa);
    }

    $('#realAnswer').empty();
    $('#message').empty();
    // runs the countdown function again
    resetTimer();
    countdown();
    // 
}

$('#clickedAnswer').on('click', '.answer', function(event) {
//checks for the user's input and compares with the right answer
    var clickedChoice = $(this).data('number');
    if (clickedChoice === questionsArray[index].correct) {
        alert("Correct!");
        numRight++;
    } else {
        alert("Nice try, but the right answer is: " + questionsArray[index].correctTitle);
        numWrong++;
    }

    toZero();
    countdown();
    finalScore();
})

function toZero() {
    clearInterval(intervalId);
    number = 1;
    intervalId = setInterval(countdown, 1000);
}

function resetTimer() {
    number = 10;
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
}

function playAgain() {
        $('#question').append('Time to start over! Get ready');
        setTimeout(location.reload(), 1000 * 10)
}

function finalScore() {
    if (index === 8 && !event, index === 8 && event) {
        emptyQuestion();
        $('#message').append("Number chosen correctly: " + numRight);
        $('#realAnswer').append("Number chosen incorrectly: " + numWrong);
        setTimeout(playAgain, 3000)
    }
}



var q1 = {
    question: "This anime features a young lad gathering Nakama on his way to becoming the Pirate King!",
    answers: ["One Piece", "Fullmetal Alchemist", "Darker Than Black", "Space Captain Yamato"],
    correct: 0,
    correctTitle: "One Piece",
    src: "assets/images/op.jpg"
}

var q2 = {
    question: "In this comedy romance anime followed Captain Sosuke Sagara on his mission to protect high school student Kaname Chidori",
    answers: ["Ichigo 100%", "School Rumble", "Fullmetal Panic", "Fruits Basket"],
    correct: 2,
    correctTitle: "Fullmetal Panic",
    src: "assets/images/fmp.jpg"
}

var q3 = {
    question: "Which anime features 14-year old hover board mechanic Renton Thurston and his dreams of joining the renegade group Gekkostate",
    answers: ["Gurren Lagann", "RahXephon", "Eureka Seven", "Future Diary"],
    correct: 2,
    correctTitle: "Eureka Seven",
    src: "assets/images/e7.png"
}

var q4 = {
    question: "Believe it! this is the story of a boy and his journey for acceptance",
    answers: ["Bleach", "Gantz", "Naruto", "Hajime no Ippo"],
    correct: 2,
    correctTitle: "Naruto",
    src: "assets/images/naruto.jpg"
}

var q5 = {
    question: "Set in a fictional world similar to our own, this dark anime follows Gon on his quest to find his father",
    answers: ["Hunter X Hunter", "Fairy Tale", "Black Clover", "Reborn!"],
    correct: 0,
    correctTitle: "Hunter X Hunter",
    src: "assets/images/hxh.jpg"
}

var q6 = {
    question: "Well regarded for its sick hip hop beats, unique art style, and tense action scenes, this anime features three characters with unique reasons that bring them together",
    answers: ["Fullmetal Alchemist", "Trigun", "Cowboy Bebop", "Samurai Champloo"],
    correct: 3,
    correctTitle: "Samurai Champloo",
    src: "assets/images/sc.png"
}

var q7 = {
    question: "This slice-of-life comedy about an odd-jobs shop in present-day Tokyo isn't afraid to break the 4th wall and make fun of itself",
    answers: ["Dragon Ball", "Gintama", "Sket Dance", "Bakuman"],
    correct: 1,
    correctTitle: "Gintama",
    src: "assets/images/gintama.jpeg"
}

var q8 = {
    question: "An aspiring conductor who's afraid to get on a plane. A musician who only wants to play for herself. This anime is a love story with many musical layers",
    answers: ["Your Lie in April", "Yu Yu Hakusho", "My Hero Aacademia", "Nodame Cantabile"],
    correct: 3,
    correctTitle: "Nodame Cantabile",
    src: "assets/images/nc.jpg"
}

intervalId = setInterval(countdown, 1000);
var index = -1;
var questionsArray = [q1, q2, q3, q4, q5, q6, q7, q8];
var number = 10;
var intervalId;
var numRight = 0;
var numWrong = 0;
var clickedChoice;