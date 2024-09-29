const heights = [167,190,120,165,137];
// 
 function lowestElement(heights){
    let lowest =heights[0];
    for(const num of heights){
        if(num <lowest){
            lowest =num;
        }
    }
    return lowest;
 }
console.log(lowestElement(heights));

// another method for find the lowest number from an array

// const minNUmber =Math.min(...heights);
const minNumber = heights.reduce((min,current) =>current < min ? current:min);

console.log(minNumber);

// Find the friend with smallest Name
const names = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
// const smallest =Math.min(... names);

function smallest (names){
    let length =names[0].length;
    for (const name of names){
        if(name.length < length){
            length =name.length;
        }
    }
    return length;
}
console.log(smallest);