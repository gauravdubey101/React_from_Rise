console.log('events');

/* let btn  = document.getElementById('btn');
btn.addEventListener('click', func1);
btn.addEventListener('dblclick', func2);
//btn.addEventListener('mousedown', func3);
btn.addEventListener('mouseenter',func3);
btn.addEventListener('mouseleave',func4);
btn.addEventListener('mousemove',func5);
function func1(e){
    console.log("thanks to",e);
    e.preventDefault();
}

function func2(e){
    console.log(e.offsetX,e.offsetY);
    console.log("thanks its double click",e);

    e.preventDefault();

    
}
function func3(e){
    console.log("thanks to finc23",e);
    e.preventDefault();
}
function func4(e){
    console.log('mouse leave');
    e.preventDefault();
}

function func5(e){
    console.log('mouse move');
    e.preventDefault();
} */

document.querySelector('.container').addEventListener('mousemove',function(e){
    console.log(e.offsetX,e.offsetY);
    document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},154)`;
    console.log("you triggered mouse move evrnt")
})

