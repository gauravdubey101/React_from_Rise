console.log('object prototype');


//object leterals
let obj = {
    name:'Gaurav Dubey',
    address:'shivdham colony',
}

function Obj(giveName){
    this.name = giveName;
}

Obj.prototype.giveName = function(){
    return this.name;
}

let obj2 = new Obj("gaurav");
console.log(obj2);


 
