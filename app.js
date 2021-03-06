var position = 0;
var test;
var test_status;
var question;
var choice;
var choices;
var chA;
var chB;
var chC;
var chD;
var correct = 0;

var questions = [

	['What is a nickname for Manchester United FC?', 
	'The Red Dragons', 
	'The Red Devils', 
	'The Blue Devils', 
	'The Deviled Eggs', 
	'B', 
	'The Red Devils'],

	['The current manager of Manchester United FC is ____________?', 
	'Alexander Ferguson', 
	'Diego Maradona', 
	'Jose Mourinho', 
	'Landon Donovan', 
	'C', 
	'Jose Mourinho'],

	['Which American goalie also played goalie for Manchester United FC?', 
	'Clint Dempsey', 
	'Pele', 
	'Tim Howard', 
	'Michael Scott', 
	'C', 
	'Tim Howard'],

	['The home stadium of Manchester United FC is _____________?', 
	'The Thunder Dome', 
	'The Field of Dreams', 
	'Wembley Stadium', 
	'Old Trafford', 
	'D', 
	'Old Trafford'],

	['The Manchester Derby is between two rival Manchester teams including Manchester United and what other team?', 
	'Manchester Town', 
	'Manchester City', 
	'Manchesterville', 
	'Manchesterville Town City', 
	'B', 
	'Manchester City'],

	['Which midfielder did Manchester United sign for a record fee from Italian club Juventus at the beginning of the season?', 
	'Po Paula', 
	'Pele', 
	'Paulo Pogo', 
	'Paul Pogba', 
	'D', 
	'Paul Pogba'],

	['Which player currently holds the record for most goals scored for Manchester United?', 
	'Wayne Rooney', 
	'Bobby Charlton', 
	'Denis Law', 
	'Jack Rowley', 
	'A', 
	'Wayne Rooney'],

	['Which player currently holds the record for most career appearances for Manchester United?', 
	'Bobby Charlton', 
	'Paul Scholes', 
	'Ryan Giggs', 
	'Bill Foulkes', 
	'C', 
	'Ryan Giggs'],

	['Which player won the FIFA World Player of the Year award while playing for Manchester United?', 
	'David Beckham', 
	'Cristiano Ronaldo', 
	'Christian Ronald', 
	'Ronald McDonald', 
	'B', 
	'Cristiano Ronaldo'],

	['Who has spent the longest amount of time managing Manchester United?', 
	'Alexander Ferguson', 
	'Jose Mourinho', 
	'David Moyes', 
	'Louis Van Gaal', 
	'A',
	'Alexander Ferguson']
];

function startQuiz () {
	$('.start').replaceWith('<wrapper class="question-count"><h3 id="js-question-count"></h3></wrapper><wrapper class="question-box"><div id="js-ques"></div></wrapper>');
	renderQuestion();
}

function get(x) {
	return document.getElementById(x);
}

function renderQuestion () {
	test = get('js-ques');

	//if statement to end test
	if(position >= questions.length) {
		test.innerHTML="<h2>You answered " +correct+ " of " +questions.length+ " questions correctly</h2><br><a href='index.html'><h3>Try Again?</h3></a>";
		get('js-question-count').innerHTML = 'Test Complete';
		pos=0;
		correct=0;
		return false;
	}

	//display question progress and assign current question to question and choices variables with radio buttons and submit
	get('js-question-count').innerHTML = 'Question ' + (position + 1) + " of " + questions.length;
	question = questions[position][0];
	chA = questions[position][1];
	chB = questions[position][2];
	chC = questions[position][3];
	chD = questions[position][4];
	test.innerHTML = '<h3>' + question + '</h3>';
	test.innerHTML += "<input type='radio' name='choices' value='A'>" + chA + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='B'>" + chB + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='C'>" + chC + '<br>';
	test.innerHTML += "<input type='radio' name='choices' value='D'>" + chD + '<br><br>';
	test.innerHTML += "<a><button onclick='checkAnswer()' id='submit-question'>Submit Answer</button></a>";
}

//function to see if checked choices is the correct choice and track correct amount and increase position
function checkAnswer() {
/*	var choices = document.getElementsByName('choices');
	for(var i=0; i<choices.length; i++) {
		if(choices[i].checked) {
			var choice=choices[i].value;
		} 
	}
*/
	var choice = $('[name="choices"]:checked').val();

	if(choice === undefined) {
		alert('You must select one answer')
		return;
	} else if (choice === questions[position][5]) {
		alert("You are Correct!")
		correct++;
	} else if (choice !== questions[position][5]) {
		alert("Sorry, that is incorrect.  The correct answer is "+ questions[position][6]);
	} 
	position++;
	renderQuestion();
}

$(function() {
	renderQuestion();
});
