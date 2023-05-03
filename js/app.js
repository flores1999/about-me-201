'use strict';

let username = prompt('what is your name?');
alert(`Welcome to my page ${username}. Lets play a gussing game.`);
console.log('username');

let q1 = prompt('Am I a dog person? yes/no or y/n').toLowerCase(); 
if(q1 === 'yes'|| q1 === 'y' ){
  alert('Yes I am'); 
} else if(q1 ==='no' || q1 === 'n'){
  alert('Wrong I am a dog fan');
}

let q2 = prompt('Is red my favorite color? yes/no or y/n').toLowerCase();
if(q1 === 'yes' || q2 === 'y'){
  alert('No it is black');
} else if(q2 === 'no' || q2 === 'n'){
  alert('Your right it is black');
}

let q3 = prompt('Do i like the outdoors? yes/no ory/n').toLowerCase();
if(q3 === 'yes' || q3 === 'y'){
  alert('Yes I love the outdoors');
} else if(q3 === 'no' || q3 === 'n'){
  alert(' Sorry but thats wrong, I do like the outdoors');
}

let q4 = prompt('Was I born in Oregon? yes/no or y/n').toLowerCase();
if(q4 === 'yes' || q4 === 'y'){
  alert('yes I was');
} else if( q4 === 'no' || q4 === 'n'){
  alert('Wrong I was born in Oregon');
}

let q5 = prompt('I have been to five countries').toLowerCase();
if(q5 === 'yes' || q5 === 'y'){
  alert('NO I wish I have been to five. I have only been to four');
} else if(q5 === 'no' || q5 === 'n'){
  alert('Right I have only been to four');
}

alert(`Well ${username} I hope you leard a bit about me from this.`)



































