console.log('dom processding (document object model)');


let a= document;
a= document.all;
/* a= document.body;
a=document.forms; */
/* 
Array.from(a).forEach(function(element){
    console.log(element);
}) */
a= document.links[2];
/* a= document.images[0]; */
// a= document.scripts[0];

console.log(a);
//console.log(typeof(a));