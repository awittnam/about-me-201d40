'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me.')

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

//Question One

var answerOne = prompt('Do I have more than one pet?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
    // tell them they are incorrect
    alert('No, I have one beautiful Golden Retriever!  Her name is Eva.');
    //console.log the result
    console.log('The user got Question 1 incorrect');
}   else {
    // tell them they are correct
    alert('Correct. I have a Golden Retriever named Eva.');
    //console.log the result
    console.log('The user got Question 1 correct');
}

//Question Two
var answerTwo = prompt('Do I have any children?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
    // tell them they are correct
    alert('Good job!  You\'re on a roll!  I have two children.');
    //console.log the result
    console.log('The user got Question 2 correct');
}   else {
    //tell the they were wrong
    alert('Nope, you\'re wrong.  But don\'t be to hard on yourself.  I have two children.');
    //console.log the result
    console.log('The user got Question 2 incorrect');
}

