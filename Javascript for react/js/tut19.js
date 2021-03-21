console.log('object letrals');

let cars ={
    name:'aspire',
    topseed:180,
    run : function(){
        console.log('lets spped it');
    }
}
//counstuctor
///we have already seen counstuctor like these
//constructor are those which creates objects
//new keyword creates new objects
//new Date();
//creating a counstructor for cars

function GeneralCar(givenName,givenSpeed){
    this.name = givenName;
    this.topseed = givenSpeed;
    this.run = function(){
        console.log(`${this.name} is running`);
    }
    this.analyze = function(){
        console.log(`speed must be slower than ${this.topspeed}`);
    }
}
car1 = new GeneralCar('ford',180);
car2 = new GeneralCar('ford freestyle',180);
//console.log(car1);
console.log(car2);


//console.log(cars);
