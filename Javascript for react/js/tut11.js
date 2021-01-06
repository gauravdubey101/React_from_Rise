console.log('creating removing element in  js');

let element = document.createElement('li');
//add classname in the li element
let text = document.createTextNode('this is text node');
element.appendChild(text);
element.className = 'childul';
element.id = 'lifirst';
element.setAttribute('title','mytitle');
// element.innerText = '<b>just for checking</b>'
//element.innerHTML = '<b>just for checking</b>'

let ul=document.querySelector('ul.this');
ul.appendChild(element);
console.log(ul);

console.log(element);

let lm2 = document.createElement('h3');
lm2.id = 'lm2';
lm2.className= 'lm2';
let tnode = document.createTextNode('this is lm2 text');
lm2.appendChild(tnode);

element.replaceWith(lm2);

let myul = document.getElementById('myul');
myul.replaceChild(element ,document.getElementById('fui'))
myul.removeChild(document.getElementById('lui'));
//let pr = lm2.getAttribute('class');
// let pr = lm2.hasAttribute('id')
let pr = lm2.hasAttribute('class')
lm2.setAttribute('title','mylm2');
console.log(lm2,pr);

//excersie
/* create heading element ewith text as "just  for kearing purpose and create  an tag out side  it  with href */

let head = document.createElement('h1');
let text1 = document.createTextNode('got live channel');
head.appendChild(text1);
console.log(head)
let cr = document.createElement('a');
cr.setAttribute('href','https://www.google.com');
console.log(cr)




