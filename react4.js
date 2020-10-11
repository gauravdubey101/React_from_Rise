//destructuring : Destructuring borrows inspiration from languages like Perl and Python by allowing you to specify the elements you want to extract from an array or object on the left side of an assignment. It sounds a little weird, but you can actually achieve the same result as before, but with much less code; and it's still easy to understand.


const point = [10,15,45];
const [x,y,z] = point;
console.log(x,y,z);

//desturing values from an objecs

const gamestone = {
    type:'quartz',
    color:'red',
    caret:21.23
};
const {type,color,caret} = gamestone;
console.log(type,color,caret);