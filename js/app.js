'use strict';

var tallyScore = 0

alert('Welcome! Let\'s play a simple yes/no guessing game so you can learn a little about me.')

var username = prompt('What is your name?'); //allows me to obtain the name of the person playing to allow for personalization of prompts if needed in the future

alert('Welcome, ' + username + '! Let\'s get started!'); //populates a personalized welcome message

//Question One
function questionOne() {
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
  }}
questionOne();

//Question Two
function questionTwo() {
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
  }}
questionTwo();


function questionThree() {
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
  }}
questionThree();

//Question Four
function questionFour() {
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
  }}
questionFour();

//Question Five
function questionFive() {
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
  }}
questionFive();

//Question Six

function numQuestion() {
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
  }}
numQuestion();

//Question Seven

function stateQuestion() {
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
}
stateQuestion();
