//arro wfunction

//normal function
const upper = ['djsd','jdsjsdjs','jsndns','kdnjsd'].map(function (name){
    return name.toUpperCase();
});
//console.log(upper);

//arrow
/* const upper = ['djsd','jdsjsdjs','jsndns','kdnjsd'].map( name => name.toUpperCase();
);
//console.log(upper); */

const  greet = name => `Hello ${name} !`;
console.log(greet('aneer'));

name => `hello ${name}`

const sayHi =() => console.log('Hello  Student!');
sayHi();

