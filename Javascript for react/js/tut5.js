console.log('functions in js');

//let/const has block level scope
//var has function level scope

let i=222;
console.log(i);
function ul(name){
    let i=9;
    console.log(i)
    return `this is ${name} ui`;
}
console.log(ul('gaurav'),i);
/* const mygreet = function(name,thanks = 'thanks'){
    let msg = `happy birthday to my buddy ${name} and welcome to new life ${thanks} for whishing.`;
    return msg;
}

let name = 'Gaurav';
let name2 = 'Happy';
let val = mygreet(name2,'thanks');
console.log(val);


const myobj = {
    name:'gaurav',
    game:function( ){
        return 'GTA';
    }
}
console.log(myobj.game());

arr = ['fruit','vegetable','oil'];
arr.forEach(function(element,index,array){
    console.log(element,index)
})
 */