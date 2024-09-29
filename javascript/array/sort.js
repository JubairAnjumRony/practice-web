const friends1=['rakib','sakib','himel','anik','saka','abir'];

const friends=[1,3,5,6,78,90,2];

const numbers_asc=[friends].sort(function (a,b) { return a-b });
const numbers_desc=[friends].sort(function (a,b) {return b-a });

console.log(numbers_asc);
console.log(numbers_desc);


console.log(friends1.sort());