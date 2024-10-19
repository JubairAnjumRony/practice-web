// truthy: 'almas',5, true,{}, []
// '', 0, false, null, undefined

let myVar =5;
if(myVar){
    myVar =myVar*100;
}
else{
    myVar =0;
}
console.log(myVar);

let money ='null' ;
if(!money){
    console.log('falsy value');
}
else{
    console.log('truthy value');
}

// ternary operator
let food =100;
let food1 = food<=100?'biriyani':'cHA';
console.log(food1);


// number to string and string to number
let number =22;
let numstr =number + '';
console.log(numstr);

const str ='43';
const strnum =+str;
console.log(strnum);

const isActive = true;
const showUser = () => console.log('hide user');
const hideUser = () => console.log('hide user');
isActive? showUser():hideUser();

isActive && showUser();
// use || if the left is false then right side will be executed
isActive || hideUser();
// toogle
// isActive  = !isActive;