$(document).ready(function() {

    //Stopwatch
    intervalId = setInterval(countdown, 1000);

    function countdown() {
        number--;
        $("#timer").html(number);
        if (number === 0) {
            clearInterval(intervalId);
            alert("Time Up!");
            emptyQuestion();
            setTimeout(renderQuestion, 3000);
        }
    }


    function emptyQuestion() {
    	$('.question').empty();
    	$('#A').empty();
    	$('#B').empty();
    	$('#C').empty();
    	$('#D').empty();
    }

    function renderQuestion() {

        var answerChoices = $('<button>');
        answerChoices.attr('.col, .answer');
        $('.question').append(questionsArray[0].question);
        $('#A').append(questionsArray[0].a);
        $('#B').append(questionsArray[0].b);
        $('#C').append(questionsArray[0].c);
        $('#D').append(questionsArray[0].d);
        questionsArray.splice[0];

    }
    countdown();

});

var q1 = {
    question: "This anime features a young lad gathering Nakama on his way to becoming the Pirate King!",
    a: "One Piece",
    b: "Fullmetal Alchemist",
    c: "Darker Than Black",
    d: "Space Captain Yamato",
    correct : "a",
}

var q2 = {
    question: "This comedy romance anime followed Captain Sosuke Sagara on his mission to protect high school student Kaname Chidori",
    a: "Ichigo 100%",
    b: "School Rumble",
    c: "Fullmetal Panic",
    d: "Fruits Basket",
    correct : "c",
}

var q3 = {
	question: "Which anime features 14-year old hover board mechanic Renton Thurston and hist dreams of joining the renegade group Gekkostate",
    a: "Gurren Lagann",
    b: "RahXephon",
    c: "Eureka Seven",
    d: "Future Diary",
    correct : "c",
}

var questionsArray = [q1, q2, q3];
var number = 3;
var intervalId;
var quesitonUsed = false;
