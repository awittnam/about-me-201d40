'use strict';

alert('Welcome! Let\'s play a guessing game so you can learn more about me.')

var username = prompt('What is your name?');

alert('Welcome, ' + username + '! Let\'s get started!');

var answerOne = prompt('Do I have more than three pets?').toLocaleLowerCase();

if (answerOne. === 'yes' || answerOne === 'y') {
    // tell them they are correct
    alert('You got it right!');
    //console.log the result
    console.log('The user got Question 1 correct');
}   else {
    // tell them
    alert('YOU FAIL. I have 1 animal.');
    //console.log the result
    console.log('The user got Question 1 incorrect');
}