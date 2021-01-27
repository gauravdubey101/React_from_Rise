console.log('time and date');

let today = new Date();
let t2 = new Date('8-4-1988 04:45:08');
t2 = new Date('july 14 1888');
//t2 = new Date(' 11/10/1888');

//console.log(typeof today);

console.log(t2);
//js read months form 0 and days form 0 .
let a ;
a= t2.getDay();
ab= t2.getMinutes();
ac= t2.getSeconds();
ad=t2.getDate();
af = t2.getHours();
at= t2.getTime();
att = t2.getMilliseconds()
attm = t2.getMonth();


console.log('Day:'+a);
console.log('Min:'+ab);
console.log('sec:'+ac);
console.log('Date:'+ad);
console.log('Hours:'+af);
console.log(att);
t2.setDate(23);
t2.setMonth(3);
t2.setFullYear(2000);
t2.setMinutes(12);
t2.setHours(5);
console.log(t2);

