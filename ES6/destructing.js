// const numbers =[43,99];
// const [first,second]=numbers;
// console.log(first,second);


// const [x,y]=[12,66];
// console.log(x,y);
// function doubleThem(a,b){
//     return[a*2,b*2];

// }
// const [prothom,dityo]=doubleThem(5,9);
// console.log(prothom,dityo);

// // for of for in
// const glass =  {
//     name:'glass',
//     color:'golden',
//     price:12,
//     isCleaned:true
     
// };
// // for(const key in glass)
// // {
// //     console.log(key,glass[key]);
// // }
// const keys = object.key(glass);
// console.log(keys);

const x = undefined;
if(x){
    console.log("falsy");
}
else 
console.log("true");

let p='Javascript'; 
let q=p; 
p='React'; 
console.log(q);

const isTrue=true;
console.log(!isTrue ? "hello" : "world");

const sum =(p, q)=> {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));