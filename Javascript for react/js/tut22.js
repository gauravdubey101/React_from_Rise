console.log('class inheritance');

//class is blueprint or template
//constructor run when object is created
class Employee{
    constructor(givenName,givenExp,givenDivion){

        this.name = givenName;
        this.exp = givenExp
        this.divion = givenDivion;
    }
    slogan(){
        return `i am ${this.name} and i am computer programmer`
    }
    joiningYear(){
        return 2021 - this.exp;

    }
    static  add(a,b){
        return a+b;
    }
}

gd = new Employee("gaurav",2008,"csdiv");
// console.log(gd);
// console.log(gd.joiningYear());
console.log(Employee.add(5,4));