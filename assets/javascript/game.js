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
            setTimeout(renderQuestion, 3000);
        }
    }

    intervalId = setInterval(countdown, 1000);

    function emptyQuestion() {
    	$('.question').empty();
    	$('#A').empty();
    	$('#B').empty();
    	$('#C').empty();
    	$('#D').empty();
    }

    function renderQuestion() {

//attempted loop
    	// for (let i = 1; i < 5; i++) {
	    // 	var qa = $('<button>');
	    //     qa.attr('.col, .answer');
	    //     qa.attr('value', questionsArray[i]);
	    //     qa.text(questionsArray[i]);
	    //     $('.answer').append(qa);
    	// }
   
        var answerA = $('<button>');
        answerA.attr('.col, .answer');
        answerA.attr('value', questionsArray[0].a);
        answerA.text(questionsArray[0].a);
        $('#A').append(answerA);

        var answerB = $('<button>');
        answerB.attr('.col, .answer');
        answerB.attr('value', questionsArray[0].b);
        answerB.text(questionsArray[0].b);
        $('#B').append(answerB);

        var answerC = $('<button>');
        answerC.attr('.col, .answer');
        answerC.attr('data-letter', questionsArray[0].c);
        answerC.text(questionsArray[0].c);
        $('#C').append(answerC);

        var answerD = $('<button>');
        answerD.attr('.col, .answer');
        answerD.attr('value', questionsArray[0].d);
        answerD.text(questionsArray[0].d);
        $('#D').append(answerD);

  
        questionsArray.splice(0, 1);
        console.log(questionsArray);

    //runs the countdown function again
        // number = 3;
        // countdown();
        // intervalId = setInterval(countdown, 1000);
    }

 $('.answer').on('click', function(event) {
	var clickedChoice = $(this).data('letter');
	console.log(clickedChoice);
})    

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

