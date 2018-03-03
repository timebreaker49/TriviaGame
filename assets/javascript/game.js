intervalId = setInterval(countdown, 1000);


$(document).ready(function() {

    var image = $('<img>');
    image.attr('src', 'assets/images/ff_logo.jpg');
    image.addClass('logo')
    $('#question').append(image);

});


    function answerWhenZero () {         
        if (number === 0 && index > 0 && !event  ) {
            console.log(clickedChoice);
            var motivationImage = $('<img>');
            motivationImage.attr('src', 'assets/images/Hey-you-can-do-it.jpg');
            $('#message').append(motivationImage);
            // $('#answer').append('The correct answer was: ' + questionsArray[index].correctTitle);
        }
    }

    function countdown() {
        console.log(clickedChoice);

        number--;
        $("#timer").html(number);
        if (number === 0) {
            clearInterval(intervalId);
            emptyQuestion();
            index++;
            setTimeout(renderQuestion, 3000);   
        }
        answerWhenZero();

    }

    function gameClock() {

        number--;
        $("#timer").html(number);
        if (number === 0) {
            clearInterval(intervalId);
            alert('The correct answer was: ' + questionsArray[index].correctTitle);
            emptyQuestion();
            index++;
            setTimeout(renderQuestion);
        }

    }

    function emptyQuestion() {
    	$('#question').empty();
    	$('#clickedAnswer').empty();
        $('#message').empty();

    }

    function renderQuestion() {

    //populates questions
       for (let i = 0; i < 1; i++) {
            var questionPrompt = $('<h2>');
            questionPrompt.addClass('#question');
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

        $('#message').empty();


        
        // questionsArray.splice(0, 1);
        // console.log(questionsArray);

    // runs the countdown function again
        resetTimer();
        countdown();
        // 
    }

 $('#clickedAnswer').on('click', '.answer', function(event) { 

	var clickedChoice = $(this).data('number');
    if (clickedChoice === questionsArray[index].correct) {
        alert("Correct!");
        numRight++;
    } else {
        alert("Nice try, but the right answer is: " + questionsArray[index].correctTitle);
        numWrong++;
    }

    console.log(clickedChoice);


toZero();
countdown();

})  

function toZero () {
    clearInterval(intervalId);
    number = 1;
    intervalId = setInterval(countdown, 1000);
}

function resetTimer() {
    number = 5;
    clearInterval(intervalId);
    intervalId = setInterval(countdown, 1000);
} 

function resetClickedChoice() {
    var clickedChoice;
}

var q1 = {
    question: "This anime features a young lad gathering Nakama on his way to becoming the Pirate King!",
    answers: ["One Piece", "Fullmetal Alchemist", "Darker Than Black", "Space Captain Yamato"],
    correct : 0,
    correctTitle: "One Piece"
}

var q2 = {
    question: "In this comedy romance anime followed Captain Sosuke Sagara on his mission to protect high school student Kaname Chidori",
    answers: ["Ichigo 100%", "School Rumble", "Fullmetal Panic", "Fruits Basket"],
    correct : 2,
    correctTitle: "Fullmetal Panic"
}

var q3 = {
	question: "Which anime features 14-year old hover board mechanic Renton Thurston and hist dreams of joining the renegade group Gekkostate",
    answers: ["Gurren Lagann", "RahXephon", "Eureka Seven", "Future Diary"],
    correct : 2,
    correctTitle: "Eureka Seven"
}

var index = -1; 
var questionsArray = [q1, q2, q3];
var number = 3;
var intervalId;
var numRight;
var numWrong;
var clickedChoice = 'x';
