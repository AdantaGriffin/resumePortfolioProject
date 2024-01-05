// CODE FOR AGE

let birthdayYear = new Date(90, 3, 14);
//console.log(birthday.getUTCFullYear()); //gets year of birth
//let birthYear = birthday.getUTCFullYear(); ..birthday year

let today = new Date();
//console.log(today.getUTCFullYear()); //todays year

let age = today - birthdayYear;
age = age / 1000; //sec
age = age / 60; //min
age = age / 60; //hour
age = age / 24; //days
age = age / 365;

//console.log(Math.floor(age));
let birthday = new Date(2024, 3, 14);
let daysUntil = birthday - today;

daysUntil = daysUntil / 1000;
daysUntil = daysUntil / 60;
daysUntil = daysUntil / 60;
daysUntil = daysUntil / 24;
daysUntil = Math.floor(daysUntil);
//console.log(daysUntil);

document.getElementById('aboutText').innerHTML = 'Hi, My name is Adanta Griffin. I\'m ' + Math.floor(age) + ' years old and I\'m a Brooklyn native. There are currently ' + daysUntil + ' days until my birthday. I like combat sports and food. If I\'m not at the gym, infront of a device or out playing with my dogs, I\'m in the kitchen cooking. Cooking is an escape that I happen to find very relaxing. I come from a mixed background with family in North Africa, Europe, Central America and America. I speak three languages (english, french, spanish) and I just learned three more (html, css, javascript). Coming from such a diverse background I\'ve been immersed into various cultures from an early age. I used these experience in my approach to leaning code, <i>"It is just another language"</i>! I love to laugh and take in what life offers.'

