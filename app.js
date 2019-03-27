'use strict';
document.getElementById('start-quiz').addEventListener('click', () => {
  let userName = prompt('Before we start, I need to know who you are. What is your name?');
  alert(`Nice to meet you ${userName}!`);
  let morningPersonAnswer = prompt('Am I a morning person?').toLowerCase();
  if (morningPersonAnswer === 'yes' || morningPersonAnswer === 'y') {
    alert('Yes! That\'s correct! My brain works much better in the morning.');
  } else if (morningPersonAnswer === 'no' || morningPersonAnswer === 'n') {
    alert('Sorry, that\'s incorrect.');
  }
  console.log(`Question 1: Answer: ${morningPersonAnswer}`);
  let orangeSodaAnswer = prompt('Do I like orange soda?').toLowerCase();
  if (orangeSodaAnswer === 'no' || orangeSodaAnswer === 'n') {
    alert('Correct! I actually hate orange-flavored anything...unless it\'s an actual orange.');
  } else if (orangeSodaAnswer === 'yes' || orangeSodaAnswer === 'y') {
    alert('Sorry, you guessed wrong.');
  }
  console.log(`Question 2: Answer: ${orangeSodaAnswer}`);
  let cheesyDanceMovieAnswer = prompt('Do I love cheesy dance movies?').toLowerCase();
  if (cheesyDanceMovieAnswer === 'yes' || cheesyDanceMovieAnswer === 'y') {
    alert('You guessed it! Top faves include: You Got Served, Honey, and Stomp The Yard');
  } else if (cheesyDanceMovieAnswer === 'no' || cheesyDanceMovieAnswer === 'n') {
    alert('Sorry, that\'s incorrect.');
  }
  console.log(`Question 3: Answer: ${cheesyDanceMovieAnswer}`);
  let tallerThanAnswer = prompt('Am I taller than 5\'3"?').toLowerCase();
  if (tallerThanAnswer === 'no' || tallerThanAnswer === 'n') {
    alert('You\'re right. I\'m actually the shortest in my immediate family. And they remind me of this A LOT.');
  } else if (tallerThanAnswer === 'yes' || tallerThanAnswer === 'y') {
    alert('Sorry, you guessed wrong.');
  }
  console.log(`Question 4: Answer: ${tallerThanAnswer}`);
  let playsInstrumentAnswer = prompt('Do I play an instrument?').toLowerCase();
  if (playsInstrumentAnswer === 'yes' || playsInstrumentAnswer === 'y') {
    alert('Yep! I play guitar, and I also sing. Fun fact: at one point I was part of my family band. Until I moved away.');
  } else if (playsInstrumentAnswer === 'no' || playsInstrumentAnswer === 'n') {
    alert('Sorry, that\'s incorrect.');
  }
  console.log(`Question 5: Answer: ${playsInstrumentAnswer}`);
});
