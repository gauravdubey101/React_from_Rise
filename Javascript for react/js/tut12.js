console.log('event and event object');

document.getElementById('heading').addEventListener('click',function(e){
    let variable;
    console.log('you have clicked the heading');
   // variable = e.target;
    variable = e.target.className;
    variable = e.target.classList;
  //  location.href = '//google.com'4
  //variable = Array.from(e.target.classList)
  variable = e.target.id;
  variable = e.offsetX;
  variable = e.offsetY;
  variable = e.clientX;
  variable = e.clientY;
  console.log(variable);

});