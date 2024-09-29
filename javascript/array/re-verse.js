const numbers=[1,3,4,5,6,7];
 console.log('Original number:', numbers);
const rev_numbers=[];

for(let i=0;i<numbers.length;i++){
    const num=numbers[i];
    rev_numbers.unshift(num);
}

console.log(rev_numbers);


// reverse side

const number=[12,14,16,18,20];

console.log('second original number:',number);

const reversed =[];

for(let i=number.length-1;i>=0;i--){
    const num=number[i];
    reversed.push(num);
}
console.log("after reversing an array: ",reversed );