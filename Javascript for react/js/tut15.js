console.log('create editable div');



//create a div and inject it into the page which contains a heading.

let divElem = document.createElement('div');
//add text to that created element
let val = localStorage.getItem('text');
let text;
if(val == null){
let text = document.createTextNode('This is my element .click to edit it');
}
else{
    text = document.createTextNode(val);
}
divElem.appendChild(text);
//give element id,style and class
divElem.setAttribute('id','elem');
divElem.setAttribute('class','elem');
divElem.setAttribute('style','border:2px solid black; width:154px;margin: 34px;padding:23px;');
let container = document.querySelector('.container');
let first = document.getElementById('myfirst');

//insert the element before element with id first

container.insertBefore(divElem,first);

console.log(divElem,container,first);

//add event listner to the divelem

divElem.addEventListener('click',function(){
    let noTextAreas = document.getElementsByClassName('textarea').length;
    if(noTextAreas ==0){
   
    
    

    
        let html = elem.innerHTML;
        divElem.innerHTML = `<textarea class = "textarea form-control" id="textarea" rows="3">${html}</textarea>`;
    }
    //listen for the blur event on textaera
    let textarea = document.getElementById('textarea');
    textarea.addEventListener('blur',function(){
        elem.innerHTML = textarea.value;
        localStorage.setItem('text',textarea.value);
    })
})