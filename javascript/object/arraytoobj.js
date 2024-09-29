// convert array to object


const arr =['a','b','c','d','e'];

const obj =arr.reduce(
    (a,it) => ({...a,[it]:it}),{}
)

console.log(obj);