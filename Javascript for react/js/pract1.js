"use strict"
//let user = new Object(); // object conunstuctor
//let user = {}; //object

let user = {
    name:"Gaurav",
    age :30,
    ["you are happy"]: true //multiword proprty name must be quoted

};
console.log(user.name);
console.log(user.age);
console.log(user["you are happy"]);

let key = "hay this is gaurav";
user[key] = true;
console.log(user[key]);


user.isAdmin = true;
delete user.age;
console.log(user);

//computed properies



//object method this

let users = {
    name:"Gaurav Dubey",
    age:30
};
// users.sayHi = function(){
//     alert("Hello!");
// };

// users.sayHi();

let object = {
    "mykey" : 10,
    "mykey" :20
}
let keya = 'mykey';
console.log(object[keya]);


let getTotalAddress = (House,area,city,state) =>{
    let compeleteAddress = 
}


let student = {
    name : 'Gaurav',
    phone : '855455484',
    Email : 'abhbsd@gmal.com',
    address : {
        House: "secton 2",
        area : 'mayu vihar',
        city : 'delhi',
        state : 'delhi'
    },
    TestScore : [{
        Name : "Maths ca",
        Score : 48,
        Grade : 'A+'
    },{
        Name : "Maths ca2",
        Score : 28,
        Grade : 'A'
    }]
}

console.log(student);
console.log(student.address);
console.log(student.address.city);