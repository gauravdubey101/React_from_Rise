console.log('dom and website layout');

//exersice

let str = 'python';
let links = document.links;
console.log(links);
let href;
Array.from(links).forEach(function(element){
    if(href.includes(str)){
        console.log(href);
    }
})