console.log('child and perent');
let cont = document.querySelector('.no');
 cont = document.querySelector('.container');
 let nodeName = cont.childNodes[1].nodeName;
 let nodeType = cont.childNodes[1].nodeType;
 /* console.log(nodeName)
 console.log(nodeType) */

 //node type
 //1.element
 //2.attributes
 //3.text node
 //4.comment
 //5.document
 //10.doctype

 
//console.log(cont.childNodes);
//console.log(cont.children);
let container= document.querySelector('div.container');
//console.log(container.children[1].children[0].children);
/* console.log(container.firstChild); */
// console.log(container.firstElementChild);
// console.log(container.childNodes);
// console.log(container.lastChild);
// console.log(container.lastElementChild);
/* console.log(container.children);
console.log(container.childElementCount); */ //count of child element

// console.log(container.firstElementChild.parentNode);
console.log(container.firstElementChild.nextSibling);
console.log(container.firstElementChild.nextElementSibling);
console.log(container.firstElementChild.nextElementSibling.nextElementSibling);




