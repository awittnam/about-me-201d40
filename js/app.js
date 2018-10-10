'use strict';

alert('Welcome! Let\'s play a simple yes/no guessing game so you can learn a little about me.')

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

//Question One

var answerOne = prompt('Do I have a pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // tell them they are correct
  alert('Correct, I have one beautiful Golden Retriever.  Her name is Eva.');
  //console.log the result
  console.log('The user got Question 1 correct');
} else {
  // tell them they are incorrect
  alert('Incorrect. I have a Golden Retriever named Eva.');
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
}

//Question Five
var answerFive = prompt('Have I ever had a long, luxurious, intoxicating beard?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  //tell them they couldn't BE more right
  alert('Obviously you are correct!  And thank you for the compliment.');
  //console.log the result
  console.log('The user absolutely got Question 5 correct');
} else {
  //tell them they are totally wrong
  alert('*sigh* Wrong Wrong Wrong');
  //console.log the result
  console.log('The user got Question 5 completely wrong');
}
