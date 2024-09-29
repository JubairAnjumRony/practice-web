const array =(a,b) =>{
    const newArray= [...a,...b];
   const m= Math.max(...newArray);
    return m;

}

console.log(array([1,3,34,555,44],[3,45,2,1,18]));


const square = (array) =>{
    let newArray=[];
    let sum =0;
    for(let num of array){
       num =num*num;
       sum =sum+num;
    //    newArray.push(num);

    }
    const avg =sum/array.length;
    // return newArray
    return avg;
}


console.log(square([2,3,5,7,8]));