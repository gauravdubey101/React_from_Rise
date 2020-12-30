//stings
console.log('all about string');

const names = 'Gaurav';
const greeting = 'good morning';
console.log(greeting +' '+ names);
let html ;
html = '<h1>this is heading </h1>';
/* html = html.concat('this','stru');
console.log(html);
console.log(html.length);
console.log(html.toLowerCase());
console.log(html.toUpperCase()); */

/* console.log(html[0]);
console.log(html.indexOf('this'));
console.log(html.indexOf('thidnjfngs'));
console.log(html.lastIndexOf('this'));
console.log(html.charAt(3)); */

/* console.log(html.endsWith('</h1>'));
console.log(html.endsWith('</h1>dngjfg')); 

*/
/* console.log(html.includes('is'));
console.log(html.substring(0,3)); */

/* console.log(html.slice(0,-4)); */
//it convert string into array
/* console.log(html.split('<>')) */

console.log(html.replace('this','its'));

let fruits = 'orenge';
let frutes2 = 'Apple';
let myHtml = `hello ${fruits} happy to see you ${frutes2}`;
console.log(myHtml);

document.body.innerHTML = myHtml;

