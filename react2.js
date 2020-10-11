//let and const

function getClothing(isCold){
    if(isCold){
        var freezing = 'garib programmer';

    }else{
        var hot = 'its hot.';
        console.log(freezing);
    }
}
// here var can't access the freezing from other block

function getClothing(isCold){
    if(isCold){
        const freezing = 'garib programmer';

    }else{
        const hot = 'its hot.';
        console.log(freezing);
    }
}
//reference error is showing

//let can reassigin
//cont can not

let instruct='john';
instruct = 'jnjs';
console.log(instruct);