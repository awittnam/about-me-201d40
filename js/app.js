'use strict';

var tallyScore = 0

alert('Welcome! Let\'s play a simple yes/no guessing game so you can learn a little about me.')

var username = prompt('What is your name?'); //allows me to obtain the name of the person playing to allow for personalization of prompts if needed in the future

alert('Welcome, ' + username + '! Let\'s get started!'); //populates a personalized welcome message

//Question One

var answerOne = prompt('Do I have a pet?').toLowerCase(); //populates question and converts answer to all lowercase

if (answerOne === 'yes' || answerOne === 'y') { //if the anwer given in yes or y, they are correct
  // tell them they are correct
  alert('Correct, I have one beautiful Golden Retriever.  Her name is Eva.'); //text that populates
  //console.log the result
  console.log('The user got Question 1 correct'); //logs that user got it correct
  tallyScore ++;
} else { //if above argument is not met, the following will alert
  // tell them they are incorrect
  alert('Incorrect. I have a Golden Retriever named Eva.'); //text that populates
  //console.log the result
  console.log('The user got Question 1 incorrect');
}

//Question Two
var answerTwo = prompt('Do I have any children?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  // tell them they are correct
  alert('Good job!  You\'re on a roll!  I have two children.');
  //console.log the result
  console.log('The user got Question 2 correct');
  tallyScore ++;
} else {
  //tell the they were wrong
  alert('Nope, you\'re wrong.  But don\'t be to hard on yourself.  I have two children.');
  //console.log the result
  console.log('The user got Question 2 incorrect');
}

//Question Three
var answerThree = prompt('Have I ever lived in Alaska?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  //tell them they are incorrect
  alert('Incorrect ' + username +', I have never lived in Alaska.');
  //console.log the result
  console.log('The user got Question 3 incorrect');
} else {
  //tell them they were right
  alert('Correct!  I have never lived there.');
  //console.log the result
  console.log('The user got Question 3 correct');
  tallyScore ++;
}

//Question Four
var answerFour = prompt('Have I ever been arrested?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  //tell them they are wrong
  alert('NOOOOO ' + username + ', I have never been arrested.');
  //console.log the result
  console.log('The user got Question 4 incorrect');
} else {
  //tell them they are right
  alert('Correct!  Thank you for having faith in me, I have never been arested.');
  //console.log the result
  console.log('The user got Question 4 correct');
  tallyScore ++;
}

//Question Five
var answerFive = prompt('Have I ever had a long, luxurious, intoxicating beard?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //tell them they couldn't BE more right
  alert('Obviously you are correct!  And thank you for the compliment.');
  //console.log the result
  console.log('The user absolutely got Question 5 correct');
  tallyScore ++;
} else {
  //tell them they are totally wrong
  alert('*sigh* Wrong Wrong Wrong');
  //console.log the result
  console.log('The user got Question 5 completely wrong');
}

//Question Six

//As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch this week?"), and indicates to the user whether the guess is "too high" or "too low", and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.

var favNum = 3 //set mu favorite number for them to guess

for (var i = 0; i < 4; i++) {
  var guessNum = Number(prompt('What is my favorite number?')); //converts the guessed num into a number
  console.log(guessNum); //console.log the number guessed

  if (guessNum === favNum) { //if guess is equal to my
  //tell them they are correct
    alert('Great job, you got it!');
    tallyScore ++;
    break;
  } else if (guessNum > favNum) {
    alert('That guess was too high.');
  } else if (guessNum < favNum) {
    alert('That guess is too low.');
  }
  if (i === 3) {
    alert('To many attempts.  My number ' + favNum + '.');
  }
}
//Question Seven
//As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array (for instance, "Can you guess a state that I have lived in besides Washington?"), so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.


alert('Can you guess a state that I have lived in besides Washington?')
var listOfStates = ['Illinois', 'Texas', 'Florida'];
var stateInArray = false;
var attemptsRemaining = 6;

do {

  var guessedState = prompt('Enter a state. You have ' + attemptsRemaining + ' tries remainging.');
  console.log(guessedState);

  for (var j = 0; j < listOfStates.length; j++) {

    if (listOfStates[j].toLowerCase() === guessedState.toLowerCase()) {
      stateInArray = true;
      alert('Nice work! I have lived in ' + listOfStates);
      tallyScore ++;
      break;
    }
  }

  if (!stateInArray) {
    alert('I have never lived there.');
    attemptsRemaining --;
    console.log(attemptsRemaining);
  }

} while (!stateInArray && attemptsRemaining > 0);

alert('You scored ' + tallyScore + ' out of 7. Thank you for playing my game ' + username + '.');
