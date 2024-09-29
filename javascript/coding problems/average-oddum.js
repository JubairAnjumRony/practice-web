function avgOddnum(numbers){
    const odds=[];
    for(number of numbers){
        if(number%2===1){
            odds.push(number);
        }
    }
    let sum=0;
    for(const number of odds){
        sum=sum+number;
    }
    return sum;
}

const numbers=[1,2,3,4,5,6,7,8,9,10];

const result=avgOddnum(numbers);
console.log('average of odd number is:',result);