console.log('local and session storage');

let impArray = ['food1','food2','food3'];
 //add ket value pair inside local storage
localStorage.setItem('Name','Gaurav');
localStorage.setItem('Name2','Dubey');
localStorage.setItem('good',JSON.stringify(impArray));
//clears the entire storage
//localStorage.clear();

//clear only particular key

localStorage.removeItem('Name');
//retrive item from local storage
let name = localStorage.getItem("Name");
name = JSON.parse(localStorage.getItem('good'));
console.log(name);









