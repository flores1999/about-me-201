'use strict';


let username = prompt('what is your name?');
alert(`Welcome to my page ${username}. Lets play a gussing game.`);
console.log('username');

let correctcount = 0;


function q1a()
{
  let q1 = prompt('Am I a dog person? yes/no or y/n').toLowerCase();
  if(q1 === 'yes'|| q1 === 'y' ){
    alert('Yes I am');
    correctcount += 1;

  } else if(q1 ==='no' || q1 === 'n'){
    alert('Wrong I am a dog fan');
  }
}
q1a();


function q2a(){
  let q2 = prompt('Is red my favorite color? yes/no or y/n').toLowerCase();
  if(q2 === 'yes' || q2 === 'y'){
    alert('No it is black');
  } else if(q2 === 'no' || q2 === 'n'){
    alert('Your right it is black');
    correctcount += 1;
  }
}
q2a();


function q3a(){
  let q3 = prompt('Do i like the outdoors? yes/no ory/n').toLowerCase();
  if(q3 === 'yes' || q3 === 'y'){
    alert('Yes I love the outdoors');
    correctcount += 1;
  } else if(q3 === 'no' || q3 === 'n'){
    alert(' Sorry but thats wrong, I do like the outdoors');
  }
}
q3a();


function q4a(){
  let q4 = prompt('Was I born in Oregon? yes/no or y/n').toLowerCase();
  if(q4 === 'yes' || q4 === 'y'){
    alert('yes I was');
    correctcount += 1;
  } else if( q4 === 'no' || q4 === 'n'){
    alert('Wrong I was born in Oregon');
  }
}
q4a();


function q5a(){
  let q5 = prompt('I have been to five countries? yes/no or y/n').toLowerCase();
  if(q5 === 'yes' || q5 === 'y'){
    alert('NO I wish I have been to five. I have only been to four');
  } else if(q5 === 'no' || q5 === 'n'){
    alert('Right I have only been to four');
    correctcount += 1;
  }
}
q5a();


function q6a(){
  let age = 24;
  let attempts = 4;
  let guessedCorrectly = false;
  while (attempts > 0 && !guessedCorrectly) {
    let guess = prompt("Guess my age:");
    if (parseInt(guess) === age) {
      alert("you got it!");
      guessedCorrectly = true;
      correctcount += 1;
    } else {
      attempts--;
      alert(`Sorry, that's not my age. You have ${attempts} attempts left.`);
    }
  }
  if (!guessedCorrectly) {
    alert(`You're out of attempts. My age is ${age}.`);
  }
}
q6a();


function q7a(){
  let guesses = 5;
  let answers = ['chicken', 'sushi', 'dumplings'];
  while(guesses > 0) {
    let response = prompt('Guess my one of my top 3 favorite foods? you have 6 guesses');
    let correctGuess = false;
    for(let i = 0; i < answers.length; i++) {
      if(response === answers[i]) {
        alert('Nice! you figured out one of my favorite foods');
        correctGuess = true;
        correctcount += 1;
      }
    }
    if (!correctGuess) {
      alert(`That is wrong! you have ${guesses} left`);
      guesses--;
    } else {
      break;
    }
  }
  if (guesses === 0) {
    alert(`You are out of guesses. my top 3 are ${answers}` );
  }
}
q7a();


alert(`Good job ${username} you got ${correctcount} out of 7 right. I hope you leard a bit about me from this.`); 





























