function add(num1,num2){
    if(typeof num1 !== 'number'){
        return 'please provide a number';
    }
    else if(typeof num2!=='number'){
        return "please provide a number";
    }
 
    const sum=num1+num2;
    return sum;
    }


const result=add(5,9);
console.log(result);



function fullName(firstName,secondName){
    if(typeof firstName !=='string' || typeof secondName !=='string'){
        return 'please provide us a string'
    }
    const name=firstName + ' '+ secondName;

    return name;
}

console.log(fullName( 'bhorttaj'));

function getPrice(product){
    if(typeof product!=='object'){
        return 'please provide an object';
    }
    const price =product.price;
    return price;
}

const finalprice= getPrice({
    chulkani:'molom', price:34,quantity:2
})

console.log(finalprice);

function getNumbers(numbers){
    if(Array.isArray(numbers)===false){
        return 'please provide an array';
    }
    const array=[];
    for(let number of numbers){
        array.push(number);
    }
    return array;

}

console.log(getNumbers(3,4,5,65,8,0));