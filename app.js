'use strict';

let morningPersonAnswer = prompt('Am I a morning person?').toLowerCase();
if (morningPersonAnswer === 'yes') {
  alert('Yes! That\'s correct! My brain works much better in the morning.');
}
console.log(`Question 1: Answer: ${morningPersonAnswer}`);

let orangeSodaAnswer = prompt('Do I like orange soda?').toLowerCase();
if (orangeSodaAnswer === 'no') {
  alert('Correct! I actually hate orange-flavored anything...unless it\'s an actual orange.');
}
console.log(`Question 2: Answer: ${orangeSodaAnswer}`);

let cheesyDanceMovieAnswer = prompt('Do I love cheesy dance movies?').toLowerCase();
if (cheesyDanceMovieAnswer === 'yes') {
  alert('You guessed it! Top faves include: You Got Served, Honey, and Stomp The Yard');
}
console.log(`Question 3: Answer: ${cheesyDanceMovieAnswer}`);

let tallerThanAnswer = prompt('Am I taller than 5\'3\"?').toLowerCase();
if (tallerThanAnswer === 'no') {
  alert('You\'re right. I\'m actually the shortest in my immediate family. And they remind me of this A LOT.')
}
console.log(`Question 4: Answer: ${tallerThanAnswer}`);

let playsInstrumentAnswer = prompt('Do I play an instrument?').toLowerCase();
if (playsInstrumentAnswer === 'yes') {
  alert('Yep! I play guitar, and I also sing. Fun fact: at one point I was part of my family band. Until I moved away.');
}
console.log(`Question 5: Answer: ${playsInstrumentAnswer}`);