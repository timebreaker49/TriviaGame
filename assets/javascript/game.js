$(document).ready(function() {

countdown();

});

    function countdown() {
        number--;
        $("#timer").html(number);
        if (number === 0) {
            clearInterval(intervalId);
            alert("Time Up!");
            emptyQuestion();
            index++;
            setTimeout(renderQuestion, 3000);
        }

    }

    intervalId = setInterval(countdown, 1000);

    function emptyQuestion() {
    	$('#question').empty();
    	$('#clickedAnswer').empty();

    }

    function renderQuestion() {

       for (let i = 0; i < 1; i++) {
            var questionPrompt = $('<h2>');
            questionPrompt.addClass('#question');
            // questionPrompt.attr('value', questionsArray[index].question[i]);
            questionPrompt.text(questionsArray[index].question);
            $('#question').append(questionPrompt);
       } 

//attempted loop
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
   
        // questionsArray.splice(0, 1);
        // console.log(questionsArray);

    // runs the countdown function again

        number = 10;
        countdown();
        intervalId = setInterval(countdown, 1000);
    }

 $('#clickedAnswer').on('click', '.answer', function(event) { 
	var clickedChoice = $(this).data('number');
	console.log(clickedChoice);

    console.log(questionsArray[index].correct);

    if (clickedChoice + 1 === questionsArray[index].correct) {
        alert("Correct!");
    } else {
        alert("Nice try, but no cigar");
    }
})  



var index = -1;  

var q1 = {
    question: "This anime features a young lad gathering Nakama on his way to becoming the Pirate King!",
    answers: ["One Piece", "Fullmetal Alchemist", "Darker Than Black", "Space Captain Yamato"],
    correct : 1
}

var q2 = {
    question: "In this comedy romance anime followed Captain Sosuke Sagara on his mission to protect high school student Kaname Chidori",
    answers: ["Ichigo 100%", "School Rumble", "Fullmetal Panic", "Fruits Basket"],
    correct : 2
}

var q3 = {
	question: "Which anime features 14-year old hover board mechanic Renton Thurston and hist dreams of joining the renegade group Gekkostate",
    a: "Gurren Lagann",
    b: "RahXephon",
    c: "Eureka Seven",
    d: "Future Diary",
    correct : "c",
}

var questionsArray = [q1, q2];
var number = 3;
var intervalId;

