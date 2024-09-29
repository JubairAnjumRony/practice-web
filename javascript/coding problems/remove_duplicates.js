const numbers=[1,3,4,5,6,7,8,1,2,3,10];

function noduplicate(array){
    const unique=[];
    for(const num of array){
        if(unique.includes(num)===false){
        unique.push(num);
        }

    }
    return unique;
}


const result=noduplicate(numbers);
console.log('after removing duplicates :' ,result);


const people=['abdur','rakib','sakib','himel','babu','abdur','abul'];

function noduplicate2(array){
    const unique=[];
    for(const num of array){
        if(unique.includes(num)===false){
            unique.push(num);
        }
    }
    return unique;
}

console.log("after removing selfish people:",noduplicate2(people));