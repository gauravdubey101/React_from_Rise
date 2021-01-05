console.log('dom-3');
//dom selectors


/* 
element slector
1.single element selector
2.multi element selector

*/

//1.single element selector
let element = document.getElementById('red');
//element= element.className;
/* element=element.childNodes; */
// element=element.parentNode;
// element.style.color = 'red';
/* element.innerText = 'learning'
element.innerHTML = '<b>learning</b>' */

//console.log(element.innerText);

let sel = document.querySelector('#green');
sel = document.querySelector('.child');
sel = document.querySelector('h1');
sel = document.querySelector('div');
//console.log(sel)

//2.multi element selector

let elmn = document.getElementsByClassName('child');
elmn = document.getElementsByClassName('container');
elmn = document.getElementsByTagName('div');
//console.log(elmn[0].getElementsByClassName('child'));
console.log(elmn)

Array.from(elmn).forEach(element =>{
    console.log(element);
    element.style.color = 'blue';
})